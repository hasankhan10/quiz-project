import Navbar from "../Components/Navbar"
import Subject from "../Components/Subject"

function Home() {
  return (
    <div className="home w-screen h-screen bg-slate-600 flex">
        <div className=" h-full w-[55%] flex justify-center place-items-center">
            <section className=" h-[40%] w-[60%] text-white pl-8">
              <p className=" text-5xl font-thin">Wellcome to the</p>
              <p className=" text-5xl font-bold">Frontend Quiz!</p>
              <p className=" mt-10 font-semibold font-mono">Pick a subject to get start</p>
            </section>
        </div>
        <div className=" h-full w-[45%] flex sm:justify-start place-items-center">
          <section className=" h-[50%] w-[50%] sm:ml-8 flex flex-col justify-center place-items-center gap-10">
            <Subject name="HTML" src = "https://cdn-icons-png.flaticon.com/512/1051/1051277.png"/>
            <Subject name="CSS" src = "https://cdn-icons-png.flaticon.com/512/732/732190.png"/>
            <Subject name = "JAVASCRIPT" src = "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"/>
          </section>
        </div>
    </div>
  )
}

export default Home