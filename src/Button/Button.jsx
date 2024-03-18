import styles from "./Button.module.css";
function Button(){
    // inline css
    // const styles ={
    // backgroundColor: "hsl(200, 100%, 50%)",
    // color: "white",
    // padding: "10px 20px",
    // borderRadius: "5px",
    // border: "none",
    // cursor: "pointer"
    // }

    const handleClick = () => console.log("OUCH!");

    return(
       <button onClick={handleClick}> clickme </button>
    );
}

export default Button