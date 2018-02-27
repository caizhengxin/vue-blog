/*
* @Author: caixin
* @Date:   2018-01-04 14:09:49
* @Last Modified by:   1249614072@qq.com
* @Last Modified time: 2018-01-08 14:28:57
*/
import Mock from 'mockjs'


const Post = [];


for (let i = 0; i < 20; i++) {
	Post.push(Mock.mock({
		id: Mock.Random.guid(),
		title: Mock.Random.ctitle(),
		user: {
			id: Mock.Random.guid(),
			// avatar: Mock.Random.image('50x50'),
			avatar: 'http://opquj9rzr.bkt.clouddn.com/o_1bhrtk4h71oce1qibd7gauu3tt7.jpg?imageView2/1/w/150/h/150/format/png/q/75|imageslim',
			author: Mock.Random.cname(),
		},
		tags: [{
			id: Mock.Random.guid(),
			name: "Python",
		},{
			id: Mock.Random.guid(),
			name: "c",
		}],
		jin: Mock.Random.integer(0, 1),
		original: Mock.Random.integer(0, 1),
		translate: Mock.Random.integer(0, 1),
		timestamp: 1515046592,
		desc: Mock.Random.cparagraph(),
		commentNum: Mock.Random.integer(0, 100),
		readNum: Mock.Random.integer(0, 100),
	}));
}


const Total = Mock.mock({
	id: Mock.Random.guid(),
	visit: Mock.Random.integer(0, 1000),
	blogNum: Mock.Random.integer(0, 100),
	commentNum: Mock.Random.integer(0, 100),
	original: Mock.Random.integer(0, 100),
	translate: Mock.Random.integer(0, 100),
	reprinting: Mock.Random.integer(0, 100),
})


const Tags = Mock.mock([{
	id: Mock.Random.guid(),
	name: 'c',
},{
	id: Mock.Random.guid(),
	name: 'Python',
},{
	id: Mock.Random.guid(),
	name: 'Web',
},{
	id: Mock.Random.guid(),
	name: 'Nginx',
},{
	id: Mock.Random.guid(),
	name: 'Flask',
}])


export {
	Post,
	Total,
	Tags,
}