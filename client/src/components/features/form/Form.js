import { useState } from 'react'
import "../../styles/style.css";

export const Form = ({ userNameRef, sendEmployeeForm, userPasswordRef, userRoleRef }) => {
    const [nameValue, setNameValue] = useState("");

    return (
        <form data-testid="form-container" onSubmit={(e) => sendEmployeeForm(e)} className="form-container">
            <h3 className="form-headline">Registration</h3>
            <div>
                <label for="Name" className="form-label">Your Name</label>
                <input ref={userNameRef}
                    onChange={(e) => setNameValue(e.target.value.replace(RegExp(/[^A-Z a-z [0-9]]/gi), ""))}
                    value={nameValue}
                    className="form-input"
                    placeholder="Enter your name..." required="" />
            </div>
            <div>
                <label for="email" className="form-label">Your Password</label>
                <input ref={userPasswordRef} className="form-input" placeholder="Enter your password..." required="" />
            </div>
            <label for="role" className="form-label">Select your role</label>
            <select ref={userRoleRef} id="role" className="form-input">
                <option className="form-input">Owner</option>
                <option className="form-input">Manager</option>
                <option className="form-input">Reception</option>
            </select>
            <div className="flex justify-between">
                <button type="submit" className="form-submit-btn">Save User</button>
            </div>
        </form>
    )
}
