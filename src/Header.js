import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useDispatch} from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(logout);
		auth.signOut();
	}

	return (
		<div className= "header">
			<div className="header__left">
				<img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
				<div className="header__search">
					<SearchIcon /> 
					<input type="text" />
					
				</div>
			</div>
			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title='Home' />
				<HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
				<HeaderOption Icon={WorkIcon} title='Jobs' />
				<HeaderOption Icon={MessageIcon} title='Messaging' />
				<HeaderOption Icon={NotificationsIcon} title='Notification' />
				<HeaderOption avatar="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" 
				title = 'Me' 
				onClick={logoutOfApp}/>
			</div>
		</div>
	)
}

export default Header;
