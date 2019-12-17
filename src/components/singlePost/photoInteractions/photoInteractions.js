import React from "react";
import './photoInteractions.css';
import Like from './like/like';

class PhotoInteractions extends React.Component{

	shouldComponentUpdate(nextProps, nextState) {
  		if (nextProps.like === this.props.like
  			&& nextProps.likes === this.props.likes)
  			return false;
  		return true;
  	}
  	
	render() {

		return (
			<div className="Post-interactions">
				<Like
					like={this.props.like}
					changeLike={this.props.changeLike}
					localIndex={this.props.localIndex}/>
			</div>
		);
	}   
}
export default PhotoInteractions;