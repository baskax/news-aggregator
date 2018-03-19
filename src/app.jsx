import config from './config/config';
import firebase from 'firebase';
import React from 'react';
import Master from './Components/Master';

export default class App extends React.Component {

  constructor(props){
    super(props);
    firebase.initializeApp({
      apiKey: config.apiKey,
      authDomain: config.authDomain,
      databaseURL: config.databaseURL,
      projectId: config.projectId,
      storageBucket: config.storageBucket,
      messagingSenderId: config.messagingSenderId
    });
  }

  render() {
    return (<div>
      <Master db={firebase}/>
    </div>);
  }
}
