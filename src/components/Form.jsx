import { useState } from "react";

const Form = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("******");
    const [userDetails,setUserDetails] = useState({
        email : "",
        password: ""
    })

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setUserDetails(
            (prevState) =>({
                ...prevState,
                [name]:value
            })
        )
    }

    const handleBtn = (e) => {
    e.preventDefault();
    console.log(userDetails.email, userDetails.password);
  };

  return (
    <>
      <form onSubmit={handleBtn}>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="email@gmail.com"
            id="email"
            onChange={handleChange}
            value={userDetails.email}
          />
          <br /> <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            id="pasword"
            onChange={handleChange}
            value={userDetails.password}
          />
        </div>
        <br />
        <button>Log In</button>
      </form>

      <h1>
        Email: {userDetails.email} <br /> <br />
        Password: {userDetails.password}
      </h1>
    </>
  );
};

export default Form;
