import { SearchBarContainer, SearchIcon } from "./SearchBar.styles";

interface SearchBarProps{
    searchText: string
    onChange(data:string): void
}

const SearchBar: React.FC<SearchBarProps> = ({searchText, onChange}:SearchBarProps)=>{
    return(
        <SearchBarContainer>
            <form>
                <div>
                    <SearchIcon className="icon-search"/>
                    <input onChange={(e)=>onChange(e.target.value)} value={searchText} className="input-search" type="text" placeholder="Search Charity ..."/>
                </div>
            </form>
        </SearchBarContainer>
    )
}

export default SearchBar