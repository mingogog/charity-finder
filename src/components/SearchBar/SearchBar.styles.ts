import styled from "styled-components";
import {Search} from '@styled-icons/octicons'

export const SearchBarContainer = styled.div`
    padding: 1em 10em;
    .input-search{
        border-bottom: 2px solid #526D82;
        width:100%;
        padding: 10px 20px 10px 50px;
        border-radius: 0;
        outline: unset;
        font-size: 1.5em;
        font-family: 'Handjet', cursive;
    }
    .input-search::placeholder {
        color: #D8D9DA;
        opacity: 1;
    }
    .input-search:focus{
        color: #526D82;
    }
`

export const SearchIcon = styled(Search)`
    height: 30px;
    position: absolute;
    margin: 10px;
    color: #526D82;
`