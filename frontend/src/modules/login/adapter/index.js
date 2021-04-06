import { get, post, getAuthenticated } from "modules/app/xhr";

export function login(username, password) {
    const data = {username: username, password: password};
    return post("http://localhost:8000/api/token/", data)
        .then(res => res.data)
        .catch(error => console.error("Unable to login:", error));
}

export function getUser(access) {
    if (access === undefined) {
        throw new Error();
    }

    return getAuthenticated("http://localhost:8000/api/intervals/current_user/", access)
        .then(response => response.data);
}
