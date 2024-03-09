import { useState ,useEffect} from "react"
import OptionItem from "./OptionItem";

function Ans({theme,options,getValue}) {
    const[border,setBorder]=useState()
    const[selectIndex,setSelectIndex]=useState()
    let value;

    useEffect(()=>{
        setBorder("0px solid")
    },[options])

    const handleValue = (e,index)=>{
        value = e.target.getAttribute('value')
        
        setSelectIndex(index)
        if(value===null){
            alert("try to tab in empty space")
        }
        else{
            setBorder("4px solid white")
            getValue(value)
        }
    }
  return (
    <div className=' sm:w-fit h-fit w-[90%] flex flex-col sm:gap-6 gap-3 justify-center place-items-center text-white'>
        {
            options?.map((item,index)=>{
                return(
                    <button onClick={(e)=>handleValue(e,index)} className=" h-fit w-[90%]" key={index}>
                        <OptionItem theme={theme} option={item} index = {index}border = {border} selectIndex={selectIndex} />
                    </button>
                )
            })
        }
        
        
    </div>
  )
}

export default Ans