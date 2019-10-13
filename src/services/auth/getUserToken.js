import { TOKEN_KEY_NAME } from './common'

export default function getUserToken() {
  return localStorage.getItem(TOKEN_KEY_NAME) || null
}
