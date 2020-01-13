import React from "react";
import './photoPost.css';

class PhotoPost extends React.Component{
	
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.photo === this.props.photo)
    		return false;
    	return true
  	}

	render() {
		return (
			<div className="Post-image">
				<img src={require("../../../images" + this.props.photo)} alt="post"/>
			</div>
		);
	}   
}
export default PhotoPost;