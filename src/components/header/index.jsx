
import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import logo from '@/assets/img/logo.png';
import logoWhite from '@/assets/img/logoWhite.png';
import English from '@/assets/img/English.png';
import Chinese from '@/assets/img/Chinese.png';
import closeIcon from '@/assets/img/closeIcon.png';
import menu from '@/assets/img/menu.png';
import menuWhite from '@/assets/img/menuWhite.png';
import { Drawer, Collapse } from 'antd';

const Header = () => {
    const [languageLogo, setLanguageLogo] = useState(Chinese);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [background, setBackground] = useState('rgba(0,37,99,0)');
    const [textColor, setTextColor] = useState('base-blue');
    const [icon, setIcon] = useState(logo);
    const [menuIcon, setMenuIcon] = useState(menu);

    const { Panel } = Collapse;


    const headData = [
        {
            name: "Home",
            children: null,
            onClick: () => { history.push('/') },
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
            onClick: () => history.push('/leaderboards'),
        },
    ];

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 64) {
            setBackground('base-blue');
            setTextColor('white');
            setIcon(logoWhite);
            setMenuIcon(menuWhite);
        } else {
            setBackground('white');
            setTextColor('base-blue');
            setIcon(logo);
            setMenuIcon(menu);
        }
    };

    const onOpen = () => {
        setDrawerOpen(true);
    }

    const onClose = () => {
        setDrawerOpen(false);
    }

    const collapseIcon = (panel) => {
        const arr = ["0", "5"]
        if (arr.indexOf(panel?.panelKey) == -1) {
            if (panel?.isActive) {
                return (<div className='w-4 h-4 bg-squareMinus bg-contain' />)
            } else {
                return (<div className='w-4 h-4 bg-squarePlus bg-contain' />)
            }
        } else {
            return (<div className='w-4 h-4 bg-squareArrow bg-contain' />)
        }
    }

    return (
        <div className='fixed w-full z-50'>
            <div className={`w-full bg-${background}`}>
                <div className={`mx-auto max-w-360 px-10 md:px-28 h-16 flex items-center justify-between text-${textColor}`} >
                    <div className='flex items-center'>
                        <img className='ml-0 md:ml-9 w-28 h-7' src={icon} />
                        <div className='font-semibold ml-4 text-xl'>对抗评测平台</div>
                    </div>
                    <div className='hidden w-96 md:flex justify-between'>
                        {headData.map((item, index) => {
                            return (
                                <div key={index} className='font-semibold text-base cursor-pointer' onClick={item.onClick}>
                                    {item.name}
                                </div>
                            )
                        })}
                        <img src={English} className='w-8 cursor-pointer' />
                    </div>
                    {/* <img className="hidden sm:block w-7 h-7 mr-20 hover:cursor-pointer" src={languageLogo} /> */}
                    <img className="block md:hidden h-5 w-6" src={menuIcon} onClick={onOpen} />
                </div>
            </div>
            <Drawer
                title={null}
                onClose={onClose}
                open={drawerOpen}
                width={414}
                maskClosable={false}
                style={{ background: "#000" }}
                closeIcon={null}
            >
                <div className="flex items-center justify-between mb-7">
                    <img src={logoWhite} className="w-28" />
                    <img src={closeIcon} className="w-5 h-5" onClick={onClose} />
                </div>
                <div>
                    <Collapse bordered={false} accordion expandIconPosition="end" ghost expandIcon={(item) => collapseIcon(item)}>
                        {headData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='w-full h-[2px] bg-white'></div>
                                    <Panel
                                        header={
                                            <div>
                                                <div className='py-4 text-white font-semibold text-xl'>
                                                    {item.name}
                                                </div>
                                            </div>
                                        }
                                        key={index}
                                        collapsible={item.children === null ? "disabled" : null}
                                    >
                                        {item.children}
                                    </Panel>
                                </div>
                            )
                        })}
                    </Collapse>
                    <div className='w-full h-[2px] bg-white'></div>
                </div>
            </Drawer>
        </div>
    )
}

export default Header;