import { getPosts } from '../../scripts/utils';

export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: ({ data: any; content: any; slug: string; } | undefined)[]): void; new(): any; }; }; }) {
  const posts = getPosts(1); // argument will change

  res.status(200).json(posts);
}