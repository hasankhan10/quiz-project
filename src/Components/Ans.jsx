
function Ans({answer}) {
  return (
    <div className=' sm:w-fit h-fit w-[90%] flex flex-col sm:gap-6 gap-3 justify-center place-items-center text-white'>
        <section className=" w-[90%] h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer">
            <h1 className=" sm:h-22 sm:w-20 flex justify-center place-items-center sm:text-4xl font-bold mr-3 sm:mr-0">A.</h1>
            <p className=" h-full w-fit flex justify-center place-items-center sm:text-3xl font-semibold">{answer.answer_a}</p>
        </section>

        <section className=" w-[90%] h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer">
            <h1 className=" sm:h-22 sm:w-20 flex justify-center place-items-center sm:text-4xl font-bold mr-3 sm:mr-0">B.</h1>
            <p className=" h-full w-fit flex justify-center place-items-center sm:text-3xl font-semibold">{answer.answer_b}</p>
        </section>

        <section className=" w-[90%] h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer">
            <h1 className=" sm:h-22 sm:w-20 flex justify-center place-items-center sm:text-4xl font-bold mr-3 sm:mr-0">C.</h1>
            <p className=" h-full w-fit flex justify-center place-items-center sm:text-3xl font-semibold">{answer.answer_c}</p>
        </section>

        <section className=" w-[90%] h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer">
            <h1 className=" sm:h-22 sm:w-20 flex justify-center place-items-center sm:text-4xl font-bold mr-3 sm:mr-0">D.</h1>
            <p className=" h-full w-fit flex justify-center place-items-center sm:text-3xl font-semibold">{answer.answer_d}</p>
        </section>
        
    </div>
  )
}

export default Ans