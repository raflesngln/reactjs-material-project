
/* userReducer is a function to ready get action and set data */
const initialstate={
      isLogin:false,
      authKey:'',
      username:'',
      userAvatar:'',
      loading:false,
};

// REDUCER
  const userReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCUSS':
              return{
                ...state,
                    isLogin:true,
                    authKey:'set_generate_key_to_store_or_to_cookies',
                    loading:false,
                    username:action.username,
                    userAvatar:action.userAvatar
              }
        case 'LOGIN_FAIL':
          return {
            ...state,
                  isLogin:false,
                  authKey:'delete_cookies_has_old',
                  loading:false
          };
        case 'LOGOUT_USER':
              // let totalAge=0
              // if (state.age > 0) {
              //   totalAge=state.age - action.jumlah
              // }
            return{
              ...state,
                isLogin:false,
                authKey:'',
                loading:false,
                username:'',
                userAvatar:''
              }
        default:
          return state
      }
      // return state
      
  }
  export default userReducer