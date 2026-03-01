import { Title } from '../../title/title'
import { CaseImageSet } from '../case-image-set/image-set'
import styles from './page-header.module.css'

type CasePageHeaderProps = {
	texts: string[]
	imgSrc: string
}

export const CasePageHeader = ({ texts, imgSrc }: CasePageHeaderProps) => {
	return (
		<div className={styles.container}>
			<Title texts={texts} />
			<CaseImageSet imagesSrc={[imgSrc]} />
		</div>
	)
}
