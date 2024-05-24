import FormComponent from "./component/FormComponent"
import TransactionList from "./component/TransactionList"
import { useState,useEffect } from "react"
import './style.css'
import axios from "axios";


function App() {

  const [data,setData] = useState([]);


  function onCreate(title,amount){

    const dataObj = {
      title,
      amount,
      id : Date.now().toString()
    }

    setData([...data,dataObj]);
  }

  function onDelete(id){

    const deleteObj = data.filter((obj) => {
      return obj.id != id;
    })

    setData(deleteObj);
  }

  function onEditSubmit(id,title,amount) {

    const editObj = data.map((obj) => {
      if(obj.id === id){
        return {...obj,title,amount};
      }
      return obj;
    })

    setData(editObj);
  }


  return (
    <main>

      <h1>CASH - BOOK</h1>
      <FormComponent onCreate={onCreate} />
      <TransactionList data={data} onDelete={onDelete} onEdit={onEditSubmit} />

    </main>
  )
}

export default App
