import css from "./sidebar.module.css"
import Nav from "./nav/nav";


const Sidebar = () => {
    return (
        <div className={css.sidebar}>
        <Nav />
        </div>
    )
}

export default Sidebar