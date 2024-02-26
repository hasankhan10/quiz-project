
function Result() {
  return (
    <div className="result w-screen h-screen flex justify-center place-items-center text-white">
        <section className=" w-[50%] h-[70%] flex flex-col justify-center place-items-center gap-2">
            <h1 className=" h-[15%] w-full flex justify-center place-items-center text-3xl font-black">Your total Score..</h1>
            <div className=" w-[60%] h-[65%] bg-gray-700 rounded-lg">
                <section className=" w-full h-[20%] flex justify-center place-items-center">
                    <img className=" w-[60px] object-cover object-center rounded-full" src="https://cdn-icons-png.flaticon.com/512/5691/5691719.png" alt="" />
                    <h1 className=" w-[60%] h-full flex justify-center place-items-center text-4xl font-bold font-serif text-white">name of sub</h1>
                </section>
                <section className=" w-full h-[60%] flex justify-center place-items-center text-[10rem] font-semibold">4</section>
                <section className=" w-full h-[20%] flex justify-center place-items-center text-3xl font-semibold">out of 5</section>
            </div>
            <button className=" w-[65%] h-[15%] bg-purple-900 rounded-lg text-3xl font-bold cursor-pointer">Play Again</button>
        </section>
    </div>
  )
}

export default Result