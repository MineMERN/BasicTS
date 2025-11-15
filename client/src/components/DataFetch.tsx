import { useState } from "react";

export const DataFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState("")
    const handelfetch = async () => {
        setIsLoading(false);
        setResponse("");
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users", { method: "GET"})
            if(!res.ok){
                throw new Error(`Http error! status ${res.status}`)
            }
            const data = await res.json();
            setResponse(JSON.stringify(data, null, 2))
        } catch (error) {
            console.error(`Faild to fetch data: ${error}`)
            if(error instanceof Error) {
                setResponse(`Failed to load data: ${error.message}`)
            } else {
                setResponse(`An unknown error occured.`)
            }
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <>
        <button onClick={handelfetch}>Fetch Data</button>
        {isLoading ? (
            <div>Loading...</div>
        ) : (
            <pre>{response}</pre>
        )}
        </>
    )
}