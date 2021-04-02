import styled, { keyframes } from 'styled-components';

const LogoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const HomeHeader = styled.header`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const HomeLogo = styled.img`
    animation: ${LogoSpin} infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
`;

export const HomeLink = styled.a`
      color: #61dafb;
`;