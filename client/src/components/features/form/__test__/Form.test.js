import { screen, render, fireEvent } from "@testing-library/react";
import { Form } from "../Form";

describe("Form page tests", () => {

    describe("User shall be able to enter value to each input", () => {
        it("User shall be able to edit input name field", () => {
            render(<Form />);
            const inputName = screen.getByPlaceholderText("Enter your name...");
            fireEvent.change(inputName, { target: { value: "liorNew" } })
            expect(inputName.value).toBe("liorNew");
        })

        it("User shall be able to edit input password field", () => {
            render(<Form />);
            const passwordName = screen.getByPlaceholderText("Enter your password...");
            fireEvent.change(passwordName, { target: { value: "123456" } })
            expect(passwordName.value).toBe("123456");
        })
    })

    describe("User shall be able to navigate to the login page", () => {
        it("click on the submit button and go to the login page", () => {
            render(<Form />);
            const submitBtn = screen.getByRole("button");
            const passwordName = screen.getByPlaceholderText("Enter your password...");
            const inputName = screen.getByPlaceholderText("Enter your name...");
            const selectElement = screen.getByRole("select", { option: "Owner" });

            fireEvent.change(inputName, { target: { value: "liorNew" } });
            fireEvent.change(passwordName, { target: { value: "aA123456" } });
            fireEvent.change(selectElement, { target: { value: "Owner" } });

            fireEvent.click(submitBtn);
            const loginHeadline = screen.getByTestId("login");
            expect(loginHeadline).toBeInTheDocument();
        })
    })



})





