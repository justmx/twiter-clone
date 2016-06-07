import AppDispatcher from "../dispatcher"
import ActionType from "../constants"

export default {
  receivedTweets(rawTweets) {
    console.log(3, "ServerActions.receivedTweets")
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_TWEETS,
      rawTweets: rawTweets
    })
  },
  receivedOneTweet(rawTweet) {
    console.log(6, "ServerActions.receivedOneTweet")
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_ONE_TWEET,
      rawTweet
    })
  },
  receivedUsers(rawUsers) {
    console.log(8, "ServerActions.receivedUsers")
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_USERS,
      rawUsers
    })
  },
  receivedOneFollower(rawFollower) {
    AppDispatcher.dispatch({
      actionType: ActionType.RECEIVED_ONE_FOLLOWER,
      rawFollower
    })
  }
}
