import styled from "styled-components";
import {Heart, HeartFill} from '@styled-icons/octicons'

export const HeartIcon = styled(Heart)`
    width: 30px;
    height: 30px;
    color: #9DB2BF;
    cursor: pointer;
    &:hover{
        color: #D71313;
    }
`

export const HeartFillIcon = styled(HeartFill)`
    width: 30px;
    height: 30px;
    color: #D71313;
    cursor: pointer;
`

export const ProfileCardContainer = styled.div`
    padding: 1em 10em 3em;
    margin-top:3em;
    font-family: 'Handjet', cursive;
    
    .profile-title{
        font-size: 2rem;
        font-weight: bold;
        color: #526D82;
    }
    .profile-description, .profile-address{
        color: #526D82;
        font-size: 1.3rem;
    }
`