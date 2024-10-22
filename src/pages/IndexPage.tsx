import * as React from 'react';
import { useState } from 'react';
const IndexPage=()=>{
    const [inputNum,setInputNum]=useState(0);
    return <><b>Main Page!!!</b>
    <br/>
    Num : {inputNum}
    <br/>
    <input type="number" value={inputNum} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
        setInputNum((Number)(event.target.value));
    }}/>
    </>;
};
export default IndexPage;