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

