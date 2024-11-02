// components/Layout.tsx
import React from 'react';
import type {FC, ReactNode} from 'react';
import Navbar from './Navbar';


interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => (

        <div className="flex lg:flex-row flex-col w-full">
            <Navbar className=""/>
            {children}
        </div>
);

export default Layout;