import React from 'react'
import './UserChat.css'
import { MdOutlineMenu } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { IoIosArchive } from "react-icons/io";
// import InputService from '../../shared/ui/InputService/InputService';

const UserChat = () => {
  return (
    <div className='userChat_component'>
      <div className="userChat">
        <div className="menu_chat">
          <div className="menu_and_name">
            <MdOutlineMenu size={30}/>
            Чаты
          </div>
          <div className="menu_emblems">
            <TfiWrite size={30}/>
            <IoIosArchive size={30}/>
          </div>
         
        </div>
        {/* <InputService
            placeholder="Поиск"
            onFilterClick={() => setIsFilterOpen(true)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSearchClick={handleSearchClick}
          /> */}
        <div className="chats">

        </div>
      </div>
    </div>
  )
}

export default UserChat