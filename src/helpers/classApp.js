// import React, { Component } from 'react';
// import dictionary from './dictionary.txt';

// class App extends Component {

//   constructor(props) {
//     super(props);
//   }

//   showFile = async (e) => {
//     e.preventDefault()
//     const reader = new FileReader()
//     reader.onload = async (e) => { 
//       const text = (dictionary)
//       console.log(text)
//       alert(text)
//     };
//     reader.readAsText(e.target.files[0])
//   }

//   render = () => {

//     return (<div>
//       <input type="file" onChange={(e) => this.showFile(e)} />
//     </div>
//     )
//   }
// }

// export default App;