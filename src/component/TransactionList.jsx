import TransactionShow from "./TransactionShow"
import { useContext } from "react"
import AppContext from "../context/AppContext"

function TransactionList () {

    const { data } = useContext(AppContext);
    

    const TransactionMap = data.map((data,index) => {
        if(data.amount < 0){
            return (
                <TransactionShow id={"expenses"} data={data} key={index} />
            )
        }else{
            return (
                <TransactionShow id={"revenue"} data={data} key={index} />
            )
        }
        
    })
    return (
        <div className="item-container">
            <hr />
            Transaction List
            {TransactionMap}
        </div>
    )
}

export default TransactionList