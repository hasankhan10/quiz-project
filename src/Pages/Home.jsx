import { NavLink, useOutletContext, useNavigate} from "react-router-dom"
import Navbar from "../Components/Navbar"
import Subject from "../Components/Subject"

const token = {
  html: 'html',
  css: 'css',
  js: 'javascript',

}

function Home() {
  let theme = useOutletContext()
 
  const handleSave = (data)=>{
    localStorage.setItem("key",token[data])
  }
  return (
    <div className="home w-screen h-screen bg-slate-600 flex sm:flex-row flex-col" style={!theme ?{backgroundImage:"url(https://cdn.dribbble.com/users/4721099/screenshots/17850675/media/32ca7ef12dec272972aafe965b95b334.jpg)"}: {backgroundImage:"url(https://cdn.dribbble.com/users/756060/screenshots/17039572/media/8e8163fa369a279d6639903ea0f5838e.png)"}}>
        <div className=" h-full sm:w-[55%] w-full flex justify-center place-items-center">
            <section className=" h-[40%] sm:w-[60%] w-full text-white sm:pl-8 flex flex-col justify-center place-items-center mt-10 sm:mt-0" >
              <p className=" sm:text-5xl text-4xl font-thin">Wellcome to the</p>
              <p className=" sm:text-5xl text-4xl font-bold">Frontend Quiz!</p>
              <p className=" sm:mt-10 mt-6 font-semibold font-mono">Pick a subject to get start</p>
            </section>
        </div>
        <div className=" h-full sm:w-[45%] w-full flex sm:justify-start sm:place-items-center place-items-start justify-center">
          <section className=" sm:h-[50%] h-[70%] sm:w-[50%] w-[90%] sm:ml-8 flex flex-col justify-center place-items-center gap-8 sm:gap-10 mr-2 sm:mr-0">
            
            <NavLink onClick={() => handleSave('html')} to={"quiz/html"} style={{width:"90%", display:"flex", justifyContent:"center"}}>
              <Subject name="HTML" src = "https://cdn-icons-png.flaticon.com/512/1051/1051277.png" theme ={theme} />
            </NavLink>

            <NavLink onClick={() => handleSave('css')} to={"quiz/css"} style={{width:"90%", display:"flex", justifyContent:"center"}}>
            <Subject name="CSS" src = "https://cdn-icons-png.flaticon.com/512/732/732190.png" theme ={theme}/>
            </NavLink>
            
            <NavLink onClick={() => handleSave('js')} to={"quiz/javascript"} style={{width:"90%", display:"flex", justifyContent:"center"}}>
              <Subject name = "JAVASCRIPT" src = "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" theme ={theme}/>
            </NavLink>
            
          </section>
        </div>
    </div>
  )
}

export default Home