import Ans from "../Components/Ans"
import axios from 'axios';
import { useEffect, useState } from "react";
function Quiz() {
  let uniqueId;
  function getRandomUniqueNumber() {
     uniqueId = [];
    while (uniqueId.length < 5) {
      const randomNumber = Math.floor(Math.random() * 13);
      if (!uniqueId.includes(randomNumber)) uniqueId.push(randomNumber);
    }
  }
 getRandomUniqueNumber()
 let qOne = uniqueId[0];
 let qTwo = uniqueId[1];
 let qThree = uniqueId[2];
 let qFour = uniqueId[3];

  const htmlApiUrl = 'https://quizapi.io/api/v1/questions?apiKey=SEmKzpWTbqcVAExeQ5Q4y2rL5g5IM9tB9n7cDjIJ&difficulty=Hard&limit=13&tags=HTML'

 const [questions, setQuestions] = useState("")
 const [answer, setAnswer] = useState("")

  useEffect(() => {
    axios.get(htmlApiUrl)
      .then(response => {
        setQuestions(response.data[qOne].question)
        setAnswer(response.data[qOne].answers)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="quiz w-screen h-screen flex">
        <section className="questions h-full w-[50%] flex place-items-center justify-center">
            <div className=" w-[60%] h-fit text-white">
                <p className=" text-xl mb-6">Question 2 of 5</p>
                <h1 className=" text-3xl font-black font-arial">{questions}</h1>

                <input className=" mt-16 w-[80%]" type="range" name="" id="" />
            </div>
        </section>
        <section className="options h-full w-[50%] flex flex-col justify-center place-items-start pl-4">

          {answer &&<Ans answer={answer}/>}
            
            <button className=" w-[60%] h-16 bg-purple-700 text-white text-3xl font-bold rounded-2xl mt-4" type="submit">Submit Answer</button>
        </section>
    </div>
  )
}

export default Quiz