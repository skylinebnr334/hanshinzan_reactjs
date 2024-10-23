import { useState, useEffect } from "react";
const hanshin_args:{[key:number]:string;}={
    1:"334/334",
    2:"3+3-4",
    3:"-3/3+4",
    4:"3-3+4",
    5:"3*3-4",
    8:"33+4-33+4",
    29:"33-4",
    36:"3*3*4",
    37:"33+4",
    132:"33*4",
    334:"334",
    111556:"334*334"
};;
const hanshin_f=(v:number):string=>{
    if(hanshin_args.hasOwnProperty(v)){
        return hanshin_args[v]!;
    }else{
        let buf_num=0;
        Object.keys(hanshin_args).forEach((num)=>{
            if((Number)(num)<v){
                buf_num=(Number)(num);
            }
        });
        let A=v-buf_num;
        return hanshin_args[buf_num] + " + " + hanshin_f(A) ;
    }
    return (String)(v);
}
export const useHanshin=()=>{
    const [hanshin_shiki,setHanshin_shiki]=useState("");
    const hanshin_set=(v:number)=>{
        setHanshin_shiki(hanshin_f(v));
    };
    return{hanshin_shiki:hanshin_shiki,setHanshin:hanshin_set};
};