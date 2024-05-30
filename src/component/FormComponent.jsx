import { useState,useContext } from "react";
import AppContext from "../context/AppContext";

function FormComponent () {

    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const { onCreate } = useContext(AppContext);

    function handleOnChangeTitle(event){
        setTitle(event.target.value);
    }
    function handleOnChangeAmount(event){
        setAmount(event.target.value);
    }

    function handleSubmit (event){
        event.preventDefault();
        if(title === '' || amount === '' || amount === 0){
            alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        }else{
            onCreate(title,amount);
            setTitle('')
            setAmount('')
        }
        
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit} >
                <label htmlFor="name-list" >ชื่อรายการ</label>
                <input onChange={handleOnChangeTitle} id="name-list" type="text" value={title} />
                <label htmlFor="amount">จำนวนเงิน</label>
                <input onChange={handleOnChangeAmount} id="amount" type="number" value={amount} />
                <button>เพิ่มข้อมูล</button>
            </form>
        </div>
    )
}
export default FormComponent