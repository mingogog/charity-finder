import { HeaderContainer } from './Header.styles'
import { HeartFillIcon } from '../ProfileCard/ProfileCard.styles'
import Favourites from '../Favourites/Favourites'
import { useState } from 'react';

const Header = () => {
    const [showSideDrawer, setshowSideDrawer] = useState(false);
    const sideDrawerClosedHandler = () => {
        setshowSideDrawer(false);
        document.body.style.overflow = 'unset';
    }
    const showSidebar = () => {
        setshowSideDrawer(true);
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }
    return (
        <div>
            <HeaderContainer>
                <div className="flex w-full">
                    <img className="app-icon" src='/charity-finder.png'/>
                    <div className="app-title">Charity Finder </div>
                    <button onClick={()=>{showSidebar()}} className="app-favourites flex items-center cursor-pointer ml-auto">
                        <HeartFillIcon />
                        <span className="ml-2">Favourites</span>
                    </button>
                    <Favourites open={showSideDrawer} closed={sideDrawerClosedHandler}/>
                </div>
            </HeaderContainer>
        </div>   
    )
}

export default Header