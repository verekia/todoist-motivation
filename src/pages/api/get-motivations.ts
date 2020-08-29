import { NextApiRequest as Req, NextApiResponse as Res } from 'next'

import { get } from '../../lib/api'

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
  const data = await getMotivations()
  res.status(200).json(data)
}
