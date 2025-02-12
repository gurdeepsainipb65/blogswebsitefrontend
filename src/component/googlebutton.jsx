import { BaseURL } from "../BaseURL";

const googleLogin = () => {
    window.location.href = `${BaseURL}/auth/google`; 
};

export default googleLogin