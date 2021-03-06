import React from "react";
import './likeCounter.css';

class LikeCounter extends React.Component{

	shouldComponentUpdate(nextProps, nextState) {
  		if (nextProps.numberOfLikes === this.props.numberOfLikes)
  			return false;
  		return true;
  	}

	render() {
		const lastLikes = this.props.likes;
		const lastLike = this.props.likes.length;
		const numberOfLikes = this.props.numberOfLikes;

		return (
			<div className="Post-like-counter">
				<span>
					Piace a
				</span>

				<span className="Post-last-like">
					<img
						src={require("../../../images" + lastLikes[lastLike - 1].photo)}
						align="middle"
						alt="icon"/>
				</span>

				<span>
					e <strong>ad altri {numberOfLikes}</strong>
				</span>
			</div>
		);
	}   
}
export default LikeCounter;