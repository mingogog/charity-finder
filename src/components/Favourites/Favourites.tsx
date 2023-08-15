import { 
    BlurBackground,
    OpenSideDrawer,
    ClosedSideDrawer,
    Nav,
    NavItems,
    Anchor
} from "./Favourites.styles"
import CharityPreview from '../CharityPreview/CharityPreview';
import React from "react";

interface FavouritesProps {
    open: any,
    closed: any
}
const Favourites: React.FC<FavouritesProps>= ({open, closed}:FavouritesProps) => {
    return ( <>
        { open ?
          (
          <>
            <BlurBackground onClick={closed}/>
            
            <OpenSideDrawer open={open}>
              <nav>
                  <Nav>
                    {/* <NavItems>
                        <Anchor href="#home" onClick={closed}>
                            Home
                        </Anchor>
                    </NavItems> */}
                    {/* <CharityPreview/> */}
                  </Nav>
              </nav>
            </OpenSideDrawer>
          </>)
          : 
          <ClosedSideDrawer open={open}/> }
    </> );
    // return (
        // <FavouritesContainer>
        //     <div className="favourite-drawer">
        //         <div className="favourites-header flex flex-col h-full">
        //             <div className="favourites-title text-grey-200 flex items-center h-full px-5">
        //                 <HeartFillIcon/>
        //                 <span className="ml-2">Favourites</span>
        //             </div>
        //         </div>
        //         <div className="favourites-content">
        //             <div className="border border-red-400 p-5 rounded-lg">
        //                 dsadsdsadsadsa
        //             </div>
        //         </div>
        //     </div>
        // </FavouritesContainer>

        // <div className="bg-blend-overlay absolute bg-neutral-700 w-full h-full z-2 bg-opacity-25 top-0 left-0">
        //     <FavouritesContainer>
        //         <div className="favourites-header flex flex-col h-full">
        //             <div className="favourites-title text-grey-200 flex items-center h-full px-5">
        //                 <HeartFillIcon/>
        //                 <span className="ml-2">Favourites</span>
        //             </div>
        //         </div>
        //         <div className="favourites-content">
        //             <div className="border border-red-400 p-5 rounded-lg">
        //                 dsadsdsadsadsa
        //             </div>
        //         </div>
        //     </FavouritesContainer>
        // </div>
    // )
}

export default Favourites