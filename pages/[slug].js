

import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import Nav from "../components/Nav"
import PortableText from  "@sanity/block-content-to-react"
import Image from "next/image";
import Link from "next/link"

export const Post = ({ title, body, image, publishedAt, description, content }) => {
    const [imageUrl, setImageUrl] = useState('');


    const people = [
        {
            name: 'Lewis Hamilton',
            role: 'Copywriter',
            imageUrl:
                'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
            twitterUrl: '#',
            linkedinUrl: '#',
        },
        // More people...
    ]

    useEffect(() => {
        const imgBuilder = imageUrlBuilder({
            projectId: 'whm84q99',
            dataset: 'production',
        });

        setImageUrl(imgBuilder.image(image));
    }, [image]);

    return (
        <>
            <Nav />
        <div className="relative py-16 bg-white overflow-hidden lg:px-16">
            <div className="relative px-4 sm:px-6">
                <div className="text-lg max-w-prose lg:mx-24 mx-auto">
                        <span className="block text-base text-center font-nunito font-bold text-customGreen font-semibold tracking-wide uppercase">
                          Introducing
                        </span>
                        <div className="mt-4 block text-4xl text-center leading-12 lg:max-w-7xl font-bold tracking-tight sm:text-4xl tracking-normal font-nunito text-customGreen">
                            {title}
                        </div>

                    {/*Photo and Bio*/}
                    <div className="lg:col-span-2 mt-8">
                        <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                            {people.map((person) => (
                                <li key={person.name} className="sm:py-8">
                                    <div className="flex justify-center alignCenter gap-x-4 gap-y-4">
                                        <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4 flex justify-center ">
                                            <Image className="object-cover shadow-lg rounded-full w-32 h-32 xl:w-32 xl:h-32" src={person.imageUrl} alt="" />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="space-y-4">
                                                <div className="text-lg leading-7 font-medium">
                                                    <h2 className="font-nunito text-customGreen font-bold tracking-wide ">{person.name}</h2>
                                                    <p className="text-customGreen font-nunito text-sm">{publishedAt}</p>
                                                    <p className="text-customGreen font-nunito text-sm">{description}</p>
                                                </div>
                                                <ul className="flex space-x-5">
                                                    <li>
                                                        <Link href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">Twitter</span>
                                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">LinkedIn</span>
                                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr className="mt-6 opacity-25"></hr>
                    <PortableText className="mt-12 text-base text-gray-900 leading-8 flex flex-col font-quicksand lg:mx-8" blocks={body}/>
                </div>
            </div>
        </div>
</>
    );
};


export const getServerSideProps = async (context) => {
    const pageSlug = context.query.slug;
    console.log(pageSlug);

    if (!pageSlug) {
        return {
            notFound: true,
        };
    }

    const query = encodeURIComponent(
        `*[ _type == "post" && slug.current == "${pageSlug}" ]`
    );
    const url = `${process.env.SANITY_URL}query=${query}`;

    const data = await fetch(url).then((res) => res.json());
    const post = data.result[0];
//   console.log(post);

    if (!post) {
        return {
            notFound: true,
        };
    } else {
        return {
            props: {
                title: post.title,
                body: post.body,
                image: post.mainImage,
                publishedAt:post.publishedAt,
                description:post.description,
                content:post.content,
            },
        };
    }
};
export default Post;



/*  <div>
        <div className="">
            <h1>{title}</h1>

            <div className="">
                <div blocks={body} />
            </div>
        </div>
    </div>*/