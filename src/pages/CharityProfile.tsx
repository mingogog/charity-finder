import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import ProfileCard from "../components/ProfileCard/ProfileCard";

const CharityProfile = ()=>{
    const [charityProfile, setCharityProfile] = useState(null)
    const { id } = useParams()
    useEffect(()=>{
        const url= `https://partners.every.org/v0.2/nonprofit/${id}`
        axios.get(url).then(response=>{setCharityProfile(response.data.data.nonprofit)})
    }, [])
    return (
        <div>
            {charityProfile&&<ProfileCard charityProfile={charityProfile} />}
        </div>
    )
}

export default CharityProfile