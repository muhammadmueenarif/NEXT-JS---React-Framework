first of all write command npx create-next-app@latest to create project of next js. it will ask for project name, 
name, use typescript or not(ts recommend), tailwind(yes), src directory or not(old inside src but new not).
we will use src. app router yes and import alias no. move to folder and write npm run dev to start.
we have src folder main folder in which we will work. public folder in which we give public files like images. 
in src we have app folder which contains routes handler for application.files inside app corresponds to routes 
in the application. eg., page.tsx in app is our home route.  globals.css is for styling. 
remove unnecessary code from globals. remove code from page.tsx and return only one heading to see changes.
gitignore file tells what files or folders should be ignored by git. by default it ignores node modules and env
files. package.json to see dependencies and versions. readme file tells how to run project. tailwind.config.ts 
to manage tailwind configuration. 

Lec 02. Routing. 
Routing for NEXTjs 14. Next.js comes with a built in file based routing system that is easy to use and powerful 
enough to handle various complex routing scenarios.

Pkgs are defined by the files in the app directory.
For example, creating a folder called about in app folder and creating a file named page TSX within it will 
automatically create a route about slash about. similarly we can create different pages like contact.

Dynamic Routing
Dynamic routing allows you to create routes with dynamic segments. These segments can be captured as parameters 
and used in your components. Suppose we shall create one user's route and within user's route we shall create 
user one, User two. Etc.. But not in the all the users to one to use a 100 like that. But it won't be. We will 
not create 100 pages or 100 folders. We shall create only one folder, and within it we shall try to use the 
routes with the specific id.

create a folder users in app folder and create file in it. the first file should be named page.tsx.
now within users folder we will create [userid] folder. inside it we will make file page.tsx. in this add code,
and then pass props(params) in it. now if we goto that url like localhost:3000/users/001, it will show profile 
of user id 001. 

Nested routes.
Nested routes allow you to create more complex routing structures by placing files within subdirectories inside 
the app directory.

let's create profile page in app folder. we want setting route within profile page, then create setting folder 
inside the profile folder and create page file in settings folder.
localhost:3000/profile/settings

localhost:3000/users/001/userprofile

localhost:3000/users/001/userprofile/blogs/004

Catch all routes.
This match multiple segments in a URL and capture them as an array.
localhost:3000/docs/100/200
localhost:3000/docs/segments(it will show segments page even we not create page.tsx and segment folder)
localhost:3000/docs/segments/paragraphs.

One benefit of using layouts in React.js is that on navigation only the page components update while the layout 
on rerender the layout does not render, only the page components are update. This is called partial rendering, 
so it is first only the page updates, not the layout. Total layout is not updated. 

Next.js routing is flexible  and powerful, allowing you to build a wide variety of route structures.


Lec 3. Styling. 
Using global styles, css modules, styled jsx, and integrate tailwind css. 
global styles are applied using css file that is imported in app/layout.tsx.
css modules allow to scope css to particular component preventing conflicts. 

styled jsx is way to write scoped and component level styles in next js. add styles directly in the component 
using the <style jsx> tag. 
write 'use client' at the top of component that will render on client side. 

tailwind css is utility first framework of css that can be easily integrated into next js project. 
we already installed tailwind in project and we have tailwind.config.tsx file. we use tailwind base, component,
and utilites in global file to use it. install tailwind css intellisense extension in vs code. 


Lec 4. Working with images/static files/custom metadata/seo optimization.
Next js 14 offers advanced image optimization out of the box with the next/image component. Width and height 
props are mandatory unless fill is equal to true or false is set. The <image> component. There is a special 
image tag. This is an extension of the HTML img tag and comes with automatic image optimization, such as 
    1.preventing layout shift automatically when images are loading. Layout shift means suppose one image is loading 
here, and before loading, all the text will be here and after loading they will shift to another place. This 
is called Image layout Shift. 

    2.resizing images to avoid shipping large images to device with a smaller viewport, suppose there is a 
large image and we shall use it for our desktop monitor with large monitor. Large width, but now we want to 
use the same site or same app for our mobile phone where the size is small, so nextjs automatically reduce 
the size of the image to fit into that viewport. 

    3.Lazy loading images. By default, images load as they enter the viewport. Suppose the the our page is a 
large page, and beneath that there is one image. Suppose here it is not in the viewport. When it comes into 
the viewport, then that image will be loaded. This is an automatic feature of Next.js.

    4.And next serving images in modern formats like WebP Avif when the browser supports it in the modern 
format.Those are very efficient for loading and viewing details of the images. so image tag does the following 
things. Preventing layout shift automatically when images are loading. Resizing images to avoid shipping 
large images to devices with smaller viewport. 
Lazy loading images by default image load as they enter the viewport, not at the loading time. Loading of 
page at the when it comes to viewport, then it will be loaded, serving images in modern formats like WebP, 
Avif, Avif when the browser supports it.

width and height are mandatory in image tag but if we use one command fill then it is not mandatory. 
one important prop is fill. Fill will be true or false. The parent element to fill the parent element which 
is useful when the width and height are unknown.
When the width and height are unknown, then we can assume that the image size will be the size of parent element.
The parent element must assign position relative position fixed or position absolute style.
By default, the img element will automatically be assigned to the position absolute style. If no styles 
applied to the image, the image will stretch to fit the container.
You may prefer to set object fit container for an image which is letterboxed to fit the container and 
preserve aspect ratio.
Alternatively, object fit cover will cause the image to fill the entire container and be cropped to preserve the aspect ratio.
There is a difference contains means.

Serving static files. 
Next.js uses next/head component to inject metadata into the head section of your HTML.
use head tag in return of your file and it will be moved to head of HTML. we can also use dynamic meta data
based on props. 
import Head from 'next/head'
export default function post ({post}){
    return(
        <div>
        head 
        <title> {post.title} </title>
        <meta name="description" content={post.description}>
        </div>
    )
}

meta tags. 
Ensure to use right meta tags. 
head 
title nextjs 
meta property="og:title" content="next js seo"
meta property="og:description" content="learn about next js"
head


cannonical 
use cannonical tags to avoid duplicate issues. 
head 
link rel="cannonical" href="link here"
head


structured data
implement structured data to help search engine understand the content. 
head 
script type="application/id+json"
{json.stringify({
    "@context":"schema.org",
    "@type":"webpage",
    "name": "next js",
    "url":"yourwebsite.com",
    "description": "learn about next js"
})}


Performance Optimization
Use tools like light house to edit your site and improve its performance.
optimize images: Use next image for optimal automatic optimization.
Lazy load components use dynamic imports and react suspense for code splitting.
Cache strategies utilize get static props and get server side props for data fetching.


Lec 5. Data Fetching. 
Data fetching is very essential for building any dynamic web application. Without data fetching, you cannot 
use any dynamic web application.
various methods to fetch data in Next.js 14 and discuss when to fetch data on the server and when client.

Should I fetch data on server or on the client?
The decision of whether to fetch data on server or the client depends on the nature of your application's UI.
It depends on the application's UI, nature of the application's UI, whether UI is engaging. Then we have to 
use the client side or it is a static type of UI. Then we should use server side.


Server side Fetching.
Ideal for non real time data needs. Server side data fetching reduces the number of network requests and 
client-server Waterfall, keeps sensitive information secure and improves performance by fetching data close 
to the source. However, it causes the entire page to be rerendered on the server. It is not used for real time data 
needs.

What is client server Waterfall.
If one action depends on the another action. If the next action depends on the previous action, then it is 
called waterfall and requires and client server Waterfall. It does not needs any client server. The waterfall 
keeps sensitive information secure. It cannot be loaded from the client. So you do not have to 
provide the key security keys etc. passwords etc. so this sensitive information secure and improves 
performance by fetching data close to the source. It means when it loads it already has the data from the database. 
However, it causes the entire page to be rerendered on the server, however it. The server must rerender the 
whole page. That is the problem.

Client Side Data Fetching
It is suitable for real time data updates. It is very frequently or when you need to revalidate specific UI 
components without rerendering the entire page. This method is useful for dynamic updates such as live views.


Data fetching methods in Next.js.
Number one using fetch API.
Number two using worms.(object relational mapping)
Data fetching libraries.
Route handlers.


Next.js extends the native fetch API to support server side rendering SSR with caching and revalidation options.
By default fetch request retrieve fresh data. this leads to dynamic rendering without caching. for cahe the 
data use cache option. fetch(('api url'), {cache:'force-cache'})
for partial rerendering wrap component with suspense to ensure only specific component is dynamically rendered.
import {suspense} from 'react'
export default function Navigation(){
    return (
        <>
        <Suspense fallback={<LoadingIcon/>}>
        <Cart/>
        </Suspense>
        </> )
} 

Using ORM object relational mapping or database clients
you can use volumes or database clients within server components. This method allows caching requests using 
React's cache API. 
Import cache from react 
export const getItem = cache(async(id:string)=> {
    const item = await db.item.findUnique({id});
    return item;
}).

using data fetching libraries
client components in Next.js can utilize data fetching libraries like sWr(stale while revalidate) or react 
query for real time updates and client side caching.
Example
use client;
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
export default function POllingComponent (){
    const {data} = useSWR ('/api/data', fetcher, {refreshInterval:2000});
    return '...';
}

Route handlers
Route handlers in Next.js are used to create API endpoints that execute on the server. Protecting sensitive 
data like API credentials.
Example
export async function Get() {
    const data = await fetch('api url').then(res) => res.json;
    return Response.json({data});
}

Data Fetching
Data fetching can be done either in parallel or sequential, either in parallel or at a time, or sequentially 
one after another, depending on your needs.
Three types of data fetching. sequential data fetching. parallel data fetching. preloading data.

sequential data fetching
This method is used when data dependencies exist between components.
Parallel data fetching.
Parallel fetching reduces load time By initial requests simultaneously. 
Pre loading data. Pre loading can help prevent data fetching Waterfalls. waterfalls is when one task depends 
on the previous task. For instance, you can initiate data fetching before it is actually needed in component. 
Before that, when a page loads, it tries to get all the data fetching of the next page beforehand.
export const preload = (id:string)=> {
    void getItem(id);
}
export default async function Item ({id}:{id:string}) {
    const result = await getItem(id);
    return '...';
}

Next.js 14 provides flexible data fetching options, allowing developers to optimize performance, maintain 
security, and optimize performance. It is fast, maintains security, and enhance the user experience.
Suppose something is needed at the client side, then it is used in the client side and something loading
times will be fast.
Then it uses your server side by understanding when to use server side versus client side data fetching
and applying the appropriate patterns, you can build highly efficient and dynamic applications.


Lec 6.API Routes.
Routes in Next.js API routes provide an easy way to create a public API. API means application programming 
interface directly with your application. These routes allow you to handle HTTP requests and responses on 
their server side.  API routes provide an easy way to create public API. It is an easy way to 
create public API directly within your application. This is how Next.js works. 
Please remember that these routes allow you to handle HTTP requests and responses on the server side.

Below is the step by step guide for understanding and using API routes in Next.js.
Setting up API routes.
API routes are created by placing files in the pages/API directory of your Next.js project. Each file in 
this directory corresponds to an API endpoint.
For example, if you create a file called hello.ts inside pages/API, it will be accessible at API/hello.

You can handle different http methods e.g., get post put delete in your api route by checking req.method. 

Request Helpers
Next JS provides several built in helpers to easily access data from the request. It Provides several built 
in helpers to easily access data from the request 
Request.cookies is the object containing the cookies sent by the request. 
req.query, request query an object containing the query parameters. It is also needed. 
Req.body. An object containing the parsed body of the request. Please note that this is the parsed body of 
request. Next.js provides built in helpers to easily access data from the request.

Custom configuration
Each API route can export a configuration object to customize its behavior.For example, you can set the body 
parser size limit or disable it entirely.


Response Helpers
The response object includes helper methods similar to Express.js for sending responses like Express.js. It 
can include a helper method to send responses. Res.status(code) sets the HTTP status code.
Res.json(body) since JSON response.
Res.send(body) sends http response with a string, object or buffer.
res.redirect([status,] path): redirects the client to a specific path.
That is first is optional. Status is optional.
It means res revalidate url path revalidate page using getStaticProps.

Dynamic API Routes
API Routes can be dynamic, similar to Next.js pages. For example a file named [pid].ts will match requests
to /api/post/1, /api/post/abc. etc.

Catch All API Routes 
Catch all routes match multiple segments and are defined with [...] in file name. 
//pages/api/post/[...slug].tsx



