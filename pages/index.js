import React from 'react';
import axios from 'axios';
import fetch from 'isomorphic-unfetch'
export default class App extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  };
	}
	render(){
		return (
			<div>
				Hello Mr HashTag
			</div>
			);
	}


}
	App.getInitialProps = async function() {
	  // const res = await fetch()
	  // const tweets = await res.json()

	  return {
	   
	  }
	}