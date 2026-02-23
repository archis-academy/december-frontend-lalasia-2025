
const SignUp = ({ switchToLogin }: any) => {
  return (
    <div className="register-container">
      
      <div className="form-wrapper">
       
        <div className="my-input-box">
          <label>Name</label>
          <input type="text" placeholder="John Doe" className="standard-input" />
        </div>

        <div className="my-input-box">
          <label>Phone Number</label>
          <div className="phone-row">
            <div className="country-code">
               <span className="flag">🇹🇷</span> 
               <span className="code-text">+90</span>
               <span style={{fontSize: '10px', color:'#999'}}>▼</span>
            </div>

            <input type="text" placeholder="543 876 09 21" />
          </div>
        </div>

        <div className="my-input-box">
          <label>Email</label>
          <input type="email" placeholder="johndoe@email.com" className="standard-input" />
        </div>

        <div className="my-input-box">
          <label>Password</label>
          <div className="password-wrapper" style={{position: 'relative'}}>
             <input type="password" placeholder="Enter password" />
             
             <span style={{position: 'absolute', right: '15px', top: '14px', cursor:'pointer'}}>👁️</span>
          </div>
        </div>

        <button className="green-button">Find Now</button>

        <button className="google-button">
           <img src="/auth/G.svg" alt="G" style={{width: '18px'}} />
           Or sign in with Google
        </button>

        <p className="bottom-text">
          Already have an account? <span onClick={switchToLogin} className="link">Login now</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;