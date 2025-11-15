import { useState, type ChangeEvent } from "react";
interface IFormState {
  firstname: string;
  lastname: string;
  email: string;
}
export const EventHandler: React.FC = () => {
  const [formData, setFormData] = useState<IFormState>({
    firstname: "",
    lastname: "",
    email: "",
  });
  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData)
  };
  const handleSubmit = () => {
    console.log(formData)
  }
  return (
    <>
      <form>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handelChange}
            id=""
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name: </label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handelChange} id="" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handelChange} id="" />
        </div>
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
