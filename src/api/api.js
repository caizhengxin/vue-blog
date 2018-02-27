/*
* @Author: caixin
* @Date:   2017-11-25 16:13:36
* @Last Modified by:   1249614072@qq.com
* @Last Modified time: 2018-02-24 23:57:29
*/
import axios from 'axios';
import moment from "moment";
import qs from 'qs';

let base = '';

let instance = axios.create({
    baseURL: 'api/',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    }
})

// user

const SignIn = params => { 
	return instance.post(`sign`, qs.stringify(params)).then(resp => resp.data);
};

const Regist = params => { 
	return instance.post(`regist`, qs.stringify(params)).then(resp => resp.data);
};

const getSignStatus = params => { 
	return instance.get(`sign`, {params: params}).then(resp => resp.data);
};

const SignUp = params => { 
	return instance.get(`signup`, {params: params}).then(resp => resp.data);
};




const getPost = params => { 
	return axios.get(`${base}/post`, {params: params});
};


const getTotal = params => { 
	return axios.get(`${base}/total`, {params: params});
};


const getTags = params => { 
	return axios.get(`${base}/tags`, {params: params});
};


export {
	SignIn,
	Regist,
	getSignStatus,
	SignUp,

	getPost,
	getTags,
	getTotal,
}