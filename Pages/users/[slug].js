import React from "react";

export default function UserDetail({userId}) {
  return <div>Hello, World! - UserDetail - {userId}</div>;
}

export async function getServerSideProps(context) {
  const userId = context.params.slug;
  return {
    props: {
      userId,
    },
  }
}