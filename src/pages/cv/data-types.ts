export type BasicCase = {
	title: string
	role: string
	previewText?: string
	fullText?: string[]
}

export type WorkExperienceCase = BasicCase

export type MainProjectCase = BasicCase

export type EducationCase = BasicCase

export type CvCase = MainProjectCase | WorkExperienceCase | EducationCase
