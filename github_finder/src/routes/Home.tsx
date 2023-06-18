import { UserProps } from '../types/user';
import Search from '../components/Search';
import User from '../components/User'
import Error from '../components/Error';
import { useState } from 'react';
import axios from 'axios';
import LoadingDots from '../components/LoadingDots';

const Home = () => {
	// the user type is null at first, but it can be a UserProps object
	const [user, setUser] = useState<UserProps | null>(null);
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const loadUser = async (userName: string) => {
		setLoading(true);
		setError(false);
		setUser(null);
		const response = await axios
			.get(`https://api.github.com/users/${userName}`)
			.catch((err) => {
				console.log("loadUser -> err", err)
				setLoading(false);
				setError(true);
				return null;
			})
			.then((res) => {
				setLoading(false);
				return res;
			})

		const data = response?.data;

		const { avatar_url, login, location, followers, following } = data;

		const userData: UserProps = {
			avatar_url,
			login,
			location,
			followers,
			following
		}

		setUser(userData)
	}

	return <div>
		<Search loadUser={loadUser} />
		{loading ? <LoadingDots /> : 
		<>
			{user && <User {...user} />}
			{error && <Error />}
		</>
		}
	</div>;
};

export default Home;