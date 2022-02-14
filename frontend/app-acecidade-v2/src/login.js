import { AuthContex } from "../../../providers/auth";

function verificarSeAlguemLogou(){
    const {user} = React.useContext(AuthContex)
    if(user.isLoggedIn){
        
    }
}