import {NavDropdown} from "react-bootstrap";
import React, {useState} from "react";

const Swaps = ({children, title, select, goBack, trigger}) => {
    const [visible, setVisible] = useState(true)
    const swap = (title, e) => {
        setVisible(!visible)
        select(title)
        trigger()
    }
    const swapBack = (e) => {
        setVisible(!visible)
        goBack()
        trigger()
    }
    let content
    const childs = children.map(item => {
        return (
                <NavDropdown.Item key={item}>{item}</NavDropdown.Item>
        )
    })

    if (visible) {
        content = ( <NavDropdown.Item
            onClick={(e) => swap(title, e)}
            href="#action/3.2">{title} <span className='float-right'>&#8594;</span></NavDropdown.Item>)
    } else {
        content = (
            <>
                <NavDropdown.Item
                    onClick={(e) => swapBack(e)}
                    href="#action/3.3">&#8592;</NavDropdown.Item>
                {childs}
            </>
        )
    }
    return content
}

export {Swaps}
