import React from 'react'
import './Profile.css'
import Notification from '../../shared/ui/Notification/Notification'

const Profile = () => {
  return (
    <div className='Profile_page'>
      <div className="profile_component">
        <div className="profile_user_photo_age">
          <h3>привет, имя рользователя!</h3>
        </div>

        <div className="notification_form">
          <Notification/>
        </div>
        
      </div>
    </div>
  )
}

export default Profile