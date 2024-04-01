export const toFeet = (n: number) => {
  const realFeet = (n * 0.3937) / 12
  const feet = Math.floor(realFeet)
  const inches = Math.round((realFeet - feet) * 12)
  return `${feet}'${inches}`
}

export const toPercentage = (price: number, salePrice: number) => {
  const percentage = (100 * salePrice) / price
  const discount = 100 - percentage
  return Math.round(discount)
}

export const capitalize = (str: string) => {
  const clean = str
    .split('-')
    .map(elm => elm.charAt(0).toUpperCase() + elm.slice(1).toLowerCase())
    .join(' ')
  return clean
}

export const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
