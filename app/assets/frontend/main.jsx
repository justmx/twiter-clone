
import TweetBox from './components/TweetBox';

import TweetList from './components/TweetList';

let mockTweets = [
  { id: 1, name: 'xiao ming', body: 'My #firstTweet'},
  { id: 2, name: 'xiao qiang', body: 'My #secondTweet'},
  { id: 3, name: 'xiao fang', body: 'My #thirdTweet'}
]

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {tweetsList: mockTweets};

  }
  addTweet(tweetToAdd){
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({id: Date.now(),name: 'Guest',body:tweetToAdd });
    this.setState({tweetsList: newTweetsList});
  }
  render() {
      return (
        <div className ="container">
          <TweetBox sendTweet={this.addTweet.bind(this)} />
          <TweetList tweets={this.state.tweetsList}/>
        </div>
      );
  }
}




let documentReady = () => {
  ReactDOM.render(
    <Main />, document.getElementById('react')
  );
};

$(documentReady);
