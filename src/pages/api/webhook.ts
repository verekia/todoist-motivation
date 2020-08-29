import { NextApiRequest as Req, NextApiResponse as Res } from 'next'

import qs from 'query-string'

const get = async (path: string, data: Object = {}) => {
  const resp = await fetch(`https://api.todoist.com/rest/v1${path}?${qs.stringify(data)}`, {
    headers: { Authorization: `Bearer ${process.env.MY_USER_TOKEN}` },
  })
  return resp.json()
}

const post = async (path: string, data: Object = {}) => {
  const resp = await fetch(`https://api.todoist.com/rest/v1${path}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.MY_USER_TOKEN}`,
    },
    body: JSON.stringify(data),
  })
  return resp.json()
}

const getMotivations = async () => {
  const motivationTasks = await get('/tasks', { project_id: Number(process.env.MOTIVATION_PROJECT_ID) })

  const motivations = {}
  motivationTasks.forEach(t => {
    const [key, content] = t.content.split(': ')
    motivations[key] = content
  })

  return motivations
}

export default async (req: Req, res: Res) => {
  res.status(200).json(req.body)
}
