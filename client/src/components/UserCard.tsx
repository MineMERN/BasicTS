interface UserCardProps {
  name: string;
  age?: number;
}
export const UserCard: React.FC<UserCardProps> = ({ name, age }) => (
  <>
    <h1>Name: {name}</h1>
    {age && <p>Age: {age}</p>}
  </>
);
