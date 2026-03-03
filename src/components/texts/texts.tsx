import clsx from 'clsx'
import { Fragment } from 'react'

type TextProps = {
	text: string
	customClass?: string
}

const SHORT_RU_WORDS_PATTERN =
	/(^|[^\p{L}\p{N}_])(а|и|в|к|с|у|о|я|но|да|не|на|по|из|за|до|от|об|во|со|ко|без|для|при|про|над|под)([ \t]+)/giu

const fixHangingPrepositions = (text: string) => {
	return text.replace(SHORT_RU_WORDS_PATTERN, (_, prefix: string, word: string) => `${prefix}${word}\u00A0`)
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

const renderText = (text: string) => {
	const lines = dedentMultilineText(text)

	return lines.map((line, index) => (
		<Fragment key={`line-${index}`}>
			{index > 0 ? <br /> : null}
			{normalizeLeadingIndent(line)}
		</Fragment>
	))
}

export const BodyText = ({ text, customClass }: TextProps) => {
	return <p className={clsx('body', customClass)}>{renderText(text)}</p>
}

export const BodyAccentText = ({ text, customClass }: TextProps) => {
	return <p className={clsx('bodyAccent', customClass)}>{renderText(text)}</p>
}
