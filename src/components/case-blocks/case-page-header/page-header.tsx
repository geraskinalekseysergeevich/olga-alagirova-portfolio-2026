import { Title } from '../../title/title'
import styles from './page-header.module.css'

type CasePageHeaderProps = {
	texts: string[]
	imgSrc: string
}

export const CasePageHeader = ({ texts, imgSrc }: CasePageHeaderProps) => {
	return (
		<div className={styles.container}>
			<Title texts={texts} />
			<img src={imgSrc} alt="Project Image" />
		</div>
	)
}
