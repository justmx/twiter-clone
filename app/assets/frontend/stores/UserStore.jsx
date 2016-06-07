import AppDispatcher from "../dispatcher"
import ActionType from "../constants"
import AppEventEmitter from "./AppEventEmitter"


let _users = [];
let _followedIds = [];

class UserEventEmitter extends AppEventEmitter {
  getAll(){
    return  _users.map(user => {
      user.following = _followedIds.indexOf(user.id) >= 0;
      return user;
    });
  }
}

let UserStore = new UserEventEmitter();


AppDispatcher.register ( action => {

  switch (action.actionType) {
    case ActionType.RECEIVED_USERS:
      //console.log(4, "TweetStore");
      // acknowledge tweets & emit a change event
      _users = action.rawUsers;
      UserStore.emitChange();
      break;
    case ActionType.RECEIVED_ONE_FOLLOWER:
        //console.log(4, "TweetStore");
        // acknowledge tweets & emit a change event
      _followedIds.push(action.rawFollower.user_id)
      UserStore.emitChange();
      break;
    default:
      // do nothing
  }
})

export default UserStore;
