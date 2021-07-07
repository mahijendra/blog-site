import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar"

const PostCard = (props) => {
    console.log(props.post)
    const post = props.data;
    const slug = post.slug.current;

    return (
        <div className="pt-4 pb-4 px-4 sm:px-6 lg:pt-4 lg:pb-4 lg:px-8">
            <div className="relative max-w-2xl mx-auto divide-y-2 divide-gray-200 lg:max-w-3xl">
                <div className="grid gap-16 lg:gap-x-5 lg:gap-y-8 lg:pl-32">
                    <div key={post.title}>
                        <a href={slug} className="mt-2 block">
                            <p className="text-2xl font-semibold font-quicksand text-customGreen">{post.title}</p>
                            <p className="mt-3 text-sm font-medium tracking-wide  font-quicksand text-lightGreen ">{post.content}</p>
                            <p className="mt-3 lg:mt-6 text-sm text-lightGreen font-quicksand tracking-wide italic">{post.publishedAt} | {post.description}</p>
                        </a>

                        {/*<div className="mt-3">
                            <a href={slug} className="text-sm font-bold font-quicksand text-customGreen hover:text-indigo-500 cursor-pointer">
                                Read full article
                            </a>
                        </div>*/}
                    </div>
                </div>
            </div>
            <hr className="mt-8 bg-customGreen opacity-25 xl:max-w-5xl lg:ml-16"></hr>
        </div>
    );
};

export default PostCard;

{/*{post.mainImage && (
                    <img src={post.mainImage} />
                )}*/}

/*


<div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8" style={{
    background: 'linear-gradient(to bottom, #F0F4FD, #A1A3BA)',
}}>
<div className="relative max-w-4xl mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
    <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-1 lg:gap-x-5 lg:gap-y-12">
    {posts.map((post) => (
            <div key={post.title}>
                <p className="text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-3">
                    <a href={post.href} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                        Read full story
                    </a>
                </div>
            </div>
        ))}
    </div>
    </div>
</div>

*/
