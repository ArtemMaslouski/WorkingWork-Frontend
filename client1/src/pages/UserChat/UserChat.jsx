import React from 'react'
import './UserChat.css'
import { MdOutlineMenu } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { IoIosArchive } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const UserChat = () => {
  const {t} = useTranslation();
  return (
    <div className='userChat_component'>
      <div className="userChat">
        <div className="menu_chat">
          <div className="menu_and_name">
            <MdOutlineMenu size={25}/>
            {t('chat.chat')}
          </div>
          <div className="menu_emblems">
            <TfiWrite size={25}/>
            <IoIosArchive size={30}/>
          </div>
         
        </div>
       
        <div className="chats">

        </div>
      </div>
    </div>
  )
}

export default UserChat