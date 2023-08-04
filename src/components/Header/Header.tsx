import { HeaderContainer } from './Header.styles'

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <div className="flex">
                    <img className="app-icon" src='/charity-finder.png'/>
                    <div className="app-title">Charity Finder </div>
                </div>
            </HeaderContainer>
        </div>   
    )
}

export default Header