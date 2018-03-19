import React from 'react';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const text = this.props.title ? this.props.title : this.props.link;
    return (
    <div>
      <a href={this.props.link}>{text}</a>
    </div>
    );
  }

}
