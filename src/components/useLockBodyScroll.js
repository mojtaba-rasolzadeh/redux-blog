import {
    useLayoutEffect
} from "react";

export default function() {
    useLayoutEffect(() => {
        // get original value of body
        const originalStyle = window.getComputedStyle(document.body).overflow;
        // prevent scrolling on mount
        document.body.style.overflow = 'hidden';

        // re-enable scrolling when component is unmounts
        return () => document.body.style.overflow = originalStyle;
    }, []);
}