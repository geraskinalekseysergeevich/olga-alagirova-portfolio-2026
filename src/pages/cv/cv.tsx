import { Navbar } from "../../components/navbar/navbar"
import styles from "./cv.module.css"

export const CvPage = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<div>cv</div>
		</div>
	)
}
