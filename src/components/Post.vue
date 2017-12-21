<template>
	<section>
		<el-row :gutter="20" class="main-row">
			<el-col :md="{span: 24}" :lg="{span: 20, offset: 2}" :xl="{span: 16, offset: 4}">
					<el-col :md="{span: 18}">
						<div class="main-left">
							ss
						</div>
					</el-col>
					<el-col :md="{span: 6}">
						<div class="main-right">
							<div class="main-right-box main-right-tags">
								<h4>博客统计</h4>
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
						<div class="main-right">
							<div class="main-right-box">
								<h4>热门标签</h4>
								<p class="tags">
									<el-tag v-for="tag in tags" :key="tag.id" :type="tag.type">{{ tag.name }}</el-tag>
								</p>
							</div>
						</div>
						<div class="main-right">
							<div class="main-right-box">
								<h4>分类</h4>
								<p class="tags">
									<!-- <el-button round v-for="(item, index) in classify" :key="index" size="mini">{{ item.name }}</el-button> -->
									<el-tag v-for="tag in tags" :key="tag.id" :type="tag.type">{{ tag.name }}</el-tag>
								</p>
							</div>
						</div>
					</el-col>
			</el-col>
		</el-row>
	</section>
</template>

<style>
	h4 {
		margin: 0px;
		padding-bottom: 10px;
		text-align: left;
		font-size: 16px;
		color: #000;
		border-bottom: 1px solid #eee;
	}

	.main-row {
		margin-top: 40px;
		margin-right: 0px !important;
	}

	.main-left, .main-right {
		width: 100%;
		overflow: hidden;
	}

	.main-left {
		background-color: #fff;
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
</style>

<script>
	export default {
		data() {
			return {
				total: {
					visit: 1000,
					blogNum: 100,
					commentNum: 200,
					original: 100,
					translate: 100,
					reprinting: 100,
				},

				tags: [
					{id: 1, name: 'c', type: 'info'},
					{id: 2, name: 'Python', type: ''},
					{id: 3, name: 'Web', type: 'success'},
					{id: 4, name: 'Nginx', type: 'warning'},
					{id: 5, name: 'Flask', type: 'success'},
				],

				classify: [
					{id: 1, name: 'c',},
					{id: 2, name: 'Python'},
					{id: 3, name: 'Web',},
					{id: 4, name: 'Nginx',},
					{id: 5, name: 'Flask',},
				]
			}
		},
		methods: {

		},
		mounted() {

		},
	}
</script>