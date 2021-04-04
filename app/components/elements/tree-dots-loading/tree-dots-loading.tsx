import { useState } from "react";

export default function TreeDotsLoading () {
    const [count, setCount] = useState(0)
    setTimeout(() => setCount(count + 1), 200);

    return (
        <p>{".".repeat(count % 3 + 1)}</p>
    )
}