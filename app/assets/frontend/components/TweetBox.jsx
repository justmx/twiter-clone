export default class TweetBox extends React.Component {
  sendTweet(event){
    event.preventDefault();
    this.props.sendTweet(this.refs.tweetTextArea.vale);
    this.refs.tweetTextArea.value = '';
  }


  render() {
      return (
          <div className="row">
            <form onSubmit={this.sendTweet.bind(this)}>
                <div className="input-field">
                  <textarea className="materialize-textarea" ref="tweetTextArea" />
                  <label>What's happening?</label>
                  <button type="submit" className="btn right">Tweet</button>
              </div>
            </form>
          </div>
      );
  }
}
