import getUserToken from './getUserToken'

export default function hasUserToken() {
  return !!getUserToken()
}
