import { screen, render, fireEvent } from "@testing-library/react";
import { Login } from "../Login";

describe("Login page tests", () => {

    describe("User shall be able to enter value to each input", () => {
        it("User shall be able to edit input name field", () => {
            render(<Login />);
            const inputName = screen.getByPlaceholderText("Enter your name...");
            fireEvent.change(inputName, { target: { value: "liorNew" } })
            expect(inputName.value).toBe("liorNew");
        })

        it("User shall be able to edit input select element", () => {
            render(<Login />);
            const passwordName = screen.getByPlaceholderText("Enter your password...");
            fireEvent.change(passwordName, { target: { value: "123456" } })
            expect(passwordName.value).toBe("123456");
        })

        it("User shall be able to edit input password field", () => {
            render(<Login />);
            fireEvent.change(screen.getByLabelText("select"), { target: { value: 1 } })
            const options = screen.getAllByTestId("select-option");
            expect(options[0].innerText).toBeFalsy();
            expect(options[1].selected).toBeTruthy();
            expect(options[2].selected).toBeFalsy();
        })

    })
});