import { storeCookie } from "../common";

export const login = async (username,email,password,setter,cookie) => {
    try {
        const response = await fetch("http://localhost:5001/login", {
            method:"POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }
            )
        })
        const data = await response.json();
        console.log(data);
        console.log(data.user);
        setter(data.user);
        // cookie(data.token);
        storeCookie("jwt_token",data.token,7);
    } catch (error) {
        console.log(error)
    }
}

export const authCheck  = async (jwt_token) => {
    try {
        const response = await fetch ("http://localhost:5001/authCheck", {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${jwt_token}`
            }
        }
        )
        console.log(response);
        const data = await response.json();
        console.log("authCheck:",data);
        return data.user;
    } catch (error) {
        console.log(error)
    }
}
