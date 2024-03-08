import React from 'react'

const OptionItem = ({theme, option,index,border,selectIndex}) => {
    
  return (
    <section value={option.toString()} style={{color: theme?"white": "black", border: selectIndex === index ? border : "none"}} className=" sm:w-[22rem] w-[90%] h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer
    ">

        <h1 className=" sm:h-22 sm:w-20 flex justify-center place-items-center sm:text-4xl font-bold mr-3 sm:mr-0">{index+1}.</h1>

        <p className=" h-full w-fit flex justify-center place-items-center sm:text-3xl font-semibold">{option.toString()}</p>
            
    </section>
  )
}

export default OptionItem