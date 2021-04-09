import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import logo from '../../assests/logo.svg';
import { HomeLogo, HomeHeader, HomeLink } from './style';

const HomePage = () => {
    const [loading, setLoading] = useState(true);

    const override = `
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    return (
        <div >
            {loading ? (
                <div className='centred-item'>
                    <BeatLoader
                        color='lightblue'
                        loading={loading}
                        css={override}
                        size={20}
                    />
                </div>
            ) : (
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
            )
            }
        </div>
    )
};

export default HomePage;