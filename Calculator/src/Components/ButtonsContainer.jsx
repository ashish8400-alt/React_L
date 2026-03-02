import styles from "./ButtonsContainer.module.css"

const ButtonsContainer = ()=>{

    const buttonNames = ['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0'];

    return(
 <div className={styles.buttonscontainer}>
{buttonNames.map(buttonNames=>
      <button className={styles.button}>{buttonNames}</button>)}


      {/* <button className={styles.button}>c</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>+</button> */}
    </div>
    )
};

export default ButtonsContainer;