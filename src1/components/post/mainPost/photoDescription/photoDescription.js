import React from "react";
import './photoDescription.css';

class PhotoDescription extends React.Component{

	shouldComponentUpdate(nextProps, nextState) {
   		return false;
   	}

	render() {
		return (
			<div className="Post-description">
				<strong>{this.props.user.nickname}</strong> {this.props.description}
			</div>
		);
	}   
}
export default PhotoDescription;