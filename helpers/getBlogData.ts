import path from "path";
import {promises as fs} from "fs";
import {BlogData} from "../types/Blog";

export const getBlogData = async (): Promise<BlogData> => {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectory + '/blog.json', 'utf8') as string;
    return JSON.parse(fileContents) as BlogData;
}
