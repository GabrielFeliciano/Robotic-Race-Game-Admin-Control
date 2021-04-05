import { useEffect, useState } from "react";

export default function TreeDotsLoading () {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1);
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <span>{".".repeat(count % 3 + 1)}</span>
    )
}