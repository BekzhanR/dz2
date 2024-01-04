import React,{useState} from "react";

const Square = () => {
    const [color1,setColor1] = useState("blue")
    const [color2,setColor2] = useState("red")
    const [border1,setBorder1] = useState("3px solid red")
    const [border2,setBorder2] = useState("3px solid blue")

    const handleClick1 = () => {
        setColor1(color2)
        setColor2(color1)
        setBorder2(border1)
        setBorder1(border2)
    }
    const handleClick2 = () => {
        setColor1(color2)
        setColor2(color1)
        setBorder2(border1)
        setBorder1(border2)
    }
    return(
        <div style={{
            display:"flex",
            justifyContent:"center"
        }}>

            <div style={
                {
                    width:"300px",
                    height:"300px",
                    background:color1,
                    border:border1

                }
            } onClick={handleClick1}>

            </div>
            <div style={
                {
                    width:"300px",
                    height:"300px",
                    background:color2,
                    border:border2
                }
            } onClick={handleClick2}>

            </div>
        </div>
    )
}
export default Square