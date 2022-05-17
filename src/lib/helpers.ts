import { TinyColor } from '@ctrl/tinycolor'

export function parseError(error: unknown) {
  let msg = ''
  if ((error as Error).message) {
    msg = (error as Error).message
  } else if (typeof error === 'string') {
    msg = error
  }
  return msg
}

export function whiteForegroundWorks(hex: string) {
  return new TinyColor(hex).getBrightness() < 127.5
}
