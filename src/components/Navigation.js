import './Navigation.css'

import LinkButton from './LinkButton';

export default function Navigation() {
    return(
        <nav>
            <h2>Borga Blog</h2>
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