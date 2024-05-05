import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/userSlice'



const Update = () => {
  const {id} = useParams()
  const users = useSelector(state=>state.users)

  const disptach = useDispatch()

  const existingUser = users.filter(f=>f.id==id) 
  const {name, email} = existingUser[0]
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const navigate = useNavigate()

  const handleUpdate = (e)=>{
    e.preventDefault();
    disptach(updateUser({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate('/')
  }
  return (
    <div>
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleUpdate} >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            value={uname}
            onChange={e=>setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            placeholder="enter email"
            value={uemail}
            onChange={e=>setEmail(e.target.value)}
          />
        </div>
        <br />
        <button>Update</button>
      </form>
    </div>
  </div>
  )
}

export default Update