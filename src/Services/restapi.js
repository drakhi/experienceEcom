import axios from 'axios';

import Urls from './uri'


const service={



//axios post methods 
axiosPostmethod:(url,data)=>{
    return axios({url:Urls.baseUrl+url,method:'post',data:JSON.stringify(data),headers:{'Content-Type': 'application/json','accept': 'application/json'}}).then(res=>{
        return res.data;
    })
},

//axios get methods 
axiosGetmethod:(url)=>{
 
    return axios.get(Urls.baseUrl+url, {headers: {
        'Content-Type': 'application/json',
      }}).then(res=>{
            return res.data;
        })
    },
    axiosPatchmethod:(url,data)=>{
        return axios.patch(Urls.baseUrl+url,JSON.stringify(data),{headers:{'Content-Type': 'application/json'}}).then(res=>{
            return res.data;
        })
        },

   //axios formdata method  
    axiosFormmethod:(url,data)=>{

        return axios.post(url,data)
        },


} 
export default service;