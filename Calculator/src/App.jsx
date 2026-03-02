import Display from "./Components/display";
import ButtonsContainer from "./Components/ButtonsContainer";

import styles from "./App.module.css";

function App() {
  

  return (
   <div className={styles.calculator}>
    {/* <input className={styles.display} type="text" /> */}
    <Display></Display>
    {/* <div className={styles.buttonscontainer}>
      <button className={styles.button}>c</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>+</button>
    </div> */}
    <ButtonsContainer></ButtonsContainer>
   </div>
  )
}

export default App
