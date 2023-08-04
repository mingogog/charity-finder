import SearchBar from '../components/SearchBar/SearchBar'
import CharityList from '../components/CharityList/CharityList'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [searchText, setSearchText] = useState('')
    const [charities, setCharities] = useState([])
    useEffect(()=>{
        let url
        if(searchText !== ''){
            url = `https://partners.every.org/v0.2/search/${searchText}?apiKey=pk_live_d3aa4b16795a451e6ff0d4c8682b77c3&take=50`
        }else{
            url = `https://partners.every.org/v0.2/search/pet?apiKey=pk_live_d3aa4b16795a451e6ff0d4c8682b77c3&take=50`   
        }
        axios.get(url)
        .then (response=>{
            setCharities(response.data.nonprofits)
        })
    }, [searchText])
    const handleSearchTextUpdate = (v: string)=>{
        setSearchText(v)
    }
    return (
        <div>
            <SearchBar searchText={searchText} onChange={handleSearchTextUpdate}/>
            <CharityList charities={charities}/>
        </div>
    );
}

export default Home;