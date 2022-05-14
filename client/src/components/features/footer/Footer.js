import React from "react";
import "../../styles/style.css";

export const Footer = () => {
    return (

        <footer className="footer-container">
            <span className="footer-title">© 2022 <a className="hover:underline">Lior solomon™</a>. All Rights Reserved.
            </span>
            <ul className="social-links-list">
                <li>
                    <a href="#" className="social-links">Github</a>
                </li>
                <li>
                    <a href="#" className="social-links">Linkedin</a>
                </li>
                <li>
                    <a href="#" className="social-links">Email</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>

    )
}
