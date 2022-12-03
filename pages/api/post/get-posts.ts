import type {NextApiRequest, NextApiResponse} from 'next'
import {getBlogData} from "../../../helpers/getBlogData";
import {Post} from "../../../types/Blog";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post[]>
) {
    const jsonData = await getBlogData();
    res.status(200).json(jsonData?.posts);
}
