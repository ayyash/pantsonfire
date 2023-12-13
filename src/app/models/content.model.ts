
export interface IContent {
    id: string;
    content?: any[];
    slug?: string;
}

export class Content  {

    public static PrepList(options: any): string {
        return `*[_type == "content"]
                {
                    _id,
                    "slug": slug.current,
                    body[]
                }
                `;
    }
    public static NewInstance(content: any): IContent {
        return {
            id: content._id,
            slug: content.slug,
            content: content.body
        };
    }
    public static NewInstances(content: any): IContent[] {
        // mapping to sanity: result
        return content.result.map(Content.NewInstance);
    }


}
