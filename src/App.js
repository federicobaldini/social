import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import MainPost from './components/post/mainPost/mainPost';
import userPosts from './data/user_posts.json'
import LazyLoad from 'react-lazyload';

const user = {
    photo: '/user2.png',
    nickname: 'federico',
}

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {posts: userPosts};

        this.addCommentHandler = this.addCommentHandler.bind(this);
        this.changeLikeHandler = this.changeLikeHandler.bind(this);
    }

    addCommentHandler(oldComments, newID, newMessage, localIndex) {
        let newElement = {
            userID: newID,
            nickname: user.nickname,
            message: newMessage,
        }
        let newComments = [...oldComments];
        newComments.push(newElement);

        // 1. Make a shallow copy of the items
        let posts = [...this.state.posts];

        // 2. Make a shallow copy of the item you want to mutate
        let post = {...posts[localIndex]};

        // 3. Replace the property you're intested in
        post.comments = newComments;

        // 4. Put it back into our array. N.B. we *are* mutating
        // the array here, but that's why we made a copy first
        posts[localIndex] = post;

        // 5. Set the state to our new copy
        this.setState({posts});
    }

    changeLikeHandler(oldLikes, localIndex) {
        let index;

        let newLikes = [...oldLikes];

        // 1. Make a shallow copy of the items
        let posts = [...this.state.posts];

        // 2. Make a shallow copy of the item you want to mutate
        let post = {...posts[localIndex]};

        // 3. Replace the property you're intested in
        if (post.like === false) {
            post.like = true;
            newLikes.push(user);
        } else {
            post.like = false;
            index = newLikes.indexOf(user);
            newLikes.splice(index, 1);
        }

        post.likes = newLikes;

        // 4. Put it back into our array. N.B. we *are* mutating
        // the array here, but that's why we made a copy first
        posts[localIndex] = post;

        // 5. Set the state to our new copy
        this.setState({posts});
    }

    render() {
        let index = 0;
        let rows = [];
        
        this.state.posts.forEach(element => {
            rows.push(<MainPost
                key={this.state.posts[index].postID}
                localIndex={index}
                post={this.state.posts[index]}
                addCommentHandler={this.addCommentHandler}
                changeLikeHandler={this.changeLikeHandler}/>)
            index++;
        });

        return (
            <div className="Background-post">
                <Header />
                <div className="Posts">
                    {rows}
                </div>
            </div>
        );
    }
}
export default App;
