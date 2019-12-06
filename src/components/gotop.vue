<template>
  <div class="lingpin_top">
    <a href="#" class="qq">
      QQ
      <br />客服
    </a>
    <a href="#" class="wx">
      微信
      <br />客服
    </a>
    <a href="#" class="top_c">↑</a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.lingpin_top{
	width: 50px;
	position: fixed;
	right: 100px;
	bottom: 200px;
}
.lingpin_top a{
	display: block;
	width: 40px;
	height: 40px;
	padding: 5px;
	font-size: 12px;
	line-height: 20px;
	text-align: center;
	background: rgba(0,0,0,.7);
	margin-bottom: 15px;
	color: #fff;
}
.lingpin_top a.top_c{
	font-size: 22px;
	line-height: 40px;
}
</style>