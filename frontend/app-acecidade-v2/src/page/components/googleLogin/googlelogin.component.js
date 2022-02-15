import React from "react";
import GoogleLogin from "react-google-login";
import { Button } from '@skynexui/components';
import { AuthContex } from "../../../providers/auth";

function GoogleLoginComponent() { 
  const {user, setUser} = React.useContext(AuthContex)
  
  
  const sucessoGoogle = (response) => {
    const {
      profileObj: { name, email, imageUrl, googleId },
    } = response;
    setUser({...user, 
      name: name,
      email: email,
      profilePic: imageUrl,
      Id: googleId,
      isLoggedIn: true,
      isGoogle: true,
      isFacebook: false,
      isEmail: false,
    })
    localStorage.setItem('id', user.id) 
  };


  const falhaGoogle = (dados) => {
    alert('Erro ao fazer login com o Google!')
  };


  return (
    <>
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
    </>
  );

}

export default GoogleLoginComponent;