import { useState } from "react";
import "./App.css";
import Counter from "./Component/Counter";
import CustomButton from "./Component/UI/CustomButton";
import Modal from "./Component/Modal/Modal";
function App() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      <Counter />
      <CustomButton text='click' onHandleClick={() => setIsOpened(!isOpened)}/>
      {
        isOpened && <Modal/>
      }
    </>
  );
}

export default App;
