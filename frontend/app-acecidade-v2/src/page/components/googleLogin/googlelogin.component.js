import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Button } from '@skynexui/components';

function GoogleLoginComponent() { 

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [idGoogle, setIdGoogle] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const sucessoGoogle = (response) => {
    console.log(response);
    const {
      profileObj: { name, email, imageUrl, googleId },
    } = response;
    setName(name);
    setEmail(email);
    setProfilePic(imageUrl);
    setIdGoogle(googleId);
    setIsLoggedIn(true);
  };

  const falhaGoogle = (dados) => {
    alert('Erro ao fazer login com o Google!')
    console.log(dados)
  };

  const logout = () => {
    setName();
    setEmail();
    setProfilePic();
    setIdGoogle();
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn && (
        <GoogleLogin
          clientId="1064343277548-9gsoiceruc3t16mrj5st9hoqlnk63bdn.apps.googleusercontent.com"
          buttonText="Google"
          onSuccess={sucessoGoogle}
          onFailure={falhaGoogle}
          render={renderProps => (
            <Button
              iconName="google"
              label="Google"
              size="md"
              onClick={renderProps.onClick}
            />
          )}
        />
      )}

      {isLoggedIn && (
        <div className="card">
          <div className="card-body">
            <img className="rounded" src={profilePic} alt="Profile" />
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Email: {email}</p>
            <p className="card-text">ID: {idGoogle}</p>
            <a href="#" className="btn btn-danger btn-sm" onClick={logout}>
              Logout
            </a>
          </div>
        </div>
      )}
    </>
  );

}

export default GoogleLoginComponent;