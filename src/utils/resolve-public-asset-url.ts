const ABSOLUTE_URL_PATTERN = /^[a-z][a-z\d+\-.]*:/i

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

	const baseUrl = import.meta.env.BASE_URL || '/'

	if (baseUrl === '/') {
		return src
	}

	const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`

	if (src.startsWith(normalizedBaseUrl)) {
		return src
	}

	return `${normalizedBaseUrl}${src.slice(1)}`
}
