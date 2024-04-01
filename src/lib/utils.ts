import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getLastWord = (str: string) => {
  const words = str.split(' ')
  const lastWord = words[words.length - 1]
  return lastWord
}

export const removeLastWord = (str: string) => {
  let words = str.split(' ')
  words.pop()
  const newStr = words.join(' ')
  return newStr
}
