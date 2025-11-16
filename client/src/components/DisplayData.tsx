interface JobDetail {
    role: string,
    salary: number,
}
interface Person {
    id: number,
    name: string,
    jobDetail: JobDetail,
}
export const DisplayData = () => {
    const fetchData:Array<Person> = [
        {
            id: 1,
            name: "Shivam",
            jobDetail: {
                role: "Developer",
                salary: 1
            }
        },
        {
            id: 2,
            name: "Radhe",
            jobDetail: {
                role: "Database",
                salary: 2
            }
        },
    ]
    const todos: string[] = ["Learn React", "Learn TS", "Build Project"]
    return (
        <>
        <h1>Display Data</h1>
        {
            fetchData.map(person => (
                <div key={person.id}>
                    <p>Name: {person.name}</p>
                    <ul>
                        <p>Role: {person.jobDetail.role}</p>
                        <p>Salary: {person.jobDetail.salary}</p>
                    </ul>
                </div>
            ))
        }
        {
            todos.map((todo, i) => (
                <li key={i}>
                    {todo}
                </li>
            ))
        }
        </>
    )
}
