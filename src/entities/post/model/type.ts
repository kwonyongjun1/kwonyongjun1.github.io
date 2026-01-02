export type Post = Metadata & {
  id: string;
};

export interface Metadata {
  title: string;
  description: string;
  category: string;
  tags: string[];
  releaseDate: string;
  writer: string;
  image?: string;
}
