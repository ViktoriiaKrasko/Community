import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')
const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'My Blog')

page.append(title)

const POST_LIST = [
  {
    category: [
      { text: 'Important', id: 1 },
      { text: 'New', id: 2 },
    ],
    info: 'Road trips are one of my favorite ways to explore a country. They give you the freedom to go where you want, travel away from the tourist crowds, and usually even save you money compared to taking trains, buses, or flights.',
    date: '25.01',
    viewed: false,
  },
  {
    category: [{ text: 'Important', id: 1 }],
    info: 'As travelers of the world, we have a unique opportunity to break down barriers, foster cultural exchange, and create a positive impact on communities around the world.',
    date: '24.01',
    viewed: true,
  },
  {
    category: [
      { text: 'Important', id: 1 },
      { text: 'New', id: 2 },
    ],
    info: 'One of the most common questions I get asked about my ability to travel long-term is how I can afford to travel so much.',
    date: '23.01',
    viewed: false,
  },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'post button post--viewed'
        : 'post button',
    )

    const postHeader = createElement('div', 'post__header')

    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )

      categoryList.append(categorySpan)
    })

    const dateSpan = createElement(
      'div',
      'post__date',
      postData.date,
    )
    postHeader.append(categoryList, dateSpan)

    const infoParagraph = createElement(
      'p',
      'post__info',
      postData.info,
    )

    post.append(postHeader, infoParagraph)

    postList.append(post)
  })

  return postList
}

const post = createPost()
page.append(post)
