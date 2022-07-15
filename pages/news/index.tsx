
import type { NextPage } from 'next'
import { getPosts } from '../../scripts/utils';

export const getStaticProps = () => {
    const posts = getPosts(1); // the argument has no effect yet

    return {
        props: {
            posts,
        },
    };
};

const Home = (props: { posts: any[] }) => {
    return (
        <>
            <div >
                <p className='text-xl my-2 font-bold  text-center'>Newly Published</p>
                {props.posts.map((post: any) => (
                    <div key={post.slug} className="p-2 bg-black text-white text-center w-2/4 mx-auto">
                        <p>{post.data.title}</p>
                        <p>by: {post.data.author}</p>
                    </div>
                ))}
            </div>
        </>
    );
};
export default Home;
