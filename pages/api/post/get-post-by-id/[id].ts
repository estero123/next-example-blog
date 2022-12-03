import type {NextApiRequest, NextApiResponse} from 'next'
import {Post} from "../../../../types/Blog";
import {getBlogData} from "../../../../helpers/getBlogData";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post | undefined>
) {
    const { id } = req.query;
    const { posts } = await getBlogData();
    const result = posts?.find((post: Post) => post.id === Number(id));
    res.status(200).json(result);
}
