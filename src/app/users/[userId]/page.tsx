const page = ({params}:{params:{userId:string}}) => {
  return (
    <h1> User Profile for User Id is: {params.userId}</h1>
  )
}

export default page
