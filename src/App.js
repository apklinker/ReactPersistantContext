import React, { Component } from 'react';
import TabBar from './components/TabBar';
import globalContext, { TabContext } from './context';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.addTab = this.addTab.bind(this);
    this.setGlobalState = this.setGlobalState.bind(this);
    globalContext.setup([TabContext], this.setGlobalState);
    this.state = {
      ...globalContext.getValues(),
      newTabTitle: '',
    }
  }

  componentWillUnmount() {
    globalContext.save(this.state);
  }

  setGlobalState(newState) {
    super.setState(newState);
    globalContext.save(newState);
  }

  addTab(e) {
    e.preventDefault();
    let newState = { 
      tab: {
        ...this.state.tab
      }
    };
    newState.tab.tabs.push(this.state.newTabTitle);
    globalContext.setGlobalState(newState);
  }

  render() {
    return (
      <TabContext.Provider value={this.state[TabContext.title]}>
        <TabBar />
        <form className="tab-input" onSubmit={this.addTab}>
          <input type="text" name="tab-title" id="tab-title" placeholder="tab title..." onChange={e => this.setState({ newTabTitle: e.target.value })} />
        </form>
      </TabContext.Provider>
    );
  }

}

export default App;
