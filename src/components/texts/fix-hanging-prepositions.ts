const SHORT_RU_WORDS_PATTERN =
	/(^|[^\p{L}\p{N}_])(а|и|в|к|с|у|о|я|но|да|не|на|по|из|за|до|от|об|во|со|ко|без|для|при|про|над|под)([ \t]+)/giu

export const fixHangingPrepositions = (text: string) => {
	return text.replace(SHORT_RU_WORDS_PATTERN, (_, prefix: string, word: string) => `${prefix}${word}\u00A0`)
}
