const page = ({ params }: { 
    params: { slug: string[] } 
}) => {
  if (params.slug.length === 0) return <h1>No docs</h1>;
  else if (params.slug.length===1) return <h1>{params.slug[0]} Page</h1>;
  else return <h1>{params.slug[0]} / {params.slug[1]} Page</h1>
};

export default page;
