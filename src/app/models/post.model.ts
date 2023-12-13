import { makeDate } from '../utils/common';
import { DataList, IList, IListOptions } from './list.model';

export interface IPost {
    id: string;
    date: Date;
    slug: string;
    title?: string;
    content?: any[];
    image?: any;
}

export class Post {

    public static PrepList(options: IListOptions): string {
        let start = 0, end = -1;
        if (options.page) {
            start = (options.page - 1) * options.size;
            end = options.page * options.size;
        }

        return `{
                "items": *[_type == "post"] | order(publishedAt desc)
                {
                    publishedAt, _id,
                    "mainImage":mainImage.asset->url,
                    "slug": slug.current,
                    title,
                    body[]
                }
                [${start}...${end}],
                "total": count(*[_type == "post"])
                }
            `;


    }
    public static NewInstance(post: any): IPost {
        return {
            id: post._id,
            slug: post.slug,
            date: makeDate(post.publishedAt),
            title: post.title,
            content: post.body,
            image: post.mainImage
        };
    }
    public static NewInstances(posts: any[]): IPost[] {
        return posts.map(Post.NewInstance);
    }
    public static NewList(dataset: any): IList<IPost> {
        const dl = new DataList<IPost>();
        dl.mapper = Post.NewInstance;
        return dl.NewDataList(dataset);

    }



}
