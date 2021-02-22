import React from "react";

export default function Home({testId}) {
  return <div>Hello, World! - TestPage - {testId}</div>;
}

export async function getServerSideProps(context) {
  const testId = context.params.slug;
  return {
    props: {
      testId,
    },
  }
}