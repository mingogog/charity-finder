import styled from "styled-components";

export const FavouritesContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 1rem;
    left: 0;
    top: 0;
    backdrop-filter: blur(8px);
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 1;
    z-index: 2147483636;
    .favourite-drawer{
        width: 30vw;
        top: 0;
        right: 0;
    }
    .favourites-header{
        color: #D71313;
        background-color: #DDE6ED;
        width: 30vw;
        height: 100px;
        /* border-left: 2px solid black; */
        /* box-shadow: -8px 6px 21px -3px rgba(0,0,0,0.75); */
    }
    .favourites-title{
        font-size: 2em;
    }
    .favourites-content{
        background-color: white;
        height: 100vh;
        box-shadow: -8px 6px 21px -3px rgba(0,0,0,0.75);
        padding: 20px
    }
`


export const Anchor = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: inherit;
`;

export const BlurBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 1rem;
    left: 0;
    top: 0;
    /* backdrop-filter: blur(8px); */
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    z-index: 2147483636;
`;

export const ClosedSideDrawer = styled.div`
    animation: ${props => props.open ? 'null' : 'slideIn 0.5s ease-in-out' };

    @keyframes slideIn{
        from{
            transform: translateX(0%);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;

export const OpenSideDrawer = styled.div`
    display: ${props => props.open ? 'block' : 'none'};
    box-sizing: border-box;
    position: fixed;
    width: 30%;
    max-width: 70%;
    height: 100%;
    right: 0;
    top: 0;
    background-color: #FFFFFF;
    padding: 4rem;
    overflow: auto;
    z-index: 2147483636;
    animation: ${props => props.open ? 'slideOut 0.5s ease-in-out' : null };

    @keyframes slideOut{
        from{
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0%);
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
      padding: 1rem 2rem;
    }
`;

export const Nav = styled.ul`
    margin: 4rem 0;
    padding: 0;
`;

export const NavItems = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 1rem 0 3rem;
    list-style: none;
    font-size: 21px;
    line-height: 20px;
    color: #393939;
    padding: 30px;
    border: 2px solid red;
    border-radius: 10px;
    
    &:hover{
        text-decoration: underline;
        color: darkorange;
    }
    
    @media (max-width: 768px) {
        padding: 6px 0px;
    }
`;