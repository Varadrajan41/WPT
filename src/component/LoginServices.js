import axios from 'axios';

class LoginServices{
    constructor(){
        this.baseUrl="http://localhost:3000/";


    }
    getLogin(mng){
        return axios.post(this.baseUrl+"login/"+mng.id,mng);
    }
}

export default new LoginServices;