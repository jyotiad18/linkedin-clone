import React from 'react'
import './SideBar.css';
import Avatar from '@material-ui/core/Avatar';

function SideBar() {
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
				<Avatar className="sidebar__avatar" />
				<h2>Jyoti ADHIKARI</h2>
				<h4>JyotiAdhikari@gmail.com</h4>
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
