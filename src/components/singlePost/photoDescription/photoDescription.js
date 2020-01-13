import React from "react";
import './photoDescription.css';

class PhotoDescription extends React.Component{

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.description === this.props.description)
 			return false;
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