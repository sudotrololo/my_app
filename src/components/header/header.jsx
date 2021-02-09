import css from "./header.module.css";
import logo from "./../../logo.svg";

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" className={css.app_logo}/>
        </header>
)
}

export default Header