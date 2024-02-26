import Ans from "../Components/Ans"

function Quiz() {
  return (
    <div className="quiz w-screen h-screen flex">
        <section className="questions h-full w-[50%] flex place-items-center justify-center">
            <div className=" w-[60%] h-fit text-white">
                <p className=" text-xl mb-6">Question 6 of 10</p>
                <h1 className=" text-3xl font-black font-arial">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus fuga optio culpa, esse consequatur nisi dolorem perferendis. Mollitia, iste necessitatibus?</h1>

                <input className=" mt-16 w-[80%]" type="range" name="" id="" />
            </div>
        </section>
        <section className="options h-full w-[50%] flex flex-col justify-center place-items-start pl-4">
            <Ans />
            <button className=" w-[60%] h-16 bg-purple-700 text-white text-3xl font-bold rounded-2xl" type="submit">Submit Answer</button>
        </section>
    </div>
  )
}

export default Quiz