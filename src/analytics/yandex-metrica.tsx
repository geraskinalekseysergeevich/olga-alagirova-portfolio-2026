import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

type YandexMetricaHitOptions = {
	title?: string
}

type YandexMetricaInitOptions = {
	accurateTrackBounce: boolean
	clickmap: boolean
	ecommerce: string
	referrer: string
	ssr: boolean
	trackLinks: boolean
	url: string
	webvisor: boolean
}

type YandexMetricaFunction = {
	(counterId: number, methodName: 'init', options: YandexMetricaInitOptions): void
	(counterId: number, methodName: 'hit', url: string, options?: YandexMetricaHitOptions): void
	a?: unknown[]
	l?: number
}

declare global {
	interface Window {
		ym?: YandexMetricaFunction
	}
}

const METRICA_SCRIPT_ID = 'yandex-metrica-tag'
const resolveCounterId = () => {
	const rawValue = import.meta.env.VITE_YANDEX_METRICA_ID

	if (!rawValue) {
		return null
	}

	const counterId = Number(rawValue)
	return Number.isInteger(counterId) && counterId > 0 ? counterId : null
}

const injectMetricaScript = () => {
	const counterId = resolveCounterId()

	if (!counterId) {
		return
	}

	const metricaScriptSrc = `https://mc.yandex.ru/metrika/tag.js?id=${counterId}`

	if (
		document.getElementById(METRICA_SCRIPT_ID) ||
		Array.from(document.scripts).some((script) => script.src === metricaScriptSrc)
	) {
		return
	}

	const scriptElement = document.createElement('script')
	scriptElement.id = METRICA_SCRIPT_ID
	scriptElement.async = true
	scriptElement.src = metricaScriptSrc
	document.head.appendChild(scriptElement)
}

const initMetrica = (counterId: number) => {
	if (!window.ym) {
		const ym = ((...args: unknown[]) => {
			;(ym.a = ym.a || []).push(args)
		}) as YandexMetricaFunction

		ym.a = []
		ym.l = Date.now()
		window.ym = ym
	}

	injectMetricaScript()

	window.ym(counterId, 'init', {
		ssr: true,
		ecommerce: 'dataLayer',
		referrer: document.referrer,
		url: window.location.href,
		clickmap: true,
		trackLinks: true,
		accurateTrackBounce: true,
		webvisor: true,
	})
}

const trackPageView = (counterId: number) => {
	if (!window.ym) {
		return
	}

	window.ym(counterId, 'hit', window.location.href, {
		title: document.title,
	})
}

export const YandexMetrica = () => {
	const location = useLocation()
	const counterId = resolveCounterId()
	const isInitializedRef = useRef(false)

	useEffect(() => {
		if (!counterId || isInitializedRef.current) {
			return
		}

		initMetrica(counterId)
		isInitializedRef.current = true
	}, [counterId])

	useEffect(() => {
		if (!counterId || !isInitializedRef.current) {
			return
		}

		trackPageView(counterId)
	}, [counterId, location.hash, location.pathname, location.search])

	return null
}
