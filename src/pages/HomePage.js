import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Section from '../components/Section';
import { meals } from '../dummy/MealData';


const HomePage = () => {

  // const person = {
  //   id: 1,
  //   name: "pratik",
  //   age: 90,
  //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
  //   detail: "skfdsa;lkfl;ksa"
  // }

  const nav = useNavigate();

  // use ? to avoid crashing
  // const mio = {};
  // console.log(mio.data?.title);


  const man = {
    name: "Pratik",
    age: 90

  };

  const showAlert = () => {
    alert("Helo child");
  }


  // Use State

  const [count, setCount] = useState(0);


  return (
    <div>
      <div className='grid grid-cols-3'>
        {meals.map((meal) => {
          return <div onClick={() => nav(`/details/${meal.idMeal}`, { state: meal })} className='h-[250px] w-[300px]'>
            <h1>{meal.strMeal}</h1>
            <img className='h-[200px]' src={meal.strMealThumb} alt="sdaf" />
            <p>{meal.strInstructions.substring(0, 30) + "...."}</p>
          </div>
        })}
      </div>




      <h1>Home page</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam porro repellendus architecto asperiores expedita dolore, natus fugiat ad perspiciatis error optio quasi consequuntur officia quod, eaque minima fuga! Recusandae at qui totam, placeat, eius ipsa veniam nam quasi atque, iure facilis corrupti exercitationem quam! Rerum, saepe nesciunt nostrum cum temporibus totam reiciendis sunt quibusdam iure quaerat eaque, eveniet commodi. Recusandae molestiae consectetur fugiat necessitatibus voluptatibus neque nisi veniam architecto animi tenetur nihil fugit, consequatur eligendi accusamus, error quos soluta. Porro ab voluptate, reiciendis fuga nemo delectus. Magnam itaque laborum perspiciatis explicabo, molestias delectus iusto cumque accusantium consectetur? Molestias, eligendi.</p>

      <Section data={man.name} show={showAlert} />
      {/* <Section data="hello user" /> */}
      <button className='bg-[red] text-white p-1 rounded-md' onClick={() => setCount(count + 1)}>Add</button>     <h1>{count}</h1>

    </div>
  )
}

export default HomePage

