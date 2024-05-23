
import React, { useState, useEffect } from 'react';
import { setLocale, useIntl, connect, history } from 'umi';
import logo from '@/assets/img/logo.png';

const Header = () => {


    const headData = [
        {
            name: "Home",
            children: null,
            onClick: () => {
            },
        },
        {
            name: "Datasets",
            children: null,
            onClick: null,
        },
        {
            name: "Tools",
            children: null,
            onClick: null,
        },
        {
            name: "Leaderboards",
            children: null,
            onClick: null,
        },
    ];

    useEffect(() => {
    }, []);

    return (
        <div className='mx-auto max-w-360 px-28 h-16 flex items-center justify-between'>
            <div className='flex items-center'>
                <img className='ml-9 w-28 h-7' src={logo} />
                <div className='font-semibold text-base-blue ml-4 text-xl'>对抗评测平台</div>
            </div>
            <div className='w-96 flex justify-between'>
                {headData.map((item, index) => {
                    return (
                        <div key={index} className='text-base-blue font-semibold text-base cursor-pointer'>
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Header;