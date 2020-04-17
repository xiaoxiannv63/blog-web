let storage = window.sessionStorage

const setToken = (token)=>{
  storage.setItem('token',token)
}

const getToken = ()=>{
  let token = storage.getItem('token')
  if(token){
    return token;
  }
  return false
}

export {
  setToken,
  getToken
}