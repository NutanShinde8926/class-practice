import { useEffect, useState } from "react"

const ChangeColor = () => {
    const [color, setColor] = useState('red')
    
    useEffect(() => {
        const interval = setInterval(() => {
            setColor((prevColor) => 
                prevColor === "red" ? "blue" : "red"
            );
        }, 2000);
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div>
            {/* Double curly braces are required for inline styles */}
            <div style={{
                backgroundColor: color,
                height: '200px',
                width: '200px'
            }}>
            </div>
        </div>
    )
}

export default ChangeColor
