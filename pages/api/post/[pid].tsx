// Dynamic api routes pages/api/post/[pid].tsx
import { NextApiRequest, NextApiResponse } from "next";
export default function handler (req:NextApiRequest, res:NextApiResponse){
    const {pid} = req.query;
    res.end(`Post:${pid}`);
}