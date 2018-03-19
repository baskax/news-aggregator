import React from 'react';
import SingleNews from './SingleNews';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      flex: '1 0 auto',
      margin: '5px'
    };
    const news = [];
    for (let key in this.props.data) {
      const single = {
        key: key,
        values: this.props.data[key]
      };
      news.push(single);
    }
    const mapped = news.map((value) => {
      return (<div key={value.key}><SingleNews link={value.values.href} title={value.values.text}/></div>);
    });
    return (
      <div style={styles}>
        Kategoria: {this.props.name}
        {mapped}
      </div>
    );
  }

}
