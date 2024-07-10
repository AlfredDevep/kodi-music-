import React from 'react';
import '../style/SidebarOption.css';

export const SidebarOption = ({ Icon, title }) => {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className='sidebarOption__icon' />}
            {Icon ? <h4>{title}</h4> : <h4 className='sidebarOption__text'>{title}</h4>}
        </div>
    );
};

