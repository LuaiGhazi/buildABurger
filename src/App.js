import React, { Component } from 'react';
import './App.module.css';
import './index.css';
import Layout from './components/Layout/Layout'


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>test</p>
        </Layout>
      </div>
    );
  }
}

export default App;