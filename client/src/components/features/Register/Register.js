import { useState, useRef, useEffect } from "react";
import { Form } from "../form/Form";
import { validateForm } from "../../../utills/validateForm";
import { registerUser } from "../../../services/service";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/style.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
export const Register = () => {
    const [showModal, setShowModal] = useState(false);
    const userNameRef = useRef("");
    const userPasswordRef = useRef("");
    const userRoleRef = useRef("");
    const navigate = useNavigate();
    const sendEmployeeForm = async (e) => {

        const validForm = validateForm(e, userNameRef, userPasswordRef, userRoleRef);
        if (!validForm) {
            toast("One or more fields are not valid");
            return;
        }
        const messageFromServer = await registerUser(validForm);
        toast(messageFromServer);
        messageFromServer === "User created successfully" && navigate({ pathname: "/Hotel-management-app/login" });

    }


    return (
        <>
            <Header />
            <div tabindex="-1" aria-hidden="true" testId="register-container">
                <div className="modal-container-form">

                    <div className="svg-container">
                        <div className="svg">

                        </div>
                        <Form {...{ userNameRef, sendEmployeeForm, userPasswordRef, userRoleRef }} />
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />

        </>
    )
}