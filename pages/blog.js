/*

import React, {useState, useEffect} from 'react'
import Navbar from "../components/Navbar"
import imageUrlBuilder from '@sanity/image-url'
import { useRouter } from 'next/router';


export default function Blog({ posts }) {

    const router = useRouter();
    const [mappedPosts, setMappedPosts] = useState([]);

    useEffect(() => {
        if (posts.length) {
            const imgBuilder = imageUrlBuilder({
                projectId: 'whm84q99',
                dataset: 'production',
            });

            setMappedPosts(
                posts.map(p => {
                    return {
                        ...p,
                        mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
                    }
                })
            );
        } else {
            setMappedPosts([]);
        }
    }, [posts]);


    return (
        <>
            <Navbar />
            <div className="relative max-w-4xl mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-1 lg:gap-x-5 lg:gap-y-12">
                    {mappedPosts.length ? mappedPosts.map((p, index) => (
                        <div onClick={() => router.push(`/post/${p.slug.current}`)} key={index} className="">
                            <p className="text-sm text-gray-500">
                                <time dateTime={p.datetime}>{p.date}</time>
                            </p>
                            <a href="#" className="mt-2 block">
                                <p className="text-xl font-semibold text-gray-900">{p.title}</p>
                                <p className="mt-3 text-base text-gray-500">{p.body}</p>
                            </a>
                            <div className="mt-3">
                                <a href={p.href} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                                    Read full story
                                </a>
                            </div>
                        </div>
                    )) : <>No Posts Yet</>}
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async pageContext => {
    const query = encodeURIComponent('*[ _type == "post" ]');
    const url = `https://whm84q99.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url).then(res => res.json());

    if (!result.result || !result.result.length) {
        return {
            props: {
                posts: [],
            }
        }
    } else {
        return {
            props: {
                posts: result.result,
            }
        }
    }
};





/!*  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
      if (posts.length) {
          const imageBuilder = imageUrlBuilder(sanityClient);

          setMappedPosts(
              posts.map((post) => {
                  return {
                      ...post,
                      mainImage: imageBuilder
                          .image(post.mainImage),
                      /!*  .width(475)
                        .height(220),*!/


                  };
              })
          );
      } else {
          setMappedPosts([]);
      }
  }, [posts]);*!/

{/!*<div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8" style={{
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
            </div>*!/}

*/

import React, { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../pages/sanityClient";
import Nav from "../components/Nav"
import PostCard from "../components/PostCard"

 const Blog = ({ posts }) => {
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imageBuilder = imageUrlBuilder(sanityClient);

      setMappedPosts(
        posts.map((post) => {
          return {
            ...post,
            mainImage: imageBuilder
              .image(post.mainImage)
              .width(450)
              .height(500),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
      <>
          <Nav />
            <div className="pt-16 pb-6 px-4 sm:px-6 lg:pt-16 xl:mx-48" >
              <div className="">
                {mappedPosts &&
                  mappedPosts.length &&
                  mappedPosts.map((post, index) => (
                    <PostCard data={post} key={index} />
                    ))}
              </div>
            </div>
      </>
  );
};

export const getServerSideProps = async (context) => {
  const query = encodeURIComponent(`*[ _type == "post" ]`);
  const url = `${process.env.SANITY_URL}query=${query}`;

  const data = await fetch(url).then((res) => res.json());
  const posts = data.result;

  if (!posts || !posts.length === 0) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts,
      },
    };
  }
};

export default Blog

/*
style={{
    background: 'linear-gradient(to bottom, #F0F4FD, #A1A3BA)',
}}

*/
