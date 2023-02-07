import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectBlogById } from '../reducers/blogSlice';
import { GoBack } from '../components';
import ShowAuthor from '../components/ShowAuthor';
import ReactionButton from '../components/ReactionButton';

const Blog = () => {
    const { blogId } = useParams();
    const blog = useSelector((state) => selectBlogById(state, blogId));
    const { img, category, title, content } = blog;

    return (
        <section className="relative h-screen w-screen overflow-x-hidden">
            <div className="absolute -z-0 bg-teal-500 h-full w-full rotate-45 translate-x-1/2 -translate-y-1/2" />
            <GoBack />
            <div className="container flex flex-col z-40 mx-auto bg-white mt-4 lg:h-5/6 drop-shadow-2xl lg:border lg:border-teal-500 rounded-sm lg:flex-row">
                <div className="lg:w-2/5 h-full">
                    <img src={img} className="h-full rounded-t-sm lg:rounded-tl-sm lg:rounded-tb-sm" alt={title} />
                </div>
                <div className="lg:w-3/5 h-full p-8">
                    <div className="h-full flex flex-col justify-between space-y-20">
                        <div className='space-y-6'>
                            <h6 className="inline-block text-xl text-white tracking-wider bg-red-700 rounded-full px-5 py-1">{category}</h6>
                            <h2 className="text-3xl font-bold tracking-wider text-sky-700">{title}</h2>
                            <p className="text-sm text-justify text-slate-500">{content}</p>
                            <ReactionButton {...blog} />
                        </div>
                        <ShowAuthor {...blog} />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Blog;

{/* <div>
    <button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-700 hover:text-amber-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
        </svg>
    </button>
</div> */}