import React, {useState} from "react";

function useCount() {
    count [count, setCount] = useState(0);

    const plus = () => setCount((count) => ++count);
    const minus = () => setCount((count) => --count);

    return [count, plus, minus];
}

export default useCount;