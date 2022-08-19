import { createGlobalStyle } from 'styled-components'

import * as colors from './utils/colors'
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
        min-width: 100%;
        background-color: ${colors.backgroundPrimary};
    }

    @font-face {
        font-family: 'Marvel-Bold';
        src: url('${MarvelBold}');
        src: url('${MarvelRegular}');
    }
`