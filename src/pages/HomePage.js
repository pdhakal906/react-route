import React from 'react'
import { useNavigate } from 'react-router'


const HomePage = () => {

  const person = {
    id: 1,
    name: "pratik",
    age: 90,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
    detail: "skfdsa;lkfl;ksa"
  }

  const nav = useNavigate();

  // use ? to avoid crashing
  // const mio = {};
  // console.log(mio.data?.title);

  return (
    <div>

      {/* state is optional */}
      <div onClick={() => nav(`/details/${person.id}`, { state: person })} className='h-[250px] w-[300px]'>
        <h1>{person.name}</h1>
        <img className='h-[200px]' src={person.image} alt="sdaf" />
        <p>{person.detail.substring(0, 5) + "...."}</p>
      </div>

      <h1>Home page</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio veniam porro repellendus architecto asperiores expedita dolore, natus fugiat ad perspiciatis error optio quasi consequuntur officia quod, eaque minima fuga! Recusandae at qui totam, placeat, eius ipsa veniam nam quasi atque, iure facilis corrupti exercitationem quam! Rerum, saepe nesciunt nostrum cum temporibus totam reiciendis sunt quibusdam iure quaerat eaque, eveniet commodi. Recusandae molestiae consectetur fugiat necessitatibus voluptatibus neque nisi veniam architecto animi tenetur nihil fugit, consequatur eligendi accusamus, error quos soluta. Porro ab voluptate, reiciendis fuga nemo delectus. Magnam itaque laborum perspiciatis explicabo, molestias delectus iusto cumque accusantium consectetur? Molestias, eligendi.</p>
    </div>
  )
}

export default HomePage
