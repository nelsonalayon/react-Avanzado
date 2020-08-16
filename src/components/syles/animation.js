import { css, keyframes } from 'styled-components'

export const fadeIn = ({ time = '10s', type = 'ease'} = {}) => 
css `
animation: 1s  ${time} ${fadeInKeyframes} ${type};
`

 const fadeInKeyframes = keyframes ` 
    from {
        filter: blur(5px);
        opacity:0;
    }
    to {
        filter: blur(0);
        opacity: 1;

    }
`