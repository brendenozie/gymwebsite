import React, { useRef } from 'react'
// import './Join.css'
// import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

    const handleJoin = (e: { preventDefault: () => void; })=> {
        e.preventDefault()
        // emailjs.sendForm(
        //     'service_extzqa9',
        //     'template_5fbt3fr',
        //     form.current,
        //     'VLwg1ltOWvnCYAiK_'
        // )
        // .then((result)=>{
        //     console.log('done')
        // },
        // (error)=>{
        //     console.log(error)
        // }
        // )
    }
  return (
   <div className="!mt-16 p-4 flex gap-40 justify-center"  id='join-us'>

    <div className="text-white text-5xl font-bold uppercase relative">

        <hr className="absolute w-40 rounded-sm bg-[#f48915] !mx-2.5" />

        <div className="flex gap-4">
                                <span className='font-outline-2 text-transparent'>Ready to</span>
                                <span>Level up</span>
                                </div>
        <div className="flex gap-4">
                                <span>your body</span>
                                <span className='font-outline-2 text-transparent'>with us?</span>
                                </div>
    </div>
    <div className="flex text-center items-end">
        <form className="flex gap-12 bg-[#717070] px-[1rem] py-[2rem]" onSubmit={handleJoin}>  
            <input className="bg-transparent rounded-none text-[#777777]" type="email" name='user_email' placeholder='Enter your Email Address here...'/>
            <button type='submit' 
            className="p-2
            font-bold
            border: 4px solid transparent;
            transition-all duration-300
            flex
            items-center
            justify-center 
            w-32 bg-[#f79c3b] text-white">Join now</button>
        </form>
    </div>
   </div>
  )
}

export default Join