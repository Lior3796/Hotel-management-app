import { useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { validateForm } from '../../../utills/validateForm';
import { loginUser } from '../../../services/service';
import "../../styles/style.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export const Login = () => {
    const userNameRef = useRef("");
    const userPasswordRef = useRef("");
    const userRoleRef = useRef("");


    const sendEmployeeForm = async (e) => {
        const validForm = validateForm(e, userNameRef, userPasswordRef, userRoleRef);
        if (!validForm) {
            return toast("One or more fields are not valid");
        }

        const message = await loginUser(validForm);
        if (message === "One of the fields isn't valid") {
            toast(message);
            return;
        }
        toast(message, () => console.log("Toast"));
        window.location = "http://localhost:3000/homepage";
    }

    return (
        <>

            <div data-testId="login" tabindex="-1" aria-hidden="true" className="login-container
            
            ">
                <div className="modal-container-form">

                    <div className="svg-container">
                        <div />
                        <form onSubmit={(e) => sendEmployeeForm(e)} className="form-container" action="#">
                            <h3 className="form-headline">Login</h3>
                            <div>
                                <label for="Name" className="form-label">user-name</label>
                                <input
                                    ref={userNameRef} type="Name" name="Name" id="Name" className="form-input" placeholder="Enter your name..." required="" />
                            </div>
                            <div>
                                <label for="password" className="form-label">user-password</label>
                                <input ref={userPasswordRef} type="password" name="password" id="password" className="form-input" placeholder="Enter your password..." required="" />
                            </div>
                            <label for="role" className="form-label">user-role</label>

                            <select data-testId="select" ref={userRoleRef} id="role" className="form-input">
                                <option data-testId="select-option" className="form-input">Owner</option>
                                <option data-testId="select-option" className="form-input">Manager</option>
                                <option data-testId="select-option" className="form-input">Reception</option>
                            </select>
                            <div className="flex justify-between">
                                <button type="submit" className="form-submit-btn">Log-in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )

}
