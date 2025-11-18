// pages/UserProfile.tsx
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const { id } = useParams(); // get dynamic value from URL

  return <h1>User Profile of ID = {id}</h1>;
}
