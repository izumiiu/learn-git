
import { useState } from "react";

function App() {

  const name="ก้อง";
  // const age = 30;
  const [age, setAge] = useState(30);

  function add(){
      setAge(age + 1);
  }

  function subtract(){
    setAge(age -1);
  }

  function reset(){
    setAge(30);
  }

  
  return (
    <>
      <h1>hello testtest {name}</h1>
      <h3>ที่อยู่ : {age} ปี</h3>
      <button onClick={() => setAge(age + 1)}>เพิ่มอายุ</button>
      <button onClick={() => setAge(age -1)}>ลดอายุ</button>
      <button onClick={() => setAge(30)}>reset</button>
    </>

  );
}

export default App;
