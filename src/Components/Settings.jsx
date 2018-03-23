import Category from './Category';
import React from 'react';
import { Text } from 'react-desktop/windows';

export default class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    const app = this.props.db.database().ref('/config/categories');
    app.on('value', data => {
      const categories = data.val();
      this.setState({
        categories: categories
      });
    });
  }

  render() {
    const categories = this.state.categories.map((value, index) => {
      return (<div key={index}><Category category={value} index={index} toggleCategory={this.props.toggleCategory} /></div>);
    });
    const flex = {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      alignItems: 'stretch'
    };
    return (

        <div style={flex}>
          <Text color={'light'}>Kategorie:</Text>
          {categories}</div>
    );
  }
}
