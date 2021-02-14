import {Container} from "react-bootstrap";
import React from "react";
import NavBar from "./NavBar";

const MainArea = () => {
    return (<>
            <NavBar/>
            <Container fluid className='title-container position-relative'>
                <h4 className='text-white font-italic'>Top Services and Premium Cuisine </h4>
            </Container>
        <Container fluid className='m-0 p-0 bg'>


        </Container>

        </>
        )
}
export default MainArea
