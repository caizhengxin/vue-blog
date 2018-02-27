/*
* @Author: caixin
* @Date:   2018-01-04 14:04:33
* @Last Modified by:   1249614072@qq.com
* @Last Modified time: 2018-01-05 16:50:42
*/
import axios from 'axios'
import Mock from 'mockjs'
import MockAdapter from 'axios-mock-adapter'
import {Post, Total, Tags} from './data/data'


let _Post = Post;

export default {
	AnalogData() {
		let mock = new MockAdapter(axios);

		mock.onGet('post').reply(config => {
			let {page, pageNum} = config.params;
			let total = _Post.length;

			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						data: _Post.filter((u, index) => index < pageNum * page && index >= pageNum * (page - 1)),
						total: total,
					}])
				}, 1000)
			})
		})

		mock.onGet('total').reply(config => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						data: Total,
					}])
				}, 1000)
			})
		})

		mock.onGet('tags').reply(config => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						data: Tags,
					}])
				}, 1000)
			})
		})
	}
}