'use client'

import {cn} from "@workspace/ui/lib/utils";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@workspace/ui/components/ui/navigation-menu";
import Link from "next/link";
import {commonNavData} from "@workspace/ui/data/navigation";
import {NavRoute} from "@workspace/ui/interfaces";
import React from 'react';
import {useScrollToSection} from "@workspace/ui/hooks/useScrollToSection";
import {scrollToSection} from "@workspace/ui/lib/scroll-utils";

export const FloatingNav = () => {
    // activeSection State
    const [activeSection, setActiveSection] = React.useState<string>("");

    // get ScrollHook, for onClick events
    const handleScroll = useScrollToSection(100);

    // useEffect Area: get activeSection and check is active and used in styling (menu-active)
    // compare current [activeSection] and each item.href value
    // if match add active styling in item
    React.useEffect(() => {
        // for window scroll events
        const handleScrollSpy = () => {
            // Get all section IDs from navData
            const sections = commonNavData.flatMap(item => {
                // flatmap: flattening the result by one level
                // check the first menu(as main-menu) if has href property slice previous '#' string
                const main = item.href.startsWith('#') ? item.href.slice(1) : null;
                // integrate search submenu by property.href has '#', and slice previous char '#' or return []
                const subs = item.items?.filter(sub => sub.href.startsWith('#')).map(sub => sub.href.slice(1)) || [];
                // return main-menu, and sub-menu[0], sub-menu[1], sub-menu[2]...
                return [main, ...subs].filter(Boolean); /* use .filter(Boolean) can discard false values(0,
                 null, undefined, NaN */
            }) as string[];

            // scrollPosition
            const scrollPos = window.scrollY + 100;

            // for syntax
            for (const section of sections) { // this is previous menuItems by `const sections = ...`
                // get Element
                const element = document.getElementById(section);
                if (element) {
                    // if element caught By ID
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                        // case: current pos inside area from top and bottom
                        setActiveSection(`#${section}`)
                        break;
                    }
                }
            }
        };

        // addEventListener set
        window.addEventListener('scroll', handleScrollSpy, {passive: true});
        handleScrollSpy(); // initial check
        // delete Listener when scroll event ends
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, [])



    const renderSingleMenu = (singleItemParam: NavRoute) => {
        const isActive = activeSection === singleItemParam.href; // if states of activeSection are same with
        // singleParam.href return true
        return (
            <NavigationMenuItem key={`${singleItemParam.href}-${singleItemParam.title}`}>
                <NavigationMenuLink asChild>
                    <Link
                        key={singleItemParam.href}
                        href={singleItemParam.href}
                        title={singleItemParam.title}
                        onClick={(e) => scrollToSection(e, singleItemParam.href)}
                        className={cn(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground")}
                    >
                        {singleItemParam.title}
                    </Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        );
    }
    const renderDepthMenu = (multipleMenu: NavRoute) => {
        return (
            <NavigationMenuItem key={`${multipleMenu.href}-${multipleMenu.title}`}>
                <NavigationMenuTrigger>{multipleMenu.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                        {multipleMenu.items?.map((subItem) => {
                            const isActive = activeSection === subItem.href;
                            return (
                                <li key={`${subItem.href}-${subItem.title}`}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={subItem.href}
                                            key={`${subItem.href}-${subItem.title}`}
                                            onClick={(e) => handleScroll(e, subItem.href)}
                                            className={cn("", isActive && "bg-accent text-accent-foreground")}
                                        >
                                            <div>
                                                {subItem.title}
                                            </div>
                                            <p>
                                                {subItem.description}
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            )
                        })}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        )
    }

    return (
        <div className={cn("fixed inset-0 top-4 left-1/2 -translate-x-1/2  flex items-center h-fit"+
            " justify-center" +
            " z-[100]")}>
            <NavigationMenu className={cn("relative rounded-xl px-4 py-2 bg-black w-fit")}>
                <NavigationMenuList>
                    {
                        commonNavData.map((menuItems) => {
                            if (menuItems.items === undefined) {
                                return renderSingleMenu(menuItems)
                            } else {
                                return renderDepthMenu(menuItems)
                            }
                        })
                    }
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
