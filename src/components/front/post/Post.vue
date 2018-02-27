<template>
	<section class="post-box">
		<el-row :gutter="20" class="main-row">
			<el-col :md="{span: 24}" :lg="{span: 20, offset: 2}" :xl="{span: 16, offset: 4}">
					<el-col :md="{span: 18}" class="main-content">
						<div class="post-top">
							<h4>文章列表</h4>
							<el-button type="primary" icon="el-icon-edit"></el-button>
						</div>
						<ul class="post-list" v-model="pageId">
							<li v-for="(post, index) in posts" :key="index">
                                <div class="post-list-img">
                                	<router-link :to="{ path: 'post/' + post.user.id}">
										<img :src="post.user.avatar" alt="avatar" width="50" height="50">
                                	</router-link>
                                </div>
                                <div class="post-list-con">
                                    <div class="title">
                                        <router-link class="title_name" :to="{ path: 'post/' + post.id}">
                                        	{{post.title}}
                                        </router-link>
                                        <span class="original" v-if="post.original">原创</span>
                                        <span class="reprinting" v-else="">转载</span>
                                        <span class="translate" v-if="post.translate">翻译</span>
                                        <span class="jin" v-if="post.jin">精</span>
                                    </div>
                                    <div class="author-msg">
                                        <div class="msg-left">
                                        	<router-link class="title_name" :to="{ path: 'post/' + post.user.id}">
                                        		{{post.user.author}}
                                        	</router-link>
                                        	
                                            <span class="time">
                                                {{post.timestamp}}
                                            </span>
                                        </div>
                                        <div class="msg-desc">
                                        	{{post.desc}}
                                        </div>
                                        <div class="msg-right">
                                        	<el-tag size="mini" v-for="tag in post.tags" :key="tag.id" :type="handleGetColor()">{{tag.name}}</el-tag>
                                            <span class="comment-count"><i class="iconfont icon-liuyan"></i>{{post.commentNum}}</span>
                                            <span class="read-count"><i class="iconfont icon-faxian"></i>{{post.readNum}}</span>
                                        </div>
                                    </div>
                                </div>
							</li>
						</ul>
						<div class="post-bottom"
						  v-loading="loading">
						</div>
					</el-col>
					<el-col :md="{span: 6}">
						<div class="main-right">
							<div class="main-right-box main-right-tags">
								<h4>博客统计</h4>
								<div :hidden="totolshowhidden">
									<p>访问数量：<el-tag>{{ total.visit }}</el-tag></p>
									<p>
										<span>博文总数：<el-tag>{{ total.blogNum }}</el-tag></span>
										<span>评论总数：<el-tag>{{ total.commentNum }}</el-tag></span>
									</p>
									<p>
										<span>
											<router-link :to="{ path: 'signin' }" >原创：</router-link>
											<el-tag>{{ total.original }}</el-tag>
										</span>
										<span>
											<router-link :to="{ path: 'signin' }" >翻译：</router-link>
											<el-tag>{{ total.translate }}</el-tag>
										</span>
										<span>
											<router-link :to="{ path: 'signin' }" >转载：</router-link>
											<el-tag>{{ total.reprinting }}</el-tag>
										</span>
									</p>
								</div>
							</div>
						</div>
						<div class="main-right">
							<div class="main-right-box">
								<h4>热门标签</h4>
								<p class="tags">
									<el-tag v-for="tag in tags" :key="tag.id" :type="handleGetColor()">{{ tag.name }}</el-tag>
								</p>
							</div>
						</div>
						<div class="main-right">
							<div class="main-right-box">
								<h4>分类</h4>
								<p class="tags">
									<el-tag v-for="tag in tags" :key="tag.id" :type="handleGetColor()">{{ tag.name }}</el-tag>
								</p>
							</div>
						</div>
					</el-col>
			</el-col>
		</el-row>

		<el-tooltip class="right-tooltip hidden-sm-and-down" effect="dark" content="回到顶部" placement="right" :hidden="topshowhidden">
	      	<i class="iconfont icon-huidaodingbu" @click="handleSmoothscroll"></i>
	    </el-tooltip>
	</section>
</template>

<style>
	body {
		background-color: #eee;
	}
	.main-right-box h4 {
		margin: 0px;
		padding-bottom: 10px;
		text-align: left;
		font-size: 16px;
		color: #000;
		border-bottom: 1px solid #eee;
	}

	.post-box {
		height: 100%;
	}

	.main-row {
		margin-top: 40px;
		margin-right: 0px !important;
	}

	.main-right {
		width: 100%;
		overflow: hidden;
	}

	.main-right {
		text-align: left;
		height: auto;
		background-color: #fff;
		margin-bottom: 20px;
	}

	.main-right-box {
		margin: 20px;
		font-size: 12px;
		font-weight: bold;
		color: #8c8c8c;
	}

	.main-right-box .el-tag {
		border-radius: 15px;
		height: 27px;
    	line-height: 26px;
	}

	.main-right-tags .el-tag{
		background-color: #7c7c7c;
		color: #fff;
	}

	.main-right-box a {
		color: #409EFF;
	}

	.tags .el-tag {
		margin: 0px 10px 10px 0px;
		/*background-color: transparent;*/
	}

	.jin{
	    color: #fff;
	    background: red;
	    width: 19px;
	    display: inline-block;
	    text-align: center;
	    border-radius: 26%;
	}

	.original,
	.reprinting,
	.translate {
	    color: #fff;
	    background: green;
	    width: 40px;
	    display: inline-block;
	    text-align: center;
	    border-radius: 14%;
	}

	.reprinting {
		background-color: #409EFF;
	}

	.translate {
		background-color: cadetblue;
	}

	.post-top {
		text-align: left;
		color: #8c8c8c;
	}

	.post-top h4 {
    	margin: 0;
    	display: inline;
	}

	.post-top button {
		float: right;
	    margin: -10px;
	    width: 96px;
	}

	.post-list {
		margin: 0px;
		padding: 0px;
	}

	.post-list li,
	.post-top {
		background-color: #fff;
		margin-bottom: 10px;
		padding: 20px;
		/*border: 1px solid */
	}

	.post-list li {
		box-shadow: 11px 18px 26px #ddd inset;
	}

	.post-list li:hover {
		/*box-shadow: 0px 1px 1px #ddd inset;*/
	}

	.post-list-img {
		width: 50px;
    	float: left;
    	margin-right: 10px;
	}

	.post-list-img img{
	    width: 50px;
	    height: 50px;
	    border-radius: 50%;
	    display: block;
	}

	.post-list-con{
	    text-align: left;
	}
	.post-list-con .title{
	    margin-top: 8px;
	}
	.post-list-con .title .title_name{
	    max-width: 524px;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    color: #333;
	    font-size: 18px;
	}
	.post-list-con .title a:hover{
	    color: red;
	    text-decoration: none;
	}
	.post-list-con .author-msg{
	    line-height: 18px;
	    margin: 6px -6px 0;
	    /*padding-bottom: 20px;*/
	    /*border-bottom: 1px solid #e6e6e6;*/
	    color: #8c8c8c;
	    font-size: 14px;
	}

	.msg-right{
	    text-align: left;
	}

	.msg-right .comment-count,
	.msg-right .read-count {
		float: right;
	}

	.msg-right span {
		margin-left: 10px;
	}

	.msg-right i {
		margin-right: 2px;
	}
	.author-msg a{
	    color: #8c8c8c;
	    padding-right: 10px;
	    text-decoration: none;
	}

	.msg-desc {
		margin: 20px;
		color: #262626;
	}

	.main-content {
		position: relative;
	}

	.right-tooltip {
	    background-color: #e2e2e2;
	    width: 50px;
	    height: 50px;
	    position: fixed;
	    bottom: 78px;
	    right: 560px;
	    font-size: 30px;
	    line-height: 50px;
	    color: #eee;
	    cursor: pointer;
	}

	.post-bottom {
		width: 100%;
		height: 60px;
		color: #fff;
	}

</style>

<script>
	import {getPost, getTotal, getTags} from '../../../api/api';
	export default {
		data() {
			return {
				posts: [],

				topshowhidden: true,
				loadingshow: true,
				loading: false,
				totolshowhidden: true,

				color: ['', 'info', 'success', 'warning'],

				pageId: 1,

				total: {},

				tags: [],

				classify: [],

			}
		},
		methods: {
			handleSmoothscroll: function() {
				let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

				if (currentScroll > 0) {
					window.requestAnimationFrame(this.handleSmoothscroll);
					window.scrollTo(0, currentScroll - (currentScroll / 10));
				}
			},
			handleGetColor: function() {
				return this.color[Math.floor(Math.random() * this.color.length)];
			},
			handlegetPost: function(param) {
				this.loading = true;
				return getPost(param).then(data => {
					this.posts = this.posts.concat(data['data']['data'])
					this.$nextTick(() => {
						this.loading = false;
					})
				}).catch(error => {
					console.log(error);
				})
			},
			handlegetTotal: function(param) {
				return getTotal(param).then(data => {
					this.total = data['data']['data'];
					this.$nextTick(() => {
					})
				}).catch(error => {
					console.log(error);
				})
			},
			handlegetTags: function(param) {
				return getTags(param).then(data => {
					this.tags = data['data']['data'];
					this.classify = data['data']['data'];
				})
			},
			init: function() {
				this.handlegetPost({page: this.pageId, pageNum: 10});
				this.handlegetTotal().then(() => {
					this.totolshowhidden = false;
				});
				this.handlegetTags();
				let self = this;
				$(window).scroll(function() {
					let flag = true;
					if (($(window).scrollTop() + $(window).height() >= $(document).height()) && flag) {
						self.handlegetPost({page: self.pageId += 1, pageNum: 10}).then(data => {
							self.$nextTick(() => {
								flag = false;
								self.topshowhidden = false;
							})
						});
					}
				});
			}
		},
		mounted() {
			this.init();
		},
	}
</script>