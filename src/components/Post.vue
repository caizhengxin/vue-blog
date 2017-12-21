<template>
	<section>
		<el-row :gutter="20" class="main-row">
			<el-col :md="{span: 24}" :lg="{span: 20, offset: 2}" :xl="{span: 16, offset: 4}">
					<el-col :md="{span: 18}">
						<div class="main-left">
						</div>
					</el-col>
					<el-col :md="{span: 6}">
						<div class="main-right">
							<div class="main-right-box">
								<h4>博客统计</h4>
								<p>访问数量：<el-tag type="info">100000</el-tag></p>
								<p>
									<span>博文总数：<el-tag type="info">100</el-tag></span>
									<span>评论总数：<el-tag type="info">600</el-tag></span>
								</p>
								<p>
									<span>
										<router-link :to="{ path: 'signin' }" >原创：</router-link>
										<el-tag type="info">100</el-tag>
									</span>
									<span>
										<router-link :to="{ path: 'signin' }" >翻译：</router-link>
										<el-tag type="info">100</el-tag>
									</span>
									<span>
										<router-link :to="{ path: 'signin' }" >转载：</router-link>
										<el-tag type="info">100</el-tag>
									</span>
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
		text-align: left;
		font-size: 16px;
		color: #000;
	}

	.main-row {
		margin-top: 40px;
		margin-right: 0px !important;
	}

	.main-left, .main-right {
		width: 100%;
		height: 500px;
		overflow: hidden;
	}

	.main-left {
		background-color: #fff;
	}

	.main-right {
		text-align: left;
		height: auto;
		background-color: #fff;
	}

	.main-right-box {
		margin: 20px;
		font-size: 12px;
		font-weight: bold;
		color: #8c8c8c;
	}

	.main-right-box .el-tag {
		border-radius: 15px;
		background-color: #777;
		color: #fff;
		height: 27px;
    	line-height: 26px;
	}

	.main-right-box a {
		color: #409EFF;
	}
</style>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {

		},
		mounted() {

		},
	}
</script>