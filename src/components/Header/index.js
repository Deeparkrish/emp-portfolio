import React from 'react';
import Nav from '../../components/Nav'


function Header ({ setPage }){

    return (
        <header className="flex-row MyPicture" >
             <h1>
                <a href="/" onClick={() => setPage("")}> </a>
                <i>Deepa Krishnan</i>
            </h1>
            
            <Nav setPage={setPage}> </Nav>
                
        </header>
    );
}

export default Header;