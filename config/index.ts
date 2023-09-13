import type { AppInfo } from '@/types/app'
export const APP_ID = '3fc28eb5-7f0e-471a-b50d-1e89a2f53844'
export const API_KEY = 'app-sQ3ebsceQscNMpmUjEyNnrv0'
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Chat APP',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
