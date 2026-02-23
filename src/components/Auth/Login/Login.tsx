
const Login = ({ switchToSignUp }: any) => {
  return (
    <div className="form-container">
      
      <div className="input-group">
        <label>Login</label>
        <input type="text" placeholder="Email or phone number" />
      </div>
      
      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <div className="form-footer">
        <label className="remember-me">

          <img src="/auth/check-icon.svg" alt="" style={{width: '20px', height: '20px'}} /> 
          Remember me
        </label>
        <a href="#" className="forgot-pass">Forgot password?</a>
      </div>

      <button className="btn-main">Find Now</button>

      <div className="divider">Or</div>

      <button className="btn-google">
        <img src="/auth/G.svg" alt="" style={{width: '18px'}} /> 
        Or sign in with Google
      </button>

      <p className="switch-text">
        Don't have an account? <span onClick={switchToSignUp}>Sign up now</span>
      </p>
    </div>
  );
};

export default Login;