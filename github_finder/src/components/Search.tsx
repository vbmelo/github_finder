import { useState, KeyboardEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
import styles from './Search.module.css'

type SearchProps = {
	loadUser: (userName: string) => Promise<void>;
}

const Search = ({ loadUser }: SearchProps) => {
	const [userName, setUserName] = useState<string>('')

	const handleKeyDown = (e: KeyboardEvent) => {
		if(e.key === 'Enter') {
			if (userName) {
				loadUser(userName)
			}
		}
	}

	return (
		<div className={styles.search}>
			<h2>Search for a User: </h2>
			<p>Find your best repositories</p>
			<div className={styles.search_container}>
				<input
					type="text"
					placeholder="Type a GitHub username"
					onChange={e => setUserName(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button onClick={() => loadUser(userName)}>
					<BsSearch />
				</button>
			</div>
		</div>
	)
}

export default Search