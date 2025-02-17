const page = ({params}:{params:{userId:string}}) => {
  return (
    <h1>Profile for User Id: {params.userId} page</h1>
  )
}

export default page
