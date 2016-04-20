import React from 'react';
import { Link } from 'react-router';

export default Layout = (props) => (
    <div>
        <div className="">
            <div className="ui menu">
                <div className="ui page container">
                    <Link className="item" activeClassName="active" to="/">HanzRhymes</Link>
                    <Link className="item" activeClassName="active" to="/about">关于</Link>
                </div>
            </div>
        </div>
        <div className="ui grid container">
            {props.children}
        </div>
    </div>
);