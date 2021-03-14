export function debounce (timer: number, callback: (...args:any[]) => void) {
    let timeOut: any = null;
    function debounce(a: any) {
        const args = arguments;
        if (timeOut) {
            clearInterval(timeOut);
        } 
        timeOut = setTimeout(() => {
            callback(args);
            clearInterval(timeOut);
        }, timer);
    };
    return debounce;
}