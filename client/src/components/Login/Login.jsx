import React from "react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/reducers/authSlice";
import { useLoginMutation } from "../../redux/reducers/authApiSlice";
import { Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ user, pwd }).unwrap();
      console.log(userData.message);
      dispatch(setCredentials(userData.message));
      setUser("");
      setPwd("");
      navigate("/home");
    } catch (err) {
      console.log(err);
      setErrMsg(err.data.message);
      errRef.current.focus();
    }
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePwdChange = (e) => {
    setPwd(e.target.value);
  };

  const content = isLoading ? (
    <div className="mt-50">Loading...</div>
  ) : (
    <form onSubmit={handleSubmit} className="mt-50">
      <div>
        <label htmlFor="user">User</label>
        <input
          type="text"
          id="user"
          name="user"
          value={user}
          onChange={handleUserChange}
          ref={inputRef}
        />
      </div>
      <div>
        <label htmlFor="pwd">Password</label>
        <input
          type="password"
          id="pwd"
          name="pwd"
          value={pwd}
          onChange={handlePwdChange}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <Link to="/home">
      Try to navigate!
      </Link>
      <div>
        <span ref={errRef}>{errMsg}</span>
      </div>
    </form>
  );

  return content;
};
