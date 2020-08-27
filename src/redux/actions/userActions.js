
var d = new Date();
var n = d.getTime();

 const isAuthentication=(data)=> {
      return {
            type: "CHECK_AUTH",
            username:data.username,
            userAvatar:data.userAvatar
      };
}
 const successLogin=(data)=> {
      return {
            type: "LOGIN_SUCCUSS",
            username:data.username,
            userAvatar:data.userAvatar
      };
}
 const login_failed=(data)=> {
      return {
            type: "LOGIN_FAIL",
            alamat:data.alamat,
            kota:data.kota
      };
}
 const logoutUserLogin=(data)=> {
      return {
            type: "LOGOUT_USER",
            username:data.name
      };
}


export {isAuthentication,successLogin,login_failed,logoutUserLogin}
