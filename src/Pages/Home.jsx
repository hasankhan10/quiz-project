import Navbar from "../Components/Navbar"
import Subject from "../Components/Subject"

function Home() {
  return (
    <div className="home w-screen h-screen bg-slate-600 flex sm:flex-row flex-col">
        <div className=" h-full sm:w-[55%] w-full flex justify-center place-items-center">
            <section className=" h-[40%] sm:w-[60%] w-full text-white sm:pl-8 flex flex-col justify-center place-items-center mt-10 sm:mt-0">
              <p className=" sm:text-5xl text-4xl font-thin">Wellcome to the</p>
              <p className=" sm:text-5xl text-4xl font-bold">Frontend Quiz!</p>
              <p className=" sm:mt-10 mt-6 font-semibold font-mono">Pick a subject to get start</p>
            </section>
        </div>
        <div className=" h-full sm:w-[45%] w-full flex sm:justify-start sm:place-items-center place-items-start justify-center">
          <section className=" sm:h-[50%] h-[70%] sm:w-[50%] w-[90%] sm:ml-8 flex flex-col justify-center place-items-center gap-8 sm:gap-10 mr-2 sm:mr-0">
            <Subject name="HTML" src = "https://cdn-icons-png.flaticon.com/512/1051/1051277.png"/>
            <Subject name="CSS" src = "https://cdn-icons-png.flaticon.com/512/732/732190.png"/>
            <Subject name = "JAVASCRIPT" src = "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"/>
          </section>
        </div>
    </div>
  )
}

export default Home