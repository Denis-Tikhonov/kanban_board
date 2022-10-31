import css from './UserProfile.module.css'
import { useState } from 'react'
import userAvatar from '../../assets/user-avatar.svg'
import arrow from '../../assets/arrow.svg'

const DropdownUserProfile = () => {
    return (
      <div>
         <div className={css.border}></div>
         <nav className={css.dropdownUserProfile}>
            <a href='##'>Profile</a>
            <a href='##'>Log Out</a>
         </nav>
      </div>
    )
}

const UserProfile = () => {
   const [toggle, setToggle] = useState(false)

   return (
       <div className={css.userProfile}>
           <div className={css.userControl} onClick={() => setToggle(!toggle)}>
               <img src={userAvatar} alt='user avatar' className={css.userAvatar}/>
               <img src={arrow} alt='arrow' className={toggle ? css.arrowUp : css.arrow}/>
           </div>
           {toggle && <DropdownUserProfile />}
       </div>
   )
}

export default UserProfile