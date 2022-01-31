import React, {useEffect, useState} from 'react';
import {DataList} from './Page/DataList';



const App: React.FC=()=> {
  const [dataL, setdataL] = useState({})
  

  useEffect(()=>{
    fetch('http://176.53.182.224:5022/getConfigServer')
    .then(response => response.json())
    .then(dataL => setdataL(dataL))
  },[])
  //console.log(dataL)

  return (
    <DataList dataL={dataL}/>
    );
}


export default App;
