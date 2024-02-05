import { createContext, useContext} from "react";

export const DataContext=createContext({})

function Data(){
    const context=useContext(DataContext.Provider);
    return(
        <div>
        <p>
            <label>Data Name: <b>{context.name}</b></label>
        </p>
        
        </div>
    )
}
export default Data;