import { useEffect } from "react"
import { useOutletContext,useNavigate } from "react-router-dom"

function Result() {
  let theme = useOutletContext()
  const history = useNavigate()

  return (
    <div className="result w-screen h-screen flex justify-center place-items-center text-white" style={!theme ?{backgroundImage:"url(https://cdn.dribbble.com/users/4721099/screenshots/17850675/media/32ca7ef12dec272972aafe965b95b334.jpg)"}: {backgroundImage:"url(https://cdn.dribbble.com/users/756060/screenshots/17039572/media/8e8163fa369a279d6639903ea0f5838e.png)"}}>
        <section className=" sm:w-[50%] w-[80%] h-[70%] flex flex-col justify-center place-items-center gap-3">
            <h1 className=" h-[15%] w-full flex justify-center place-items-center text-3xl font-black">Your total Score..</h1>
            <div className=" sm:w-[60%] w-full h-[65%] bg-gray-700 rounded-lg">
                <section className=" w-full h-[20%] flex justify-center place-items-center space-x-5">
                    <img className=" w-[60px] object-cover object-center rounded-full" src="https://cdn-icons-png.flaticon.com/512/5691/5691719.png" alt="" />
                    <h1 className=" w-[60%] h-full flex justify-center place-items-center sm:text-4xl text-2xl font-bold font-serif text-white" style={theme ? {color:"black"}:{color:"white"}}>name of sub</h1>
                </section>
                <section className=" w-full h-[60%] flex justify-center place-items-center sm:text-[10rem] text-[7rem] font-semibold" style={theme ? {color:"black"}:{color:"white"}}>4</section>
                <section className=" w-full h-[20%] flex justify-center place-items-center text-3xl font-semibold" style={theme ? {color:"black"}:{color:"white"}}>out of 5</section>
            </div>
            <button className=" w-[60%] h-[15%] bg-purple-900 rounded-lg text-3xl font-bold cursor-pointer">Play Again</button>
        </section>
    </div>
  )
}

export default Result