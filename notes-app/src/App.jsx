import { useState } from 'react'
// import './App.css'
import { X } from 'lucide-react';
import './index.css'
const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setTitle('');
    setDetails('');

    const copyTask = [...task];
    console.log(task);
    copyTask.push({ title, details });
    console.log(copyTask);
    setTask(copyTask);
    console.log(copyTask);

  }

  const deleteNote = (idx) => {
    console.log("Note deleted");
    const copyTask = [...task];
    console.log(copyTask);
    console.log(copyTask[idx]);
    copyTask.splice(idx, 1);
    setTask(copyTask)
  }
  return (
    <div className=" h-screen bg-black text-white lg:flex">
      <form action="" className="flex  lg:w-1/2 items-start flex-col gap-5 p-10" onSubmit={submitHandler}>
        {/* <div className="flex w-1/2 items-start px-30 py-20"> */}

        {/* First input for heading */}
        <input
          type="text"
          className="px-5 py-2 w-full border-2 font-medium rounded outline-none"
          placeholder='Enter notes heading...'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            console.log(e.target.value);
          }}
        />
        {/* Detailed input for description */}
        <textarea
          placeholder='Enter details...'
          type="text"
          className="px-5 py-2 w-full h-30 outline-none font-medium border-2 rounded"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
            console.log(e.target.value);
          }}
        ></textarea>
        <button className="px-5 active:bg-gray-400 font-medium py-2 w-full outline-none bg-white text-black rounded">Add Notes</button>
        {/* </div> */}
        {/* <img src="https://www.pngmart.com/files/23/Note-Paper-PNG-Pic.png" alt="notes image" className="h-70 pr-35"  /> */}


      </form>
      <div className="p-10 border-l-2 lg:w-1/2">
        <h1 className='text-3xl font-bold pb-5'>Recent Notes</h1>
        <div className="flex flex-wrap  gap-5 mt-5 h-full  overflow-auto">
          {/* <div className=''></div>
          <div className='h-52 w-40 bg-white rounded-2xl'></div>
          <div className='h-52 w-40 bg-white rounded-2xl'></div> */}

          {task.map(function (e, idx) {

            return <div key={idx} className=" relative h-52 w-40 py-8 px-4 bg-cover bg-center text-black rounded-xl overflow-hidden break-words"
              style={{
                backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')"
              }}>
              <h2 onClick={() => {
                deleteNote(idx)
              }} className='absolute cursor-pointer active:scale-110 top-5 right-5 bg-red-400 text-xs p-1 rounded-full'><X size={16} strokeWidth={2.75} /></h2>
              <h3 className='text-xl font-bold leading-tight pb-2 break-words'>{e.title}</h3>
              <p className=' leading-tight font-medium text-gray-500 break-words overflow-y-auto '>{e.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
