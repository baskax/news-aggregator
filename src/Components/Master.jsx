import React, { Component } from 'react';
import Main from './Main';
import Settings from './Settings';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';


class Master extends Component {

  constructor() {
     super();
     this.state = {
       selected: 'Strona główna'
     }
   }

  render() {
    return (
      <NavPane openLength={200} push color={'#cc7f29'} theme={'light'}>
        {this.renderItem('Strona główna', <Main db={this.props.db}/>)}
        {this.renderItem('Ustawienia', <Settings db={this.props.db}/>)}
        {this.renderItem('Tryb administracyjny', )}
      </NavPane>
    );
  }

  renderItem(title, content) {
    return (
      <NavPaneItem
        title={title}
        background="#ffffff"
        selected={this.state.selected === title}
        onSelect={() => this.setState({ selected: title })}
        padding="10px 20px"
        push
      >
        <Text>{content}</Text>
      </NavPaneItem>
    );
  }
}

module.exports = Master;
