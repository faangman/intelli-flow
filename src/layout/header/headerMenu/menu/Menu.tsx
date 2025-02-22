import React from 'react';
import {S} from '../HeaderMenu_Styles';


const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "About",
        href: "testimony"
    },
    {
        title: "Our Company",
        href: "skills"
    },
    {
        title: "Contact",
        href: "contact"
    }
];

export const Menu: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink to={item.href} smooth={true} activeClass="active" spy={true} offset={-1}>
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};

