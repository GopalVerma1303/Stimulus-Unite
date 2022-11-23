import React from 'react'
import Post from '../../components/Post'
import { useRouter } from 'next/router'
import { useSession, useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState,useEffect } from 'react'
function PostPage() {

    const { query } = useRouter()
    const supabase = useSupabaseClient()
    useEffect(()=>{
        posts();
    },[])
    console.log(query);

    //PostId
    const [post,setPost]=useState();
    const posts = async ()=>{
        let{data,error}=await supabase.from('posts').select('*').eq('post_id',query.PostId).single();
        if(error){
            throw error;
        }
        setPost(data);
    }
    console.log(post);

    return (
        // show post with the with query.post_id
        // <Post />
        <div></div>
    )
}

export default PostPage