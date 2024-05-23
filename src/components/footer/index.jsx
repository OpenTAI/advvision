import React from 'react';
import { useIntl } from 'umi';
import logoWhite from '@/assets/img/logoWhite.png';
import Facebook from '@/assets/img/Facebook.png';
import Twitter from '@/assets/img/Twitter.png';
import LinkedIn from '@/assets/img/LinkedIn.png';

const Footer = ({ }) => {

    const headData = [
        {
            name: "Home",
            onClick: () => {
            },
        },
        {
            name: "Research",
            onClick: null,
        },
        {
            name: "Datasets",
            onClick: null,
        },
        {
            name: "Evaluations",
            onClick: () => {
            },
        },
        {
            name: "Community",
            onClick: () => window.open("http://highschool.opentai.org/"),
        },
    ];

    return (
        <div className='w-full h-128 sm:h-52 bg-base-blue'>
            <div className="w-full py-6 bg-deep-sky flex flex-col items-center">
                <img className="max-w-48 mb-11 sm:mb-6 sm:max-w-28" src={logoWhite} />
                <div className="flex flex-col items-center sm:flex-row sm:w-144 sm:justify-between">
                    {headData.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="text-xl sm:text-base text-white cursor-pointer flex items-center font-semibold mb-5"
                                onClick={item.onClick}
                            >
                                {item.name}
                            </div>
                        )
                    })}
                </div>
                <div className='w-22 flex justify-between mb-6'>
                    <img className="h-4" src={Facebook} />
                    <img className="h-4" src={Twitter} />
                    <img className="h-4" src={LinkedIn} />
                </div>
                <div className='flex flex-col items-center text-white text-sm font-medium sm:flex-row sm:w-96 sm:justify-between'>
                    <div>Copyright © 2024 Fudan Uni</div>
                    <div>
                        <div>Terms & Conditions</div>
                    </div>
                </div>
                <div />
            </div>
        </div>
    )
}

export default Footer;