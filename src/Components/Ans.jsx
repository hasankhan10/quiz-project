
function Ans({theme,options}) {
  return (
    <div className=' sm:w-fit h-fit w-[90%] flex flex-col sm:gap-6 gap-3 justify-center place-items-center text-white'>
        <section className=" min-w-24 h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer" style={theme ? {color:"white"}:{color:"black"}}>
            <h1 className=" sm:h-22 sm:w-20 flex justify-center place-items-center sm:text-4xl font-bold mr-3 sm:mr-0">A.</h1>
            <p className=" h-full w-fit flex justify-center place-items-center sm:text-3xl font-semibold">{options[0]}</p>
        </section>

        <section style={theme ? {color:"white"}:{color:"black"}} className=" min-w-24 h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer">
            <h1 className=" sm:h-22 sm:w-20 flex justify-center place-items-center sm:text-4xl font-bold mr-3 sm:mr-0">B.</h1>
            <p className=" h-full w-fit flex justify-center place-items-center sm:text-3xl font-semibold">{options[1]}</p>
        </section>

        <section style={theme ? {color:"white"}:{color:"black"}} className=" min-w-24 h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer">
            <h1 className=" sm:h-22 sm:w-20 flex justify-center place-items-center sm:text-4xl font-bold mr-3 sm:mr-0">C.</h1>
            <p className=" h-full w-fit flex justify-center place-items-center sm:text-3xl font-semibold">{options[2]}</p>
        </section>

        <section style={theme ? {color:"white"}:{color:"black"}} className=" min-w-24 h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer">
            <h1 className=" sm:h-22 sm:w-20 flex justify-center place-items-center sm:text-4xl font-bold mr-3 sm:mr-0">D.</h1>
            <p className=" h-full w-fit flex justify-center place-items-center sm:text-3xl font-semibold">{options[3]}</p>
        </section>
        
    </div>
  )
}

export default Ans