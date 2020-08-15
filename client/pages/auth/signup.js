import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/users/signup', {
        email,
        password,
      });
      setErrors([]);
      setEmail('');
      setPassword('');
    } catch (err) {
      setErrors(err.response.data.errors);
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
      {errors.length > 0 && (
        <div className="alert alert-danger">
          <h4>Ooops...</h4>
          <ul className="my-0">
            {errors.map((err, idx) => (
              <li key={idx}>{err.message}</li>
            ))}
          </ul>
        </div>
      )}
      <button className="btn btn-primary">Sign up</button>
    </form>
  );
};

export default Signup;
