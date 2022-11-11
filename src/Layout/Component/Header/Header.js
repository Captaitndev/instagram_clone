import classNames from 'classnames/bind'
import { IconLogo } from '~/Icons/icon'
import styles from './Header.module.scss'
import SearchIcon from '@mui/icons-material/Search'
import { AccountCircleOutlined, Diversity1Outlined, Home, PeopleAltOutlined } from '@mui/icons-material'
import Box from '@mui/material/Box'



const cx = classNames.bind(styles)

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')} >
                <IconLogo />
            </div>

            <div className={cx('navtab')} >
                {/* searchbtn */}
                <Box className={cx('btn-tabnav')} >
                    <SearchIcon fontSize='large' className={cx('icon-tabnav')} />
                </Box>

                {/* btnHome */}
                <Box className={cx('btn-tabnav')} >

                    <Home fontSize='large' className={cx('icon-tabnav')} />
                </Box>
                {/* btnGroup */}
                <Box className={cx('btn-tabnav')} >

                    <Diversity1Outlined fontSize='large' className={cx('icon-tabnav')} />
                </Box>
                {/* btListFriends*/}
                <Box className={cx('btn-tabnav')} >

                    <PeopleAltOutlined fontSize='large' className={cx('icon-tabnav')} />
                </Box>

            </div>
            <div className={cx('user')} >
                <AccountCircleOutlined />
            </div>



        </div>
    )
}
export default Header