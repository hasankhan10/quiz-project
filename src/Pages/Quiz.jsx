import Ans from "../Components/Ans"
import { useEffect, useState } from "react";
import { htmlData } from "../json/htmlJson";
import { cssData } from "../json/cssJson";
import { javaScriptData } from "../json/javaScriptJson";
import { useOutletContext, useNavigate, useParams, NavLink } from "react-router-dom";

let index = 0;
let data;
let result = 0;
let uniqueId;

function Quiz() {
  const [question, setQuestions] = useState('')
  const navigate = useNavigate()
  let {id} = useParams();
  let token = localStorage.getItem('key')
  
useEffect(()=>{
  if ( id === token) {
    
    navigate(`/quiz/${id}`);
  } else {
    navigate("/")
  }
},[])

if(id==="html"){
  data = htmlData
}
else if(id === "css"){
  data = cssData
}
else if(id === "javascript"){
  data = javaScriptData
}
  
let theme = useOutletContext()
function getRandomUniqueNumber() {
    uniqueId = [];
  while (uniqueId.length < 5) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!uniqueId.includes(randomNumber)) uniqueId.push(randomNumber);
  }
}

useEffect(()=>{
  getRandomUniqueNumber()
  setQuestions(data[uniqueId[index]]) 
  
},[id])

 let mainValue;
 const getValue = (value,setBorder)=>{
   mainValue = value;
  }

 const changeQu = ()=>{
  index = (index+1);
  setQuestions(data[uniqueId[index]])
  if(mainValue === question.answer){
     result = result + 1;
     
  }
}
if(index === 5) navigate('/result', { state: { id: id, result: result } });
  



  return (
    <div className="quiz w-screen h-screen sm:flex" style={!theme ?{backgroundImage:"url(https://cdn.dribbble.com/users/4721099/screenshots/17850675/media/32ca7ef12dec272972aafe965b95b334.jpg)"}: {backgroundImage:"url(https://cdn.dribbble.com/users/756060/screenshots/17039572/media/8e8163fa369a279d6639903ea0f5838e.png)"}}>
        <section className="questions sm:h-full sm:w-[50%] w-full h-[50%] flex place-items-center justify-center">
            <div className=" sm:w-[60%] w-[90%] h-fit text-white mt-16 sm:mt-0">
                <p className=" text-xl mb-6">Question {index+1} of 5</p>
                <h1 className=" text-3xl font-black font-arial">{question.question}</h1>

                <input className=" mt-16 w-[80%]" type="range" name="" id="" min={-1} max={4} value={index} />
            </div>
        </section>
        <section className="options sm:h-full sm:w-[50%] h-[50%] w-full flex flex-col justify-center sm:place-items-start place-items-center pl-4">
            <Ans theme = {theme} options = {question.options} getValue={getValue}  />
            <button  className=" w-[60%] sm:h-16 h-12 bg-purple-700 text-white sm:text-3xl font-bold rounded-2xl mt-4 mr-5" type="submit" onClick={changeQu}>Submit Answer</button>
        </section>
  
    </div>
  )
}

export default Quiz