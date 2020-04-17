import axios from '../libs/api.request'

const login = ({username,password})=>{
  return axios.request({
    url:'/user/login',
    data:{username,password},
    method:'post'
  })
}

export {
  login
}