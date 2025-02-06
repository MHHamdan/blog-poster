import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-page">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <form>
        {!isLogin && (
          <input 
            type="text" 
            placeholder="Username" 
            name="username"
          />
        )}
        <input 
          type="email" 
          placeholder="Email" 
          name="email"
        />
        <input 
          type="password" 
          placeholder="Password" 
          name="password"
        />
        <button type="submit">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <p onClick={toggleAuthMode}>
        {isLogin 
          ? 'Need an account? Register' 
          : 'Already have an account? Login'}
      </p>
    </div>
  );
};

export default AuthPage;