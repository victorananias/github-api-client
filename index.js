const $ = document.querySelector.bind(document)

const token = 'bf438a3782dcf8a178376a64935ec812f279f913'

const name = '',
  username = '',
  avatarUrl = '',
  projects = [],
  bio = '',
  company = '',
  programmingLanguages = [],
  topics = [],
  contact = []

const apiUrl = 'https://api.github.com/graphql'
const query = `
  {
    viewer {
      login
      name
      bio
      location
      email
      company
      avatarUrl
      bioHTML
      isHireable
      projectsUrl
      twitterUsername
      url
      websiteUrl
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            descriptionHTML
            homepageUrl
            createdAt
            url
            object(expression: "master:README.md") {
              ... on Blob {
                text
              }
            }
          }
        }
      }
    }
  }
`

axios
  .post(apiUrl, { query }, { headers: { 'Authorization': `Bearer ${token}` } })
  .then(({ data: { data } }) => {
    const { viewer } = data
    console.log(viewer)
    $('#nome').innerText = viewer.login
    $('#avatar').src = viewer.avatarUrl
    $('#avatar').alt = viewer.login
  })
  .catch(error => {
    console.log(error)
  })