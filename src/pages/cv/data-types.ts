export type RichTextLink = {
	text: string
	to: string
	external?: boolean
}

export type RichTextPart = string | RichTextLink

export type TextContent = string | RichTextPart[]

export type BasicCase = {
	title: string
	role: string
	previewText?: string
	fullText?: TextContent[]
}

export type WorkExperienceCase = BasicCase

export type MainProjectCase = BasicCase

export type EducationCase = BasicCase

export type CvCase = MainProjectCase | WorkExperienceCase | EducationCase
