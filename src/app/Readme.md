// Creation of components 

Created a components like Header , footer , home , contact , blog.

Then using RouterOutlet im routing the pages through routerLink in header 

Then creating dataset thorugh   mock-post.ts   and   creating   Post.ts  to set constraints to dataset rememeber it has to be caps

we writed some data in mock-posts.ts 


// Retriving datas 

then we are retriving those datas in posts.component.ts 
sending to posts.component.html 
there we are looping data and sending to post-comp.component.ts 
then we are showing those value in post-comp.component.html

concepts used lifccyle hook 
onInit , 
@input decerator , 
interpolation , 
property binding , 
structural directive .

the cards came in row format we need it in col 
in 2 places we are using cards home and blog 
in home we need to send col-lg-3 and blog col-lg-6
so we create one of the data binding called property binding of [colClass]
now we need to receive this from from both blog and home in posts,ts through @input


// JSON Server and delete implemntation 

instead of mock data.ts we download package called json Server
created a Service folder with Post service 
using concepts like Observable , HttpClient 
in posts.ts imported Postservice and make that to send data to cards
in post-comp writed function for delete using Postservice 

// Create Post 
in blog page i add post button 
created a new component called add-post 
in that component used two way binding for form component and uses attribute directives called ngModel
and in services i created createPost api for POST 

// Update POST 
in post-comp blog crads i added one more button called edit 
created a new component called edit-post
in that component used two way binding for form component and uses attribute directives called ngModel
and in services i created 2 services called editPost , getEditPost for put and get 
and in route i added dynamic id to get the value from route 
in post-comp i added this also in route for edit [routerLink]="['/blog/edit',cardPost.id]"
in edit-post component get the data 1st and updating 


// Concepts in used in whole projects and learned 
Data binding - interpolation , property binding , event binding , two way binding .
Structural directives - ngFor
Attribute directives - ngModel
Decorators - Input , Output , Injectable 
Lifecycle hook - onInit
Router 
Api services - CRUD Operation
Emitter 
Asynchronous - Observable , Subscribe 



