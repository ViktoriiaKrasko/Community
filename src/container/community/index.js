import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'Community')
page.append(title)

const BREADCRUMBS = [
  { isActive: false, info: 'Database' },
  { isActive: true, info: 'Information' },
]

const createBreadcrumbs = () => {
  const breadcrumbs = createElement('div', 'breadcrumbs')

  BREADCRUMBS.forEach((data) => {
    const link = createElement(
      'a',
      data.isActive ? 'link' : 'link link--disabled',
      data.info,
    )
    breadcrumbs.append(link)
  })

  return breadcrumbs
}

const breadcrumbs = createBreadcrumbs()
page.append(breadcrumbs)

const createInfo = () => {
  const post = createElement('main', 'post')

  const image = createElement('img')
  image.src = '/img/community.png'
  post.append(image)

  const postTitle = createElement(
    'h2',
    'post__title',
    'What is a database?',
  )

  post.append(postTitle)

  const postParagraph = createElement(
    'p',
    'post__paragraph',
    'Database is a container of information with inference rules and data about human experience and knowledge in some subject area. In self-learning systems, the database also contains information resulting from solving previous tasks.',
  )
  post.append(postParagraph)

  const button = createElement(
    'button',
    'button post__button',
    'Join Us In Telegram',
  )
  post.append(button)

  return post
}

const post = createInfo()
page.append(post)
