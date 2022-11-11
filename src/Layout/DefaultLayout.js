import React from 'react'
import Header from './Component/Header/Header'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)


function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')} >
            {/* header */}
            <Header />

            {/*Appbody  */}
            sidebars
            {/* sidebar */}
            {/* feed */}
            {/* listFriends */}
            {children}

        </div>
    )
}

export default DefaultLayout

