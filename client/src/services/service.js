
export const getRooms = async () => {
    try {
        const response = await fetch("http://localhost:5000/rooms/available");
        const availableRooms = await response.json();

        return availableRooms.data;

    } catch (error) {
        console.log(error);
    }
}

export const getFamilies = async () => {
    try {
        const response = await fetch("http://localhost:5000/guests/families");
        const familiesRooms = await response.json();
        return familiesRooms.data;

    } catch (error) {
        console.log(error);
    }
}

export const getCouples = async (token, userRole) => {
    try {
        console.log(token)
        const response = await fetch("http://localhost:5000/rooms/couples", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": JSON.stringify(token),
                "user-role": JSON.stringify(userRole),
            },
        });

        const couplesRooms = await response.json();
        if (userRole === "Owner" || userRole === "Manager") {
            return couplesRooms.data;
        }
        else {
            return "Token isn't valid";
        }

    } catch (error) {
        console.log("error");
    }
}

export const registerUser = async (newUser) => {
    try {
        const response = await fetch("http://localhost:5000/user/register", {
            body: JSON.stringify(newUser),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const responseFromServer = await response.json();
        return responseFromServer.message;


    } catch (error) {
        return error.message;
    }
}

export const loginUser = async (newUser) => {
    try {
        const response = await fetch("http://localhost:5000/user/login", {
            body: JSON.stringify(newUser),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const responseFromServer = await response.json();
        if (response.status === 301) return "One of the fields isn't valid";
        document.cookie = `jwtLogin=${responseFromServer.data};`;
        document.cookie = `userRole=${newUser.userRole};`;
        return responseFromServer.message;
    } catch (error) {
        return error.message;
    }
}

export const logoutUser = async () => {
    try {
        const response = await fetch("http://localhost:5000/user/logout");
        const result = await response.json();
        document.cookie = `jwtLogin=${null};`;

        return result.message;
    } catch (error) {
        return error.message;
    }
}

export const checkStatus = async (token) => {
    try {
        const response = await fetch("http://localhost:5000/status", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token,

            },
        });
        const result = await response.json();
        return result.message;

    } catch (error) {
        return error.message;
    }
}

export const deleteEmployee = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/employee/deleteUser/${id}`, {
            method: "DELETE"
        });
        const result = await response.json();
        console.log(result)
        return result;

    } catch (error) {
        return error.message;
    }
}