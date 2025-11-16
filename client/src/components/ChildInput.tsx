interface Props {
    OnChange: (value: string) => void
}

export const ChildInput = ({ OnChange } : Props) => {
    return (
        <>
        <input type="text" onChange={e => OnChange(e.target.value)} />
        </>
    )
}