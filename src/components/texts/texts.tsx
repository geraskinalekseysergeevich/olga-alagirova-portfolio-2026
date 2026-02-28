import clsx from 'clsx'

type TextProps = {
	text: string
	customClass?: string
}

export const BodyText = ({ text, customClass }: TextProps) => {
	return <p className={clsx('body', customClass)}> {text}</p>
}

export const BodyAccentText = ({ text, customClass }: TextProps) => {
	return <p className={clsx('bodyAccent', customClass)}>{text}</p>
}
