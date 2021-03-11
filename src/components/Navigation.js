import './Navigation.css'

import React from 'react';

import LinkButton from './LinkButton';

export default class Navigation extends React.Component {

    state = { showing: true };

    render(){
        const { showing } = this.state;
        return(
            <nav>
                <h2>Borga Blog</h2>
                <span onClick={() => this.setState({ showing: !showing })} className="close-btn">X</span>
                <ul>
                    <li>
                        <LinkButton to="/">Home</LinkButton>
                    </li>
                    <li>
                        <LinkButton to="/about">About</LinkButton>
                    </li>
                </ul>
            </nav>
        );
    }
}