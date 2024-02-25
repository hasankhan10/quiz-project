import Togle from "./Togle"

function Navbar() {

  return (
    <div className=" w-[100%] h-20 absolute flex justify-center place-items-center mt-6">
        <section className="selected-part w-[30%] h-full flex gap-4 justify-center place-items-center ml-10 ">
            <img className=" w-[84px] h-full bg-blue-600 object-cover object-center rounded-full" src="https://cdn-icons-png.flaticon.com/512/5691/5691719.png" alt="" />
            <h1 className=" w-[60%] h-full flex justify-center place-items-center text-4xl font-bold font-serif text-white">Frontent Quiz</h1>
        </section>
        <section className="toogle w-[70%] h-full  flex place-items-center justify-end">
            <div className=" w-[150px] h-20 mr-20 bg-slate-900 flex justify-center place-items-center rounded-full">
                <button>
                    <Togle />
                </button>
            </div>
        </section>
    </div>
  )
}

export default Navbar