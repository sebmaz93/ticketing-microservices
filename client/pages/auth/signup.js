import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/signup', {
        email,
        password,
      });
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className="container" onSubmit={onSubmit}>
      <h1>Signup</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="text"
          className="form-control"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button className="btn btn-primary">Sign up</button>
    </form>
  );
};

export default Signup;
