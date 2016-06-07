import AppDispatcher from "../dispatcher"
import ActionType from "../constants"
import AppEventEmitter from "./AppEventEmitter"

let _tweets = [];
class TweetEventEmitter extends AppEventEmitter {
  getAll(){
    return  _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
    //return _tweets;
  }
}

let TweetStore = new TweetEventEmitter();


AppDispatcher.register ( action => {

  switch (action.actionType) {
    case ActionType.RECEIVED_TWEETS:
      console.log(4, "TweetStore");
      // acknowledge tweets & emit a change event
      _tweets = action.rawTweets;
      TweetStore.emitChange();
      break;
   case ActionType.RECEIVED_ONE_TWEET:
     console.log(7, "RECEIVED_ONE_TWEET");
     _tweets.unshift(action.rawTweet);
    TweetStore.emitChange();

    default:
      // do nothing
  }
})

export default TweetStore;
