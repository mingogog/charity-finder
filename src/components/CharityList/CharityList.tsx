import { CharityListContainer } from './CharityList.styles'
import CharityPreview from '../CharityPreview/CharityPreview';
import charity from '../../types/Charity'
import { useNavigate } from "react-router-dom";

interface CharityListProps{
    charities: charity[]
}

const CharityList: React.FC<CharityListProps> = ({charities}:CharityListProps) => {
    const navigate = useNavigate();
    const handleCharityOnClick = (ein: string)=>{
        navigate(`/charity/${ein}`)
    }
    return (
        <div>
            <CharityListContainer>
               {
                    charities && 
                    charities.length>0 && 
                    <div className="flex flex-wrap justify-start items-center">
                        {
                            charities.map(c=>{
                                return (
                                    <div onClick={()=>handleCharityOnClick(c.ein)}>
                                        <CharityPreview charity={c}/>
                                    </div>
                                )
                                    
                            })
                        }
                    </div>
               }
            </CharityListContainer>
        </div>
    )
}

export default CharityList