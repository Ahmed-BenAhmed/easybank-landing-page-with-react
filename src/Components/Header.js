import { useState } from "react"
// import {ReactComponents as MenuIcon} from "../images/icon-hamburger.svg"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="./images/logo.svg" alt="logo" />
                </a>

                <img className="menu-icon" src={"./images/icon-hamburger.svg"} onClick={()=>setIsOpen(!isOpen)} />

                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Careers</a>
                        </li>
                        </ul>
                        <div class="button-container">
                            <a class="btn my-btn" href="#">Request Invite</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Header