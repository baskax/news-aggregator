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
    const category = Object.assign(this.props.category, {id:this.props.index});
    return (
      <div style={styles}>
        <b>Nazwa:</b> {this.props.category.name} <br/>
        <b>Aktywny:</b> <button onClick={this.props.toggleCategory} data-category={JSON.stringify(category)} >{this.props.category.enabled ? 'tak' : 'nie' }</button>
      </div>);
    }
  }
