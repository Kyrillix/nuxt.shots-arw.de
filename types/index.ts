declare global {
     interface StrapiPagination {
          page: number;
          pageSize: number;
          pageCount: number;
          total: number;
     }
     interface StrapiMeta {
          pagination: StrapiPagination;
     }
     interface StrapiBase<T> {
          id: number;
          attributes: T;
     }
     interface StrapiResponse<T> {
          data: StrapiBase<T>[];
          meta: StrapiMeta;
     }
     interface StrapiAttributes {
          createdAt: Date;
          updatedAt: Date;
          publishedAt: Date;
     }
     interface Post extends StrapiAttributes {
          Title: string;
          Slug: string;
          Intro: string;
          Content: string;
          Category: string;
          CoverURL: string;
     }
}

export {};