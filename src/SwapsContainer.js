import {Swaps} from "./Drops";
import React, {useState} from "react";
import {NavDropdown} from "react-bootstrap";

const SwapsContainer = ({arr, trigger}) => {
    let content
    const [visible, setVisible] = useState(arr)
    content = visible.map(item => {
        if (item.children.length === 0) {
            return <NavDropdown.Item key={item.title} href="#home">{item.title}</NavDropdown.Item>
        }
        return <Swaps
            key={item.title}
            trigger={() => trigger()}
            select={(title) => change(title)}
            goBack={() => goBack()}
            title={item.title}
            children={item.children}
        />
    })
    const change = (title) => {
        const takeIt = arr.filter(item => item.title === title)
        setVisible(takeIt)
    }
    const goBack = () => {
        setVisible(arr)
    }

    return content
}
export default SwapsContainer
