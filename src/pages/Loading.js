import React, { useState, useEffect } from "react";

const Loading = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            <div className='load' style={loading ? {} : { opacity: 0, transition: "opacity 0.3s ease-in, transform 0.3s ease-in", transform: "translateY(-100%)" }}>
                <div className="loader">
                    <div className="cell d-0"></div>
                    <div className="cell d-1"></div>
                    <div className="cell d-2"></div>

                    <div className="cell d-1"></div>
                    <div className="cell d-2"></div>

                    <div className="cell d-2"></div>
                    <div className="cell d-3"></div>

                    <div className="cell d-3"></div>
                    <div className="cell d-4"></div>
                </div>
            </div>
        </>
    );
}

export default Loading;