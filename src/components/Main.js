require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关数据
let imageDatas = require('../data/imageDatas.json');

//利用自执行函数，将图片名信息转化为图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
	for(let i = 0; i < imageDatasArr.length; i++){
		let singleImageData = imageDatasArr[i];
		singleImageData.imageURL = require('../images/'+ singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

var GalleryByReactApp = React.CreateClass({
	render: function(){
		return (
			<section className="stage">
				<section className="img-sec">
				</section>
				<nav class="controller-nav">
				</nav>
			</section>
		);
	}
});

React.render(
	<GalleryByReactApp/>,
	document.getElementById('content')
);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
