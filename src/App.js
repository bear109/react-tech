// import { Component } from 'react';
// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPratice from './EventPratice';
/*import ValidationSample from './ValidationSample';
import './App.css';

import React from 'react';

const App = () => {
  return <ValidationSample />;
};

export default App;*/

import React, { Component } from 'react';
// import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>맨 밑으로</button>
      </div>
    );
  }
}

export default App;
