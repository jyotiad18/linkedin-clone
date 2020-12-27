import React, { useState, useEffect} from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FilpMove from 'react-flip-move';

function Feed() {
	const [input, setInput] = useState('');
	const [posts, setPosts] = useState([]);

	const user = useSelector(selectUser);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data()
				})))
		})
	}, [])
	const sendPost = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			name: user.displayName,
			description: 'this is a test',
			message: input,
			photoUrl: '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})
		setInput("");
	}
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input type="text"
							value={input}
							onChange={e => setInput(e.target.value) }
						/>
						<button type="submit" onClick={sendPost}>Send</button>
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
				<FilpMove>
				{
					posts.map(({id, data: {name, description, message, photoUrl, timestamp} }) => (
						<Post
							key={id}
							name={name}
							description={description}
							message={message}
							photoUrl={photoUrl}
						/>
					))
				}
				</FilpMove>				
				
		</div>
	)
}

export default Feed;
