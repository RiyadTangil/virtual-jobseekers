import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        // <div className="col-md-2">
        <div className={`${props.pages ?"col-md-6":props.police?"col-md-12":"col-md-2"}`} >
            <h6 className="text-light">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-light">{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;