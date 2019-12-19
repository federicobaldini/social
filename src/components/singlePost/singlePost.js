import React from "react";
import './singlePost.css';
import HeaderPost from './headerPost/headerPost';
import PhotoPost from './photoPost/photoPost';
import PhotoInteractions from './photoInteractions/photoInteractions';
import LikeCounter from './likeCounter/likeCounter';
import PhotoDescription from './photoDescription/photoDescription';
import Comments from './comments/comments';
import AddComment from './addComment/addComment';
import LazyLoad from 'react-lazyload';

class SinglePost extends React.Component{

    constructor(props) {
    super(props);

    this.state = {
        showMore: false,
        commentsToShow: '2',
    };
        this.showMoreCommentsHandler = this.showMoreCommentsHandler.bind(this);
    }

    showMoreCommentsHandler(show) {
        this.setState({showMore: show});
    }

	shouldComponentUpdate(nextProps, nextState) {
 		if (nextProps.post === this.props.post && nextState === this.state)
 			return false;
 		return true;
 	}

  render() {
    // offset immagini {-500} solo a scopo dimostrativo, settare su 100 o 200 (oppure 500 * 3 per caricare le immagini successive)
    // offset post {-600} solo a scopo dimostrativo, settare su 100 o 200 (oppure 800 * 3 per caricare i post successive)
        return (
            // ricorda di modificare anche il relativo file CSS per il placeholder
            /* <LazyLoad
                    height={800}
                    offset={-600}
                    once={true}
                    placeholder={<img
                        src={require("../../../images/loading.gif")}
                        alt="..." className="placeholder"/>}> */
                <article className="Post" ref="Post">
                    <HeaderPost user={this.props.post.postUser}/>
                    {/* <LazyLoad
                            height={600}
                            offset={-500}
                            once={true}
                            placeholder={<img
                                src={require("../../../images/loading.gif")}/>}> */}
                        <PhotoPost photo={this.props.post.image}/>
                    {/* </LazyLoad> */}
                    <PhotoInteractions
                        like={this.props.post.like}
                        changeLike={this.props.changeLikeHandler}
                        localIndex={this.props.localIndex}/>
                    <LikeCounter likes={this.props.post.likes}/>
                    <PhotoDescription
                        user={this.props.post.postUser}
                        description={this.props.post.description}/>
                    <Comments
                        comments={this.props.post.comments}
                        showMoreComments={this.showMoreCommentsHandler}
                        commentsState={this.state}/>
                    <AddComment
                        addComment={this.props.addCommentHandler}
                        commentsNumber={this.props.post.comments.length}
                        localIndex={this.props.localIndex}/>
                </article>
            /* </LazyLoad> */
        );
    }   
}
export default SinglePost;