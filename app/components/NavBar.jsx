'use client'

import NavItem from "./NavItem"
import { usePathname } from 'next/navigation';
const navItems = [
    {
    label: 'Why Cypress?',
    path: '/',
    dataTest:'Why-Cypress'
    },
    {
    label: 'Overview',
    path: '/overview',
    dataTest:'overview'
    },
    {
    label: 'Fundamentals',
    path: '/fundamentals',
    dataTest:'fundamentals'
    },
    {
        label: 'Forms',
        path: '/forms',
        dataTest:'forms'
    },
    {
        label: 'Examples',
        path: '/examples' ,
        dataTest:'examples'
    },
    {
        label: 'Component',
        path: '/component' ,
        dataTest:'component'
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
        dataTest:'best-practices'
    },
    {
        label: 'ServerSide',
        path: '/serverSide',
        dataTest:'serverSide'
    },
]

export default function NavBar(){
    const pathname = usePathname();
    //console.log(pathname)
    return (
        <>
        {pathname !== '/addProduct' &&
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem key={item.label} label={item.label} dataTest={item.dataTest} path={item.path} />
                ))
            }
        </ul> }
        </>
    )
}