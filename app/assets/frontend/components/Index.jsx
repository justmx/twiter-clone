import React from 'react'
import TweetBox from './TweetBox';
import TweetList from './TweetList';
import TweetActions from "../actions/TweetActions";
import TweetStore from "../stores/TweetStore";
import { Link } from 'react-router'

TweetActions.getAllTweets();    

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}


export default class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = getAppState();
    //in es6 we need to manually bind component functions to the this keyword
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount(){
    TweetActions.getAllTweets();
    TweetStore.addChangeListener(this._onChange)
  }
  componentWillUnMount(){
    TweetStore.removeChangeListener(this._onChange)
  }
  _onChange() {
      console.log(5, "Main._onChange");
      this.setState(getAppState());
  }
  render() {
      return (
        <div className ="container">
          <Link to="/follow">Who to follow</Link>
          <TweetBox />
          <TweetList tweets={this.state.tweetsList}/>
        </div>
      );
  }
}
