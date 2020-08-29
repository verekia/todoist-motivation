import qs from 'query-string'

export const get = async (path: string, data: Object = {}) => {
  const resp = await fetch(`https://api.todoist.com/rest/v1${path}?${qs.stringify(data)}`, {
    headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
  })
  // console.log(await resp.text())
  return resp.json()
}

export const post = async (path: string, data: Object = {}) => {
  const resp = await fetch(`https://api.todoist.com/rest/v1${path}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    body: JSON.stringify(data),
  })
  return resp.json()
}
