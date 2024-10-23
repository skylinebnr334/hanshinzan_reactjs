import * as React from 'react';
import { useState } from 'react';
import { useHanshin } from '../hooks/hanshinhook';
const IndexPage=()=>{
    const [inputNum,setInputNum]=useState(0);
    const {hanshin_shiki,setHanshin}=useHanshin();
    return <><b>Main Page!!!</b>
    <br/>
    Num : {inputNum}
    <br/>
    <input type="number" value={inputNum} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
        setInputNum((Number)(event.target.value));
        setHanshin((Number)(event.target.value));
    }}/>
    <br/>
    Hanshin : {hanshin_shiki}
    </>;
};
export default IndexPage;