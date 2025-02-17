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