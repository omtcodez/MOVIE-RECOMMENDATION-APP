import apiRequest from ".";

export const RegisterUser = async (payload) => {
    return await apiRequest({
        method: "POST",
        endPoint: "/api/users/register",
        payload,
    });
};

export const LoginUser = async (payload) => {
    return await apiRequest({
        method: "POST",
        endPoint: "/api/users/login",
        payload,
    });
};