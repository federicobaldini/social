import React from "react";
import './headerPost.css';

class HeaderPost extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.user === this.props.user)
            return false;
        return true;
    }
  
    render() {
        return (
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img
                            src={require("../../../images" + this.props.user.photo)}
                            alt="site icon"/>
                    </div>
                    <div className="Post-user-nickname">
                        <span>{this.props.user.nickname}</span>
                    </div>
                </div>
            </header>
        );
    }   
}
export default HeaderPost;