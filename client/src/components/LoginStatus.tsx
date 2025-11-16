import { useState } from "react"

interface LoginProps {
    isLoggedIn: boolean
}

export const LoginStatus = ({ isLoggedIn } : LoginProps) => {
    const [value, setValue] = useState("")
    const takeTime = (): Promise<string> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("hey sorry for waiting you")
            }, 2000);
        })
    }
    const fetchData = async () => {
        const res = await takeTime();
        setValue(res);
    }
    return (
        <>
        <p>{isLoggedIn ? "Welcome Back 🎉" : "Please Log In 🔒"}</p>
        <button onClick={fetchData}>click me</button>
        <p>{value}</p>
        </>
    )
}