import axios from "axios"

export const register = async (
    email,
    password,
    name,
    phoneNumber,
    address,
    gender,
) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/auth/register`,
            {
                email,
                password,
                name,
                phoneNumber,
                address,
                gender,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        )
        return response.data
    } catch (err) {
        console.error(err)
        throw err
    }
}
