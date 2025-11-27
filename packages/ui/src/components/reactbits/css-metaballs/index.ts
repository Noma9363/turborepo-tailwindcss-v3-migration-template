'use client';

import dynamic from 'next/dynamic';
import type {CSSMetaBallsProps} from './CSSMetaBalls';

const CSSMetaBalls = dynamic(
    ()=> import('./CSSMetaBalls'),
    { ssr: false}
);

export {CSSMetaBalls};
export default CSSMetaBalls;
export type {CSSMetaBallsProps}
