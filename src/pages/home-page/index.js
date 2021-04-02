import React from 'react';
import logo from '../../assests/logo.svg';
import { HomeLogo, HomeHeader, HomeLink } from './style';

const HomePage = () => (
    <div>
        <HomeHeader>
            <HomeLogo
                src={logo}
                alt="logo"
                title='logo'
            />
            <p>
                A <code>react-boilerplate</code> made by iLaD
            </p>
            <HomeLink
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </HomeLink>
        </HomeHeader>
    </div>
);

export default HomePage;