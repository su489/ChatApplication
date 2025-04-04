import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import useGetAllUsers from "../../components/context/useGetAllUsers"
import useConversation from '../../zustand/useConversation'

const Search = () => {
    const [search, setSearch] = useState("");
    const [allUsers] = useGetAllUsers();
    const { setSelectedConversation } = useConversation()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;
        const conversation = allUsers.find((user) =>
            user.fullname.toLowerCase().includes(search.toLowerCase()))
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("")

        } else {
            alert("User not found");
            setSearch("");
        }
    }

    return (
        <div className='h-[10vh]'>
            <div className='px-6 py-4'>
                <form onSubmit={handleSubmit}>
                    <div className='flex space-x-3'>
                        <label className="input">
                            <svg className="h-[1em] opacity-50"
                                viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5"
                                    fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                            <input
                                type="search"
                                className="grow"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </label>
                        <button>
                            <IoIosSearch className='hover:bg-gray-600  rounded-full duration-300' />
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Search