/*
* @Author: caixin
* @Date:   2017-11-25 16:13:36
* @Last Modified by:   1249614072@qq.com
* @Last Modified time: 2017-12-14 16:17:47
*/
import axios from 'axios';
import moment from "moment";


const setValue = (url, params) => { 
	return axios.put(url, params);
};

const getValue = (url) => {
	return axios.get(url);
};

const getStatus = (r, devName) => {
	let url = '/api/v2/keys/nodes/'+ r.key +'/' + devName + '/status'
	return axios.get(url).then(res => {
		let value = JSON.parse(JSON.parse(res['request']['response'])['node']['value']);
		r = Object.assign(r, value)
		if (JSON.stringify(value['data']) == '{}') {
			r.status = 1
			return r;
		};

		let test_table = value.data.test_table;
		let timestamp = ''
		if (test_table.constructor == Array) {
			timestamp = test_table[0]['time'];
		} else {
			timestamp = test_table.timestamp;
			if (test_table.fields.unit == 'u') {
				timestamp = timestamp / 1000000;
			};
		}

		if (parseInt(new Date().getTime() / 1000) - timestamp <= 60 * 20) {
			r.status = 1
		}
		r.times = moment.unix(timestamp).format('YYYY-MM-DD HH:mm:ss');
		return r;
	});
}

const sortJ = (a, b) => {
	if (a.key > b.key) {
		return 1;
	}else if(a.key < b.key) {
		return -1;
	}else{
		return 0;
	}
}


const getKeys = (paras) => {
	let {url, search, devName, page, pageNum} = paras;

	return axios.get(url).then( res => {
		let keys = JSON.parse(res['request']['response'])['node']['nodes'];
		keys.sort(sortJ);

		keys.some(r => {
			r.key = r.key.split('/')[2];
			r.times = ''
			r.status = 0
			r.check_restart_time = ''
			r.handle_restart_time = ''
			r.transport_restart_time = ''
		});

		let keyss = keys.filter(r => {
			if (search && r.key.indexOf(search) == -1) return false;
			return true;
		});

		let total = keys.length;

		keyss = keyss.map(r => {
			getStatus(r, devName).then(res => {
			})
			return r;
		});

		let keyPage = keyss.filter((u, index) => index < pageNum * page && index >= pageNum * (page - 1));
		return new Promise((resolve, reject) => {
		    setTimeout(() => {
		    	resolve({
		    		value: keyss,
		    		keypage: keyPage,
		    		total: total,
		    	});
		    }, 1000)
		})
	});
};


export {
	setValue,
	getValue,
	getKeys,
	getStatus,
}