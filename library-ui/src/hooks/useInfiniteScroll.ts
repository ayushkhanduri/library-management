import { useCallback, useEffect } from "react"

export const useInfiniteScroll = (distance: number, callback: ()=>void,isLastPage: boolean, id?: string ) => {
    const onScroll = useCallback((ev: any) => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return;
        }
        callback();
    }, []);
    useEffect(( ) => {
        let selectedElement = id? document.getElementById(id) : window;
        selectedElement.addEventListener("scroll", onScroll);
        return () => {
            selectedElement.removeEventListener('scroll', onScroll);
        }
    }, []);

    useEffect(() => {
        if(isLastPage) {
            let selectedElement = id? document.getElementById(id) : window;
            selectedElement.removeEventListener('scroll', onScroll);
        }
    }, [isLastPage]);
}