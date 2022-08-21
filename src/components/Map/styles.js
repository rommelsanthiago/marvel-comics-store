import styled from 'styled-components'
import { ComboboxInput } from "@reach/combobox";

export const PlacesContainer = styled.div`
    width: 18rem;
    position: relative;
    top: 2.2em;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
`

export const InputSearch = styled(ComboboxInput)`
    width: 100%;
    padding: 0.5rem;
`
