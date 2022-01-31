import React, { createContext, MouseEvent } from 'react'
import { DataList } from './DataList'



export const DataOption: React.FC<{vval:string, idInfo:number, arrObj:Array<Object>}> = (props) => {
    var id=props.idInfo.toString()
    //console.log(props.vval)
    return(   
        <option id={id}>
         {props.vval}
        </option>
        
    )
    }
