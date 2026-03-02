import { Title } from '../../title/title'
import { CaseMediaSet } from '../case-media-set/media-set'
import styles from './page-header.module.css'

type CasePageHeaderProps = {
	texts: string[]
	imgSrc: string
}

export const CasePageHeader = ({ texts, imgSrc }: CasePageHeaderProps) => {
	return (
		<div className={styles.container}>
			<Title texts={texts} />
			<CaseMediaSet imagesSrc={[imgSrc]} />
		</div>
	)
}
