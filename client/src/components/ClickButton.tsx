export const ClickButton = () => {
    const handleClink = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert(`Button Clicked: ${e.currentTarget.textContent}`)
    }
    return (
        <>
        <button onClick={handleClink}>Click me</button>
        </>
    )
}