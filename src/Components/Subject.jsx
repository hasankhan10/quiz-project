
function Subject({name,src}) {
  return (
    <div className=" w-[90%] h-20 bg-slate-600 rounded-lg overflow-hidden flex cursor-pointer">
        <section className="image h-full w-20 flex justify-center place-items-center">
            <img className=" h-[40px]" src={src} alt="" />
        </section>
        <section className="image-name h-full w-full flex place-items-center text-white">
            <h1 className=" text-2xl font-bold ml-3">{name}</h1>
        </section>
    </div>
  )
}

export default Subject