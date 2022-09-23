import type { NextPage } from 'next'
const fetcher = (url: string) => fetch(url).then(r => r.json())
import useSWR from 'swr'
import NewsCard from '../../components/NewCard'
const News: NextPage = () => {
    // fetch the news on the API endpoint
    const { data, error } = useSWR('/api/news', fetcher)
    if (error) return <div>Failed to load...</div>;
    if (!data) return <div className="flex h-screen w-screen justify-center items-center text-3xl font-bold animate-pulse">Loading posts...</div>;

    data.reverse()
    return (
        <div className='prose mx-auto prose-slate'>

            {data.map((news: any) => {
                return (
                    <div key={news.data.slug}>
                        <NewsCard title={news.data.title} slug={news.data.slug} />
                    </div>
                )
            }
            )}
        </div>
    )
}
export default News;
