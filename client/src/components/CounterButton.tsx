
export const CounterButton = () => {
    const logHandleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(`Button Clicked ${e.currentTarget.textContent}`)
    }
    return (
        <>
        <button onClick={logHandleButton}>Click me to log</button>
        </>
    )
}