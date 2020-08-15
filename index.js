const Github = require('github-api')

const token = 'bf438a3782dcf8a178376a64935ec812f279f913'
const username = 'victorananias'

const github = new Github({ token })

const user = github.getUser()

const name = '',
  avatarUrl = '',
  projects = [],
  bio = '',
  company = '',
  programmingLanguages = [],
  topics = [],
  contact = [];

// user.getProfile()
//   .then(({ data }) => {
//     const {
//       name,
//       avatar_url: avatarUrl,
//       html_url: githubUrl,
//       bio,
//       location,
//       blog,
//       email,
//       company
//     } = data
//     // console.log(Object.keys(data).join('\n'));
//     console.log(data);
//   })
//   .catch(e => {
//     console.log(e)
//   })

user.listRepos()
  .then(({ data }) => {
    // const names = data.map(r => r.name).join(', ')
    console.log(data[0]);
  })
  .catch(e => {
    console.error(e)
  })