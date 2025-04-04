import React from 'react'
import useConversation from "../../zustand/useConversation"
import { useSocketContext } from '../../components/context/SocketContext';

function Chatuser() {

    const { selectedConversation } = useConversation();
    console.log(selectedConversation)
    const { onlineUsers } = useSocketContext()

    const getOnlineUsersStatus = (userId) => {
        return onlineUsers.includes(userId) ? "online" : "offline"
    }

    return (
        <div className='flex spaxe-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-700'>
            <div className="avatar avatar-online">
                <div className="w-13 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div >
                <h1 className='text-xl'>{selectedConversation.fullname}</h1>
                <span className='text-sm'>{getOnlineUsersStatus(selectedConversation._id)}</span>
            </div>
        </div>
    )
}

export default Chatuser;