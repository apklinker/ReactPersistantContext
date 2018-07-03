import React, { Component } from 'react';
import './TabBar.css';
import globalContext, { TabContext } from '../context';

export default class TabBar extends Component {

    constructor(props) {
        super(props);
        this.itemClick = this.itemClick.bind(this);
    }

    itemClick(index) {
        let newState = {
            tab: {
                ...globalContext.getValues().tab
            }
        };
        newState.tab.selected = index;
        globalContext.setGlobalState(newState);
    }

    render() {
        return (
            <TabContext.Consumer>{tabInfo =>
                <ul className="TabBar">
                    {tabInfo.tabs.map((tab, index) =>
                        <li key={tab}
                            className={`tab${index === tabInfo.selected ? ' selected' : ''}`}
                            onClick={_ => this.itemClick(index)}>
                            {tab}
                        </li>
                    )}
                </ul>
            }</TabContext.Consumer>
        );
    }

};