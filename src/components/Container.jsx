import React, {useState} from 'react'

export default function Container() {

const [color, setColor] = useState('#000000');

const [manageInterval, setManageInterval] = useState(0);

const genarateNumber= () => Math.floor(Math.random() * 256);

const getHex = (red, green, blue)=>{
    return (
        "#" + [red, green, blue].map((coolor) =>{
            const hex = coolor.toString(16);
            return hex.lenght === 1 ? "0" + hex : hex; 
        })
        .join("")
    );
};

const generateHex = ()=>{
    const rgb ={
        r: genarateNumber(),
        g: genarateNumber(),
        b: genarateNumber()
    };
    return setColor(getHex(rgb.r, rgb.g, rgb.b));
}

const changeColor = ()=>{
    return setManageInterval(setInterval(generateHex, 500));
}

const stopChangeColor =()=>{
    return clearInterval(manageInterval);
}

const clickChangeColor = () => {
    return clearInterval(manageInterval);
}

    return (
        <div style={{ margin: 'auto' }}>
        <div 
        id = "element"
        onMouseOver={changeColor}
        onMouseLeave={stopChangeColor}
        onDoubleClick={clickChangeColor}
        style={{width: "255px", height: "255px", backgroundColor: color, margin: 'auto'}}
        ></div>{' '}
        <p style={{color: "black"}}> Color: {color} </p>
        </div>
    )
}
