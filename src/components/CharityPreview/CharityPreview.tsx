import { CharityPreviewContainer, QuestionIcon } from "../CharityPreview/CharityPreview.styles";
import charity from '../../types/Charity'

interface CharityPreviewProps{
    charity: charity
}

const CharityPreview: React.FC<CharityPreviewProps> = (
    {charity}: CharityPreviewProps
) => {
    return (
        <CharityPreviewContainer>
            <div className="flex items-center">
                {
                    charity.logoUrl
                    ?<img className="preview-icon" src={charity.logoUrl} width="48" height="48" />
                    :<div style={{width:'48px', height:'48px'}}>
                        <QuestionIcon className="missing-icon"/>
                    </div>
                }
                <div className="preview-name">
                    {charity.name}
                </div>
            </div>
        </CharityPreviewContainer>
    )
}

export default CharityPreview