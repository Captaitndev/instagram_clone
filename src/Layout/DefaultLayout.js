import React from 'react'
import Header from './Component/Header/Header'

function DefaultLayout({ children }) {
    return (
        <div>
            {/* header */}
            <Header />

            {/*sidebar  */}
            sidebars
            {/* content */}
            {children}

        </div>
    )
}

export default DefaultLayout

