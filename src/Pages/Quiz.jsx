import Ans from "../Components/Ans"
import axios from 'axios';
import { useEffect, useState } from "react";
import { htmlData } from "../json/htmlJson";
import { useOutletContext } from "react-router-dom";

function Quiz() {
  let uniqueId;
  let theme = useOutletContext()
  function getRandomUniqueNumber() {
     uniqueId = [];
    while (uniqueId.length < 5) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (!uniqueId.includes(randomNumber)) uniqueId.push(randomNumber);
    }
  }
 getRandomUniqueNumber()
 let qOne = uniqueId[0];
 let qTwo = uniqueId[1];
 let qThree = uniqueId[2];
 let qFour = uniqueId[3];
 let qFive = uniqueId[4];

 const [question, setQuestions] = useState("")
 const [answer, setAnswer] = useState("")
 

  return (
    <div className="quiz w-screen h-screen sm:flex" style={!theme ?{backgroundImage:"url(https://cdn.dribbble.com/users/4721099/screenshots/17850675/media/32ca7ef12dec272972aafe965b95b334.jpg)"}: {backgroundImage:"url(https://cdn.dribbble.com/users/756060/screenshots/17039572/media/8e8163fa369a279d6639903ea0f5838e.png)"}}>
        <section className="questions sm:h-full sm:w-[50%] w-full h-[50%] flex place-items-center justify-center">
            <div className=" sm:w-[60%] h-fit text-white">
                <p className=" text-xl mb-6">Question 2 of 5</p>
                <h1 className=" text-3xl font-black font-arial">Whats your problem?</h1>

                <input className=" mt-16 w-[80%]" type="range" name="" id="" />
            </div>
        </section>
        <section className="options sm:h-full sm:w-[50%] h-[50%] w-full flex flex-col justify-center sm:place-items-start place-items-center pl-4">
            <Ans theme = {theme}/>
            <button  className=" w-[60%] sm:h-16 h-12 bg-purple-700 text-white sm:text-3xl font-bold rounded-2xl mt-4" type="submit">Submit Answer</button>
        </section>
    </div>
  )
}

export default Quiz