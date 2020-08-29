import { NextApiRequest as Req, NextApiResponse as Res } from 'next'

export default async (req: Req, res: Res) => {
  console.log(req.body)
  res.status(200).json(req.body)
}
