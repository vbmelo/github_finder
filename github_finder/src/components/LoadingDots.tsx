import styles from './LoadingDots.module.css'

// This is a pure css loading animation from https://loading.io/css/
const LoadingDots = () => {
	return (
		<div className={styles.loading_container}>
			<div className={styles.lds_ellipsis}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default LoadingDots