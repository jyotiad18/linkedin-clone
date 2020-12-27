import React from 'react'
import './SideBar.css';
import Avatar from '@material-ui/core/Avatar';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function SideBar() {
	const user = useSelector(selectUser);

	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);
	
	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg" alt="" />
				<Avatar src="" className="sidebar__avatar">
					{user.email[0].toUpperCase()}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p> Who viewed you</p>
					<p className="sidebar__statNumber">2,543</p>
				</div>
				<div className="sidebar__stat">
					<p> Views on post</p>
					<p className="sidebar__statNumber">2,543</p>
				</div>
			</div>
			<div className="sidebar__bottom">				
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('program')}
				{recentItem('web development')}
				{recentItem('c#.Net')}
			</div>
		</div>
	)
}

export default SideBar;
