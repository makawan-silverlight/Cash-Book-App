import { useState } from "react"

function TransactionEdit ( { data,onEdit,closeEdit } ) {

    const [title,setTitle] = useState(data.title)
    const [amount,setAmount] = useState(data.amount)

    function handleOnSubmit(event){
        event.preventDefault();
        if(title === '' || amount === '' || amount === 0){
            alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        }else{
            onEdit(data.id,title,amount);
            closeEdit();
        }
    }

    function handleOnChangeTitle (event){
        setTitle(event.target.value);
    }
    function handleOnChangeAmount (event){
        setAmount(event.target.value);
    }


    return (
        <form onSubmit={handleOnSubmit} >
            <input onChange={handleOnChangeTitle} value={title} type="text" placeholder="ชื่อรายการ" />
            <input onChange={handleOnChangeAmount} value={amount} type="number" placeholder="จำนวนเงิน" />
            <button>Submit</button>
        </form>
    )
}

export default TransactionEdit