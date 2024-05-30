import { createContext, useState } from "react";

const AppContext = createContext();

function Provider ({ children }) {
    const [data,setData] = useState([]);

    const valueToShare = {
        data,
        onCreate : (title,amount) => {
            const dataObj = {
              title,
              amount,
              id : Date.now().toString()
            }
            setData([...data,dataObj]);
        },
        onDelete : (id) => {
            const deleteObj = data.filter((obj) => {
              return obj.id != id;
            })
            setData(deleteObj);
        },
        onEditSubmit : (id,title,amount) => {

            const editObj = data.map((obj) => {
              if(obj.id === id){
                return {...obj,title,amount};
              }
              return obj;
            })
        
            setData(editObj);
        }
    }
    return (
        <AppContext.Provider value={valueToShare}>
            {children}
        </AppContext.Provider>
    )
}

export { Provider };
export default AppContext;