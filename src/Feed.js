import React from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

function Feed() {
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input type="text" />
						<button type="submit">Send</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
					<InputOption Icon={SubscriptionsIcon} title='Video'
						color='#E7A33E' />
					<InputOption Icon={EventNoteIcon} title='Event'
						color='#C0CBCD' />
					<InputOption Icon={CalendarTodayIcon} title='Write article'
						color='#7FC15E' />
				</div>
			</div>
		</div>
	)
}

export default Feed;