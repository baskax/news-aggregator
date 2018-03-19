import React from 'react';

export default class Category extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      color: 'black',
      order: 0,
      flex: 'auto',
      alignSelf: 'auto'
    };
    return (
      <div style={styles}>
        Nazwa: {this.props.category.name} <br/>
      Aktywny: {this.props.category.enabled ? 'tak' : 'nie' }
      </div>);
    }
  }
