import TransactionShow from "./TransactionShow"
function TransactionList ( { data,onDelete,onEdit } ) {

    

    const TransactionMap = data.map((data,index) => {
        if(data.amount < 0){
            return (
                <TransactionShow id={"expenses"} data={data} key={index} onDelete={onDelete} onEdit={onEdit} />
            )
        }else{
            return (
                <TransactionShow id={"revenue"} data={data} key={index} onDelete={onDelete} onEdit={onEdit} />
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