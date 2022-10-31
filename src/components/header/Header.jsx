import css from './Header.module.css'
import UserProfile from '../user-profile/UserProfile'

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.title}>Awesome Kanban Board</div>
            <UserProfile />
        </header>
    )
}

export default Header