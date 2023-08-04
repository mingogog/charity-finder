import styled from "styled-components"
import { Question } from '@styled-icons/octicons'

export const QuestionIcon = styled(Question)`
    color: #526D82;
    height: 48px;
    width:48px;
`

export const CharityPreviewContainer = styled.div`
    padding: 10px 10px;
    border: 2px #9DB2BF solid;
    border-radius: 10px;
    width: 200px;
    margin-right: 15px;
    margin-bottom: 15px;
    box-sizing: content-box;
    cursor: pointer;
    &:hover{
        background-color: #9DB2BF;
        color: white;
        .missing-icon{
            color: white;
        }
    }
    .preview-name{
        margin-left: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: 'Handjet', cursive;
    }
    .preview-icon{
        height: 48px !important;
        max-height: 48px !important;
    }
`