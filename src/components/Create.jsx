import React, {useState} from "react";
import { addUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const users = useSelector(state=>state.users)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(addUser({id : users[users.length -1].id +1 , name, email}))
    navigate('/')
    console.log(users)
  }
  return (
    <div>
      <div>
        <h1>Add New User</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
