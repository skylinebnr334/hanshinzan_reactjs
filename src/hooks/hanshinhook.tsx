import { useState, useEffect } from "react";
const hanshin_args:{[key:number]:string;}={
    1:"334/334",
    2:"3+3-4",
    3:"-3/3+4",
    4:"3-3+4",
    5:"3*3-4",
    8:"33+4-33+4",
    10:"(3*3-4)*(3+3-4)",
    12:"(3-3+4)*(-3/3+4)",
    13:"3*3-4+33+4-33+4",
    15:"3+3*4",
    16:"(33+4-33+4)*(3+3-4)",
    17:"3+3*4+3+3-4",
    28:"(3-3+4)*(3-3+4-3/3+4)",
    29:"33-4",
    35:"3*3*4-334/334",
    36:"3*3*4",
    37:"33+4",
    132:"33*4",

    334:"334",
    360:"(3+3+4)*3*3*4",
    1296:"3*3*4*3*3*4",
    3672:"3*34*3*3*4",
    4752:"33*4*3*3*4",
    10404:"3*34*3*34",

    12024:"334*3*3*4",
    13464:"3*34*33*4",
    34068:"3*34*334",
    111556:"334*334",

    37259704:"334*334*334",
};;
const minus_exp=/\+\s*-/;
const hanshin_f=(v:number,fastmode:boolean):string=>{
    if(hanshin_args.hasOwnProperty(v)){
        return hanshin_args[v]!;
    }else{
        let buf_num=0;
        Object.keys(hanshin_args).forEach((num)=>{
            if((Number)(num)<v){
                buf_num=(Number)(num);
            }
        });
        if(v>114514){
            let B=Math.floor(v/buf_num);
            let amari=v-buf_num*B;
            if(amari!=0){
                return hanshin_args[buf_num]+ " * " + hanshin_f(B,fastmode)+" + " + hanshin_f(amari,fastmode);
            }else{
                return hanshin_args[buf_num]+ " * " + hanshin_f(B,fastmode);
            }
        }else{
            
        let A=v-buf_num;
        return hanshin_args[buf_num] + " + " + hanshin_f(A,fastmode) ;
        }
    }
    return (String)(v);
}
export const useHanshin=()=>{
    const [hanshin_shiki,setHanshin_shiki]=useState("");
    const hanshin_set=(v:number)=>{
        setHanshin_shiki(hanshin_f(v,false).replace(minus_exp,"- "));
    };
    return{hanshin_shiki:hanshin_shiki,setHanshin:hanshin_set};
};