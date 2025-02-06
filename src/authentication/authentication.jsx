
export function is_authenticated(){
  const token = localStorage.getItem("token")
    if (token){
        return true
    }else{
        return false
    }
}

export function Logout(){
    localStorage.removeItem("token")
    location.href = "/"
}