
function Ans({answer}) {
  return (
    <div className=' w-fit h-fit flex flex-col gap-6 justify-center place-items-center text-white'>
        <section className=" w-[90%] h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer">
            <h1 className=" h-22 w-20 flex justify-center place-items-center text-4xl font-bold">A.</h1>
            <p className=" h-full w-fit flex justify-center place-items-center text-3xl">{answer.answer_a}</p>
        </section>

        <section className=" w-[90%] h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer">
            <h1 className=" h-full w-20 flex justify-center place-items-center text-4xl font-bold">B.</h1>
            <p className=" h-full w-fit flex justify-center place-items-center text-3xl ">{answer.answer_b}</p>
        </section>

        <section className=" w-[90%] h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer">
            <h1 className=" h-full w-20 flex justify-center place-items-center text-4xl font-bold">C.</h1>
            <p className=" h-full w-fit flex justify-center place-items-center text-3xl ">{answer.answer_c}</p>
        </section>

        <section className=" w-[90%] h-fit p-4 bg-slate-600 flex rounded-2xl cursor-pointer">
            <h1 className=" h-full w-20 flex justify-center place-items-center text-4xl font-bold">D.</h1>
            <p className=" h-full w-fit flex justify-center place-items-center text-3xl ">{answer.answer_d}</p>
        </section>
        
    </div>
  )
}

export default Ans