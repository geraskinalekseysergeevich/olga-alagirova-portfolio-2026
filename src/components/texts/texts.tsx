import clsx from 'clsx'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

import type { RichTextPart, TextContent } from '../../pages/cv/data-types'
import { fixHangingPrepositions } from './fix-hanging-prepositions'

type TextProps = {
	text: TextContent
	customClass?: string
}

const dedentMultilineText = (text: string) => {
	const lines = text.replace(/\r\n/g, '\n').split('\n')

	if (lines.length <= 1) {
		return lines
	}

	const indents = lines
		.slice(1)
		.filter((line) => line.trim().length > 0)
		.map((line) => {
			const match = line.match(/^[\t ]+/)
			return match ? match[0].length : 0
		})

	if (indents.length === 0) {
		return lines
	}

	const minIndent = Math.min(...indents)

	if (minIndent === 0) {
		return lines
	}

	return [lines[0], ...lines.slice(1).map((line) => (line.trim().length === 0 ? '' : line.slice(minIndent)))]
}

const normalizeLeadingIndent = (line: string) => {
	const leadingWhitespace = line.match(/^[\t ]+/)?.[0] ?? ''
	const content = line.slice(leadingWhitespace.length)
	const fixedContent = fixHangingPrepositions(content)
	const visualIndent = leadingWhitespace.replace(/\t/g, '\u00A0\u00A0\u00A0\u00A0').replace(/ /g, '\u00A0')

	return `${visualIndent}${fixedContent}`
}

const inlineLinkStyle = {
	color: 'inherit',
	textDecoration: 'underline',
	textUnderlineOffset: '0.12em',
} as const

const renderText = (text: string) => {
	const lines = dedentMultilineText(text)

	return lines.map((line, index) => (
		<Fragment key={`line-${index}`}>
			{index > 0 ? <br /> : null}
			{normalizeLeadingIndent(line)}
		</Fragment>
	))
}

const renderRichText = (content: RichTextPart[]) => {
	return content.map((part, index) => {
		if (typeof part === 'string') {
			return <Fragment key={`part-${index}`}>{fixHangingPrepositions(part)}</Fragment>
		}

		if (part.external) {
			return (
				<a key={`part-${index}`} href={part.to} rel="noopener noreferrer" style={inlineLinkStyle} target="_blank">
					{fixHangingPrepositions(part.text)}
				</a>
			)
		}

		return (
			<Link key={`part-${index}`} rel="noopener noreferrer" style={inlineLinkStyle} target="_blank" to={part.to}>
				{fixHangingPrepositions(part.text)}
			</Link>
		)
	})
}

const renderContent = (text: TextContent) => {
	if (typeof text === 'string') {
		return renderText(text)
	}

	return renderRichText(text)
}

export const BodyText = ({ text, customClass }: TextProps) => {
	return <p className={clsx('body', customClass)}>{renderContent(text)}</p>
}

export const BodyAccentText = ({ text, customClass }: TextProps) => {
	return <p className={clsx('bodyAccent', customClass)}>{renderContent(text)}</p>
}
