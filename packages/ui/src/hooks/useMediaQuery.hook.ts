import React from "react";

// Create a media query hook
export const useMediaQuery = (query: string) => {
    // dom size check
    const [matches, setMatches] = React.useState<boolean>(false);

    React.useEffect(()=>{
        const media = window.matchMedia(query);

        if(media.matches !== matches) {
            setMatches(media.matches); // false case
        }

        // success case
        const listener = () => setMatches(media.matches);
        // add Event Listener at change
        media.addEventListener('change', listener);
        return()=> media.removeEventListener('change', listener); // when end remove previous listener
    },[matches, query]); // defend on matches and query | boolean state and string param
    return matches
}
