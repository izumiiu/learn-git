
import { useState } from "react";

function App() {

  const [data, setData] = useState([
    {id: 1, name: "Tjay", gender: "male"},
    {id: 2, name: "boss", gender: "gay"},
    {id: 3, name: "poom", gender: "gay"},
    {id: 4, name: "tata", gender: "gay"},
    {id: 5, name: "pea", gender: "gay"}
  ]);

  // console.table(data);
  
  return (
    <>
      <h1>จำนวนประชากร {data.length} คน</h1>
      <ul>
        {data.map((item) => (
          // ต้องกำหนด key properties ด้วย โดย key properties ต้องมีค่าไม่ซ้ำกัน
            <li key={item.id}><h3>{item.id}|{item.name} | {item.gender}</h3></li>
        ))}
        
      </ul>
    </>

  );
}

export default App;
