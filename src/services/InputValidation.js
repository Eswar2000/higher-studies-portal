class InputValidation{

    static checkUsername=(username)=>{
        if(username.length>=5 && username.length<=25){
            return /^[a-z0-9]+$/i.test(username);
        }
        return false;
    }

    static checkPassword=(password)=>{
        return password.length>=8 && password.length<=16 && (/[A-Z]/.test(password)) && (/[a-z]/.test(password)) && (/[0-9]/.test(password)) && (/[,-_!@#$%^&*(){};:'".|]/.test(password));
    }

    static checkEmail=(email)=>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

export default InputValidation;