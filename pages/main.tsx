import type { NextPage } from 'next'
import useSWR from "swr"
import { response } from './api/brickplanet-privacy';
import PrivacyComponent from './../components/PrivacyComponent';

const fetcher = (url: string) => fetch(url).then(r => r.json())

interface res {
    data: response[],
    error: any
}

const Main: NextPage = () => {
    const { data, error } = useSWR('/api/brickplanet-privacy', fetcher)
    if (error) return <div>Failed to load...</div>;
    if (!data) return <div>Loading posts...</div>;

    let privacyData: any = [];

    data.data.forEach((element: response) => {
        privacyData.push(
            <div key={element.name}>
                {PrivacyComponent(element)}
            </div>
        );
    })
    
    return (
       <>
        <div className='grid md:grid-cols-2 gap-5 container mx-auto mt-5'>
            {privacyData}
        </div>
        <div className='text-center mt-2'>The data above is obtained and analyzed by a team of insiders to ensure it trustworthy origin.</div>
        </>
    )
}



export default Main