import { TOKEN_KEY_NAME } from './common'

export default function setUserToken(tokenValue) {
  if (tokenValue) {
    localStorage.setItem(TOKEN_KEY_NAME, tokenValue)
  } else {
    localStorage.removeItem(TOKEN_KEY_NAME)
  }
}
