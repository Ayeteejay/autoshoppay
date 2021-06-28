import React, {useState, useEffect} from 'react'
const WindowSize = () =>{
            const useWindowSize = () => {
            const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
            });
            useEffect(() => {
            function handleResize() {
                setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
            }, []);
            return windowSize;
        };
        const size = useWindowSize();
        return (
            <React.Fragment>
                <p style={{display:"none"}}>{size.width}</p>
            </React.Fragment>
        )
};
export default WindowSize