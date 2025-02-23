import type { NextApiRequest, NextApiResponse } from "next";
type ResponseData = {
    message:string;
}

// simple 
// export default function handler(req:NextApiRequest, res:NextApiResponse<ResponseData>) {
//     res.status(200).json({message:'Helllo from Next JS'});
// }

// handle request
// export default function handler(req:NextApiRequest, res:NextApiResponse<ResponseData>) {
//     if (req.method==='POST') {
//         // handle post request
//     }
//     else {
//         // handle other http methods
//     }
//     }

// set limit
// export const config = {
//     api:{
//         bodyParser:{
//             sizeLimit:'1mb', //set the max body size  
//         },
//     },
// };

// sending json response
// export default async function handler(req:NextApiRequest, res:NextApiResponse) {
//     try {
//         const result = await someAsyncOperation();
//         res.status(200).json({result})
//     } catch (err) {
//         res.status(500).json({error:'failed to load data'})
//     }
// }

// Dynamic api routes pages/api/post/[pid].tsx
// export default function handler (req:NextApiRequest, res:NextApiResponse){
//     const {pid} = req.query;
    // res.end(`Post:${pid}`);
// }

// Catch all api routes pages/api/post/[...slug].tsx
// export default function handler (req:NextApiRequest, res:NextApiResponse){
//         const {slug} = req.query;
//         res.end(`Post:${slug.join(', ')}`);
//     }
// catch all routes are defined using double brackets [[...]] and can match paths with or without parameters
