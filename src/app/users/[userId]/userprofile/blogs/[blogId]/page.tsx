const page = ({params}:{params:{userId:string
    blogId:string
}}) => {
  return (
    <h1>
      User Id: {params.userId} and Blog Id: {params.blogId}
    </h1>
  )
}

export default page
