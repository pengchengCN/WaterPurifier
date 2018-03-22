var navbar = document.getElementsByClassName("intro-navigate")[0],
	h = window.innerHeight;

//window.addEventListener("scroll", scrollHandler);

function getStyle(obj, attri) {
 	return obj.currentStyle ? obj.currentStyle[attri] : window.getComputedStyle(obj, null)[attri];
}

function scrollHandler(e) {
	 var event = e || window.event,
	     target = event.target || event.srcElement;
	 var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	 if (scrollTop > h - navbar.offsetHeight) {
	     navbar.classList.add("fixed");
	 } else {
	     navbar.classList.remove("fixed");
	 }
}
// $(document).ready(function(){
// 	let whdef = 100 / 1920 // 表示1920的设计图,使用100PX的默认值
// 	// let wH = window.innerHeight // 当前窗口的高度
// 	let wW = window.innerWidth // 当前窗口的宽度
// 	let rem = wW * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
// 	let html = document.getElementsByTagName('html')[0]
// 	html.style.fontSize = rem + 'px'
// }) 
