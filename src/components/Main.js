require('normalize.css/normalize.css');
require('styles/App.scss');
import React from 'react';
//获取图片相关数据
let imageDatas = require('json!../data/imageDatas.json');

//利用自执行函数，将图片名信息转化为图片URL路径信息
imageDatas = ((imageDatasArr) => {
	for(let i = 0; i < imageDatasArr.length; i++){
		let singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/'+ singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

class GalleryByReactApp extends React.Component {
	render() {
		return (
	      	<section className="stage">
	        	<section className="img-sec">
	        	</section>
	        	<nav className="controller-nav">
	        	</nav>
	      	</section>
	    );
	}
};

GalleryByReactApp.defaultProps = {};

export default GalleryByReactApp;