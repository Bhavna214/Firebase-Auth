import './App.css'

function App() {
  return (
    <div className="App">
      <div className="signup">
        <h3>Register User</h3>
        Username:
        <input type="text" placeholder="username"/>

        Password:
        <input type="password" placeholder="password"/>

        <button>Signup</button>
      </div>

      <div className="login">
        <h3>Login</h3>
        Username:
        <input type="text" placeholder="username"/>

        Password:
        <input type="password" placeholder="password"/>

        <button>Login</button>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default App;
