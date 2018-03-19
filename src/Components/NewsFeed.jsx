import React from 'react';
import NewsFeedCategory from './NewsFeedCategory';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const categories = [];
    for (let key in this.props.data) {
      const category = {
        name: key,
        values: this.props.data[key]
      };
      categories.push(category);
    }
    const mapped = categories.map((value) => {
      return (<div key={value.name}><NewsFeedCategory name={value.name} data={value.values}/></div>);
    });
    const styles = {
      minHeight: '400px',
      display: 'flex',
      display: '-webkit-flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      alignContent: 'center'
    };
    return (
      <div style={styles}>{mapped}</div>
    );
  }

}
