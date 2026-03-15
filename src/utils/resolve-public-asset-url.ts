const ABSOLUTE_URL_PATTERN = /^[a-z][a-z\d+\-.]*:/i
const WEBP_SOURCE_EXT_PATTERN = /\.(jpe?g|png)$/i

const normalizeBasePath = (basePath?: string) => {
	if (!basePath || basePath === '/' || basePath === '.' || basePath === './') {
		return '/'
	}

	const prefixedBasePath = basePath.startsWith('/') ? basePath : `/${basePath}`
	return prefixedBasePath.endsWith('/') ? prefixedBasePath : `${prefixedBasePath}/`
}

export const resolvePublicAssetUrl = (src: string) => {
	if (!src) {
		return src
	}

	if (ABSOLUTE_URL_PATTERN.test(src) || src.startsWith('//') || src.startsWith('data:') || src.startsWith('blob:')) {
		return src
	}

	if (!src.startsWith('/')) {
		return src
	}

	const basePath = normalizeBasePath(import.meta.env.BASE_URL)

	if (basePath === '/' || src.startsWith(basePath)) {
		return src
	}

	return `${basePath}${src.slice(1)}`
}

export const resolvePublicWebpAssetUrl = (src: string) => {
	const resolvedSrc = resolvePublicAssetUrl(src)
	const match = resolvedSrc.match(/^([^?#]+)(.*)$/)

	if (!match) {
		return null
	}

	const pathPart = match[1]
	const suffixPart = match[2] ?? ''

	if (!pathPart || !WEBP_SOURCE_EXT_PATTERN.test(pathPart)) {
		return null
	}

	return `${pathPart.replace(WEBP_SOURCE_EXT_PATTERN, '.webp')}${suffixPart}`
}
