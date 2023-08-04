import { HeartIcon, HeartFillIcon, ProfileCardContainer } from './ProfileCard.styles'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

interface ProfileCardProfile{
    charityProfile:{
        name: string,
        descriptionLong: string,
        locationAddress: string,
        websiteUrl: string,
        coverImageUrl: string,
        logoUrl: string,
    }
}
const ProfileCard: React.FC<ProfileCardProfile> = ({charityProfile}:ProfileCardProfile)=>{
    const navigate = useNavigate();
    const {
        name,
        descriptionLong,
        locationAddress,
        websiteUrl,
        coverImageUrl,
        logoUrl
    } = charityProfile
    const [isFav, setIsFav] = useState(false)
    const handleBackOnClick = ()=>{
        navigate('/')
    }
    return (
        <ProfileCardContainer>
            <div onClick={handleBackOnClick} className="-translate-y-10 cursor-pointer text-sky-950 hover:text-sky-700 text-lg">
                <u>{'<'} back to home</u>
            </div>
            <div className="flex items-center">
                {logoUrl && <img className="profile-logo inline-block" src={logoUrl}></img>}
                <div className="profile-title inline-block ml-5">{name}</div>
                <div className="ml-auto" onClick={()=>{setIsFav((prev)=>!prev)}}>
                    {isFav && <HeartFillIcon />}
                    {!isFav && <HeartIcon />}
                </div>
            </div>
            <img className="profile-cover-image mt-1" src={coverImageUrl}></img>
            <div className="profile-description mt-3">{descriptionLong}</div>
            <div className="profile-address mt-5">{locationAddress}</div>
            <a className="profile-website text-blue-600" href={websiteUrl} target="_blank">{websiteUrl}</a>
        </ProfileCardContainer>
    )
}

export default ProfileCard