import React from "react";
import { Button } from '@skynexui/components';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { AuthContex } from "../../../providers/auth";


function FacebookLoginComponent() {
  const {user, setUser} = React.useContext(AuthContex)


  const responseFacebook = (response) => {

    if (response.status === "unknown") {
      alert("O login falhou!");
      setUser({...user, isLoggedIn: false});
    }

    setUser({...user, 
      name: response.name,
      email: response.email,
      profilePic: response.picture.data.url,
      tokenFacebook:response.accessToken,
      idFacebook: response.id,
      isLoggedIn: true,
      isGoogle: false,
      isFacebook: true,
      isEmail: false,
    })
  };


  return (
    <div className="container">
        <FacebookLogin
          language="pt-br"
          appId="653826605774364"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,email,user_friends"
          callback={responseFacebook}
          icon="fa-facebook"
          render={renderProps => (
            <Button
              colorVariant="positive"
              iconName="facebook"
              label="Facebook"
              onClick={renderProps.onClick}
            />
          )}
        />
    </div>
  );

}
export default FacebookLoginComponent;