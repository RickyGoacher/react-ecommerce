import { useEffect } from "react";

export function useScrollTop(trigger:Array<any>) {
    useEffect(() => {
        if(window) window.scrollTo(0, 0);
    }, trigger);
}