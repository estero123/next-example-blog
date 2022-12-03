import {GetStaticProps} from "next";
import Image from 'next/image'
import {Category, Post} from "../types/Blog";
import {getBlogData} from "../helpers/getBlogData";

export default function Home({posts}: { posts: Post[]}) {
  return (
      <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
          <div className="grid grid-cols-4 gap-4">
          {(posts || []).map((post: Post) => (
              <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg hover:translateY-110">
                  <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={800}
                      height={600}
                  />
                  <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{post.title}</div>
                      <p className="text-gray-700 text-base">{post.excerpt}</p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                      {(post.categories || []).map((category: number) => <span key={category}
                          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>)}
                  </div>
              </div>
          ))}
          </div>
      </div>
  )
}

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async (
    context
) => {
    const blogData = await getBlogData();

    return {
        props: {
            posts: blogData?.posts,
        },
    }
}
