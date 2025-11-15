import { useState } from "react"
export const Timer = () => {
    // const [seconds, setSeconds] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState("")
    // useEffect(() => {
    //     const id = setInterval(() => setSeconds(prev => prev + 1), 1000)
    //     return () => clearInterval(id);
    // }, [])
    const takeTime = (): Promise<string> => {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve("hello")
            }, 2000);
        })
    }
    const handelFetch = async () => {
        setIsLoading(true)
        const res: string = await takeTime();
        setResponse(res);
        setIsLoading(false)
    }
    return (
        <>
        <button onClick={handelFetch}>Fetch Data</button>
        {isLoading ?
        <div>Loading...</div>:
        <div>{response}</div>
        }
        </>
    )
}