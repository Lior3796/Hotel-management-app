import React from 'react';
import { logoutUser } from '../../../services/service';
import { Link } from 'react-router-dom';
import "../../styles/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Header = () => {
    console.log(window.location.href)

    const clearToken = async () => {
        const message = await logoutUser();
        toast(message);
        window.location.href = "http://localhost:3000/login";
    }
    return (
        <nav className="header-nav">
            <div className="header-container">
                <a href="https://flowbite.com" className="header-link">
                    <span className="header-span">Hotel management system</span>
                </a>

                {
                    window.location.href === "http://localhost:3000/homepage" && (
                        <ul className="social-links-list">
                            <button onClick={clearToken}><span className="header-span">Log-out</span></button>
                        </ul>)
                }

            </div>
            <ToastContainer />
        </nav>

    )
}
