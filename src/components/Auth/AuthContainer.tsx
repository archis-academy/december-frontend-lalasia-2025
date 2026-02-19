import React, { useState } from 'react';
import Login from './Login/Login';
import SignUp from './Register/SignUp';
import './AuthContainer.scss';

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <div className="auth-main-wrapper">
        
        <div className="auth-image-side">
          <img src="/auth/living-room.png" alt="Living Room" />
        </div>

        <div className="auth-form-side">
          <div className="auth-content">

            <div className="brand-header">
              <img src="/auth/Frame.svg" alt="Logo" className="brand-logo" />
              <h2 className="brand-name">Lalasia</h2>
            </div>

            <div className="auth-tabs">
              <span 
                className={isLogin ? "active-tab" : ""} 
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
              <span 
                className={!isLogin ? "active-tab" : ""} 
                onClick={() => setIsLogin(false)}
              >
                Sign up
              </span>
            </div>

            {isLogin ? (
              <Login switchToSignUp={() => setIsLogin(false)} />
            ) : (
              <SignUp switchToLogin={() => setIsLogin(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;