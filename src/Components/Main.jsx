import React from 'react';
import NewsFeed from './NewsFeed';

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
