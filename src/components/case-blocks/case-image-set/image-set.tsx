type CaseImageSetProps = {
	imagesSrc: string[]
}

export const CaseImageSet = ({ imagesSrc }: CaseImageSetProps) => {
	return (
		<div>
			{imagesSrc.map((imgSrc, index) => (
				<img key={index} src={imgSrc} alt="Project Image" />
			))}
		</div>
	)
}
