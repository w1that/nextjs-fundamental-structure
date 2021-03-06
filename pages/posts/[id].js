import React from "react";

function PostDetails({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const post = await response.json();

//   return {
//     props: {
//       post,
//     },
//   };
// };

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

  const posts = await response.json();
  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async(context)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

  const post = await response.json();

  return {
      props:{
          post,
      }
  }
}
export default PostDetails;
