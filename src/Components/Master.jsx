import React, { Component } from 'react';
import Main from './Main';
import Settings from './Settings';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';


class Master extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'Strona główna',
      enabledCategories: this.getEnabledCategories()
    }
    this.toggleCategory = this.toggleCategory.bind(this);
  }

  getEnabledCategories() {
    this.props.db.database().ref('config/categories').once('value').then((data) => {
      const categories = data.val();
      const filtered = categories.filter((v) => {
        return v.enabled = true;
      });
      console.log(filtered);
      return filtered;
    });
  }

  toggleCategory(e) {
    e.preventDefault();
    const category = JSON.parse(e.target.dataset.category);
    category.enabled = !category.enabled;
    var updates = {};
    updates['/config/categories/' + category.id] = category;
    this.props.db.database().ref().update(updates);
  }

  render() {
    return (
      <NavPane openLength={200} push color={'#cc7f29'} theme={'light'}>
        {this.renderItem('Strona główna', <Main db={this.props.db} cats={this.state.enabledCategories} />)}
        {this.renderItem('Ustawienia', <Settings db={this.props.db} toggleCategory={this.toggleCategory} />)}
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
