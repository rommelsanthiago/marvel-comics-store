import { createGlobalStyle } from 'styled-components'

import MarvelBold from './assets/fonts/Marvel-Bold.ttf'
import MarvelRegular from './assets/fonts/Marvel-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    body {
        font-family: 'Marvel-Bold';
        height: 100vh;
        width: 100%;
    }

    @font-face {
        font-family: 'Marvel-Bold';
        src: url('${MarvelBold}');
        src: url('${MarvelRegular}');
    }
`