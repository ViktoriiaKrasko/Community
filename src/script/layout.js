export const createElement = (tag, className, text) => {
  const element = document.createElement(tag)

  if (className) {
    element.className = className
  }

  if (text) {
    element.innerHTML = text
  }

  return element
}

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/avatar.png',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.append(img)

    header.append(button)
  })

  return header
}
