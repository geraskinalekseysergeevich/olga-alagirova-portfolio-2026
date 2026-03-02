import { CustomButton } from '../../custom-button/custom-button'
import styles from './list-buttons.module.css'

type CaseListButtonsProps = {
	previous: string
	next: string
}

export const CaseListButtons = ({ previous, next }: CaseListButtonsProps) => {
	return (
		<div className={styles.container}>
			<CustomButton to={previous} text="←" />
			<CustomButton to={next} text="Следующий проект →" />
		</div>
	)
}
