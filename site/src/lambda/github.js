import {
  statusReturn
} from './requestConfig'


export const handler = async (event) => {
  try {
    return statusReturn(200, { data: 'success' })
  } catch (err) {
    console.log(err)
    return statusReturn(500, { error: err.message })
  }
}