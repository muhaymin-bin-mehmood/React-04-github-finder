import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

// get initial users for (testing purpose)
export const searchUsers = async (text) => {
    const params = new URLSearchParams({ q: text })
    const response = await github.get(`/search/users?${params}`);
    return response.data.items
}

// get single user
export const getUserAndRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 5
    })
    const [users, repos] = await Promise.all([
        github.get(`users/${login}`),
        github.get(`users/${login}/repos?${params}`)
    ])

    return { users: users.data, repos: repos.data }
}