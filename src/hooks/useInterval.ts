// basically Dan Abramov's hook 

import { useEffect, useRef } from "react";

type IntervalFunction = () => (unknown | void)

export function useInterval(callback: IntervalFunction, delay: number) {
    const savedCallback = useRef<IntervalFunction | null>(null)
    
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        const tick = () => {
            if(savedCallback.current !== null) savedCallback.current()
        }

        if(delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id);
        }
    }, [delay])
}