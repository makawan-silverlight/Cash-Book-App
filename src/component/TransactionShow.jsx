import TransactionEdit from "./TransactionEdit"
import { useState,useContext } from "react"
import AppContext from "../context/AppContext"

function TransactionShow ( { data,id } ) {

    const [edit,setEdit] = useState(false);
    const { onDelete } = useContext(AppContext);

    const dataElement = (
            <>
                <p>{data.title}</p>
                <p>{Math.abs(data.amount)}</p>
            </>
    )

    const dataEdit = (<TransactionEdit data={data} closeEdit={closeEdit} />)

    function handleOnClick (){
        setEdit(!edit)
    }

    function handleOnDeleteClick(){
        onDelete(data.id);
    }

    function closeEdit(){
        setEdit(false)
    }

    return (

        <div id={id} className="item">
            {edit? dataEdit : dataElement}
            <div className="list-bar">
                <div>รายการ</div>
                <div className="btn-bar">
                    <button onClick={handleOnClick} className="edit-btn">
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onClick={handleOnDeleteClick} className="delete-btn">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default TransactionShow