import { createGlobalStyle } from 'styled-components'

import MarvelBold from './assets/fonts/Marvel-Bold.ttf'
import MarvelRegular from './assets/fonts/Marvel-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;

        ::-webkit-scrollbar {
            width: 10px;
        }
          
        ::-webkit-scrollbar-track {
            background: #000;
        }
          
        ::-webkit-scrollbar-thumb {
            background: #FF0000;
            border-radius: 999px;
        }
    }

    body {
        font-family: 'Marvel-Bold';
        height: 100vh;
        min-width: 100%;
    }

    @font-face {
        font-family: 'Marvel-Bold';
        src: url('${MarvelBold}');
        src: url('${MarvelRegular}');
    }
`