import React from 'react';
import NewsFeed from './NewsFeed';
const notifier = require('node-notifier');
import * as path from 'path';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    const app = this.props.db.database().ref('/data');
    app.on('value', data => {
      notifier.notify ({
         title: 'New data arrived!',
         message: 'There is new data from firebase!',
         icon: path.join('','/home/ayushgp/Desktop/images.png'),
         sound: true,
         wait: true
      }, function (err, response) {
         // Response is response from notification
      });
      const news = data.val();
      this.setState({
        data: news
      });
    });
  }


  render() {
    return (
      <div>
          <NewsFeed data={this.state.data} />
      </div>
    );
  }

}
