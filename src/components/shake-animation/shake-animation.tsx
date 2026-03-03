import clsx from 'clsx'
import {
	type AnimationEvent,
	type CSSProperties,
	type HTMLAttributes,
	type MouseEvent,
	type ReactNode,
	useState,
} from 'react'

import styles from './shake-animation.module.css'

type ShakeAnimationProps = {
	children: ReactNode
	baseAngleDeg?: number
	durationMs?: number
	transformOrigin?: string
	shakeOffset1Deg?: number
	shakeOffset2Deg?: number
	shakeOffset3Deg?: number
	shakeOffset4Deg?: number
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>

export const ShakeAnimation = ({
	children,
	baseAngleDeg = 0,
	durationMs = 850,
	transformOrigin = '50% 50%',
	shakeOffset1Deg = 3.6,
	shakeOffset2Deg = -3,
	shakeOffset3Deg = 2,
	shakeOffset4Deg = -1,
	className,
	onMouseEnter,
	onAnimationEnd,
	style,
	...props
}: ShakeAnimationProps) => {
	const [isShaking, setIsShaking] = useState(false)

	const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
		onMouseEnter?.(event)

		if (isShaking) {
			return
		}

		setIsShaking(true)
	}

	const handleAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
		onAnimationEnd?.(event)
		setIsShaking(false)
	}

	const styleVariables = {
		'--shake-base-angle': `${baseAngleDeg}deg`,
		'--shake-duration': `${durationMs}ms`,
		'--shake-origin': transformOrigin,
		'--shake-offset-1': `${shakeOffset1Deg}deg`,
		'--shake-offset-2': `${shakeOffset2Deg}deg`,
		'--shake-offset-3': `${shakeOffset3Deg}deg`,
		'--shake-offset-4': `${shakeOffset4Deg}deg`,
		...style,
	} as CSSProperties

	return (
		<div
			className={clsx(styles.container, className, isShaking && styles.shaking)}
			onMouseEnter={handleMouseEnter}
			onAnimationEnd={handleAnimationEnd}
			style={styleVariables}
			{...props}
		>
			{children}
		</div>
	)
}
