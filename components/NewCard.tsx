import Link from "next/link"

export default function NewsCard(props) {
    return (
        <div className="p-2 mt-2 bg-black text-white rounded">
            <h3 className='text-xl text-center text-white'>{props.title}</h3>
            <Link href={`/news/view/${props.slug}`}>
                <button className='flex  rounded p-2 mx-auto w-2/4 text-center border-4 border-blue-700 transition-all duration-300 ease-linear '>
                    <div className="text-center w-max mx-auto">View</div>
                </button>
            </Link>

        </div>
    )
}