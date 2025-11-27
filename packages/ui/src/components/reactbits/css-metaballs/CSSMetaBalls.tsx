'use client';

import React from 'react';

export interface CSSMetaBallsProps {
    /** Primary ball color (use rgb or hex for solid colors) */
    color?: string;
    /** Secondary ball color for variety (defaults to same as primary color) */
    secondaryColor?: string;
    /** Number of animated balls (2-10 recommended) */
    ballCount?: number;
    /** Ball size in pixels */
    ballSize?: number;
    /** Blur amount in pixels (higher = more gooey, lower = sharper) - only used in 'gooey' mode */
    blurAmount?: number;
    /** Contrast multiplier (higher = sharper edges, 50+ for very sharp) - only used in 'gooey' mode */
    contrastAmount?: number;
    /** Animation speed multiplier */
    speed?: number;
    /** Display mode: 'gooey' for metaball effect, 'sharp' for separate circles */
    mode?: 'gooey' | 'sharp';
    /** Background color for the container (recommended: dark colors like #202020) */
    backgroundColor?: string;
    /** Additional CSS classes */
    className?: string;
}

/**
 * CSS MetaBalls Component
 *
 * Creates organic, gooey animated blobs using CSS filters.
 * Based on: https://codepen.io/keithclark/pen/WNgRMQ
 *
 * The "metaball" effect is achieved by:
 * 1. Blurring elements with filter: blur()
 * 2. Increasing contrast with filter: contrast()
 * 3. The blur+contrast creates the gooey merging effect
 *
 * For solid, clean metaballs (like https://codepen.io/quentinhocde/pen/wBNYQx):
 * - Use white or light colors for balls
 * - Use dark background (#202020)
 * - Use lower contrast (15-25)
 * - Use moderate blur (10-20)
 */
const CSSMetaBalls = (
    {
        color = 'white',
        secondaryColor,
        ballCount = 4,
        ballSize = 10,
        blurAmount = 10,
        contrastAmount = 1,
        speed = 1,
        mode = 'gooey',
        backgroundColor = '#202020',
        className = '',
    }: CSSMetaBallsProps
) => {
    const uniqueId = React.useId().replace(/:/g, '_');

    // Default secondaryColor to match primary color if not provided
    const finalSecondaryColor = secondaryColor ?? color;

    // In sharp mode, disable blur and contrast
    const effectiveBlur = mode === 'sharp' ? 0 : blurAmount;
    const effectiveContrast = mode === 'sharp' ? 1 : contrastAmount;

    // deterministic size multipliers (no random)
    const sizeMultipliers = [1.0, 0.7, 1.3, 0.85, 1.15, 0.95, 1.25, 0.75, 1.1, 0.9];


    // Generate random animation parameters for each ball
    const balls = React.useMemo(() => {
        const durations: number[] = [11.2, 9.5, 13.8, 8.7, 15.3, 10.9, 12.4, 14.1, 9.8, 11.7];
        const delays = [-2.3, -4.8, -1.5, -5.2, -3.7, -0.9, -4.1, -2.9, -5.5, -1.2];
        return Array.from({length: ballCount}, (_, index) => {
            const isEven = index % 2 === 0;
            const duration = ((durations[index % durations.length]) / speed);
            const delay = -(delays[index % delays.length]);
            // Random size variation: 60% to 140% of base ballSize
            const sizeMultiplier = sizeMultipliers[index % sizeMultipliers.length];

            return {
                id: index,
                duration: duration.toFixed(1),
                delay: delay.toFixed(1),
                color: isEven ? color : finalSecondaryColor,
                size: sizeMultiplier && Math.round(ballSize * sizeMultiplier),
            };
        });
    }, [ballCount, color, finalSecondaryColor, speed, ballSize]);

    // Inject global animations once
    React.useEffect(() => {
        if (typeof document === 'undefined') return;

        const styleId = 'metaballs-animations';
        if (document.getElementById(styleId)) return;

        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
      @keyframes metaballs-spin {
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes metaballs-move {
        0% {
          transform: translate(0%, 100%);
        }
        15% {
          transform: translate(-120%, 160%);
        }
        30% {
          transform: translate(100%, -80%);
        }
        40% {
          transform: translate(-140%, 0%);
        }
        60% {
          transform: translate(40%, -80%);
        }
        80% {
          transform: translate(-160%, -20%);
        }
        100% {
          transform: translate(40%, 60%);
        }
      }
    `;
        document.head.appendChild(style);
    }, []);

    const containerStyle: React.CSSProperties = {
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: backgroundColor,
        filter: `contrast(${effectiveContrast})`,
    };

    const wrapStyle: React.CSSProperties = {
        position: 'absolute',
        inset: 0,
        background: 'transparent',
        animation: 'metaballs-spin 7s ease-in-out infinite',
    };

    return (
        <>
            <style>{`
        .metaball-${uniqueId}::before,
        .metaball-${uniqueId}::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          filter: blur(${effectiveBlur}px);
          animation: metaballs-move 12s infinite alternate ease-in-out;
        }
      `}</style>
            <div className={`metaballs-container ${className}`} style={containerStyle}>
                <div className="metaballs-wrap" style={wrapStyle}>
                    {balls.map((ball) => {
                        const ballBeforeStyle: React.CSSProperties = {
                            background: ball.color,
                            animationDuration: `${ball.duration}s`,
                            animationDelay: `${ball.delay}s`,
                        };

                        const ballAfterStyle: React.CSSProperties = {
                            background: ball.color,
                            animationDuration: `${(parseFloat(ball.duration) * 0.7).toFixed(1)}s`,
                            animationDelay: `${(parseFloat(ball.delay) - 2).toFixed(1)}s`,
                        };

                        return (
                            <div key={ball.id} className={`metaball-${uniqueId}`}>
                                <style>{`
                  .metaball-${uniqueId}:nth-child(${ball.id + 1})::before {
                    width: ${ball.size}px;
                    height: ${ball.size}px;
                    margin: -${(ball.size / 2)}px;
                    background: ${ballBeforeStyle.background};
                    animation-duration: ${ballBeforeStyle.animationDuration};
                    animation-delay: ${ballBeforeStyle.animationDelay};
                  }
                  .metaball-${uniqueId}:nth-child(${ball.id + 1})::after {
                    width: ${ball.size}px;
                    height: ${ball.size}px;
                    margin: -${(ball.size / 2)}px;
                    background: ${ballAfterStyle.background};
                    animation-duration: ${ballAfterStyle.animationDuration};
                    animation-delay: ${ballAfterStyle.animationDelay};
                  }
                `}</style>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CSSMetaBalls;
