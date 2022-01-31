import { render } from '@testing-library/react'
import React,{ChangeEvent} from 'react'
import { DataOption } from './DataOption'




export const DataList: React.FC<{dataL: Object}> = (props) => {
    const getTitle=Object.getOwnPropertyNames(props.dataL)
    const arrDat = props.dataL
    var result=''
    const val=Object.values(arrDat)

    const  handleInputChange=(event:ChangeEvent) =>{
        const index=(event.target as any).selectedIndex
        const el = event.target.childNodes[index]
        const opt=(el as any).getAttribute('id') 
        result=val[event.target.id as any][opt]
        var nameResulr = Object.getOwnPropertyNames(result)
        var res=Object.values(result)
        var arrRes=[]
        for(var i=0;i<res.length;i++){
            arrRes.push(nameResulr[i]+': '+res[i])
        }
        console.log(result)
            const elemRes=<textarea className='area'>{arrRes.toString()}</textarea>
            render(elemRes)

        }

return(
        <div>
{
    getTitle.map((dat,d)=>{
        
    var idArr = d
    var arr=[]
    var arrObj=[{}]
    var strId=idArr.toString()
    

        if(val[idArr].length!=0){
            for(var j=0;j<val[idArr].length;j++){
                var m=Object.getOwnPropertyNames(val[idArr][j])
                arrObj.push(val[idArr][j])
                    for(var i=0;i<m.length;i++)
                        {
                            if(m[i]=='Text' || m[i]=='Name'){
                                arr.push(val[idArr][j][m[i]])
                                }
                        }
            }
        }


                return(
                    <div>
        <select id={strId}  className='component'  defaultValue="00" onChange={handleInputChange} >
        <option disabled value='00' className='option-main'>
           {
              dat
           }
        </option>
        {
            arr.map((getVal,idInfo)=>{
                    return(
                        <DataOption vval={getVal} idInfo={idInfo} arrObj={arrObj}></DataOption>
                    )
                })  
            
        }  
            
    </select>
    </div>
                )
        
    })
}
    
        </div>
)
}
