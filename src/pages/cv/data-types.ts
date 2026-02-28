export type FullTextList = {
	title?: string
	bullets: string[]
}

export type BasicCase = {
	title: string
	role: string
	previewText: string
	fullText?: FullTextList[]
}

export type WorkExperienceCase = BasicCase

export type MainProjectCase = BasicCase

export type EducationCase = BasicCase

export type CvCase = MainProjectCase | WorkExperienceCase | EducationCase
