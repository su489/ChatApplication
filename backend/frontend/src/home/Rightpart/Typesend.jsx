import React from 'react'
import { TbSend } from "react-icons/tb";
import useSendMessage from '../../components/context/useSendMessage';
import { useState } from 'react';

const Typesend = () => {

  const [message, setMessage] = useState("")
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault()

    await sendMessages(message)
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className='flex space-x-2 h-[8vh] text-center bg-gray-800'>
        <div className='w-[70%] mx-4'>
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-700 rounded-xl outline-none mt-1 px-4  py-3  w-full" />
        </div>
        <button>
          <TbSend className='text-3xl' />
        </button>
      </div>
    </form>
  )
}

export default Typesend;