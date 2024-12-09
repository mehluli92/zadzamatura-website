import React, { useEffect, useState } from 'react'

export default function Counter({ max, comment }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let timer

        if (count < max) {
            // Increment the count
            timer = setTimeout(() => {
                setCount((prev) => prev + 1)
            }, 300) // Adjust time interval for counting
        } else {
            // Reset count after 4 seconds
            timer = setTimeout(() => {
                setCount(0)
            }, 4000)
        }

        return () => clearTimeout(timer) // Cleanup timeout on unmount or dependency change
    }, [count, max]) // Dependency array to avoid infinite re-renders

    return (
        <div className="text-white text-4xl font-extrabold">
            {count} {comment}
        </div>
    )
}
