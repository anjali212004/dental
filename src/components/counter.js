import React, { useState, useEffect, useMemo } from 'react';

const Counter = () => {
    const counters = useMemo(() => [
        { end: 200, title: "Happy Customers" },
        { end: 50, title: "Projects Completed" },
        { end: 10, title: "Years Experience" },
    ], []);

    const [counts, setCounts] = useState(counters.map(() => 0));

    useEffect(() => {
        counters.forEach((counter, index) => {
            let start = 0;
            const duration = 2000; // Total animation duration in ms
            const increment = Math.ceil(counter.end / (duration / 50)); // Increment per step

            const timer = setInterval(() => {
                start += increment;
                if (start >= counter.end) {
                    clearInterval(timer);
                    start = counter.end; // Ensure final value is accurate
                }
                setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = start;
                    return newCounts;
                });
            }, 50); // Update every 50ms
        });
    }, [counters]); // Include counters in the dependency array

    return (
        <div className="wrapper">
            <div className="row">
                {counters.map((counter, index) => (
                    <div key={index} className="col-md-4">
                        <div className="text-center m-3">
                            <h3 className="title" style={{"fontSize":"48px","fontWeight":700}}>{counts[index]}<span style={{"color":"green"}}>+</span></h3>
                            <p className="text-muted">{counter.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Counter;
