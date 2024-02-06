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


//JSON Server and delete implemntation 

instead of mock data.ts we download package called json Server
created a Service folder with Post service 
using concepts like Observable , HttpClient 
in posts.ts imported Postservice and make that to send data to cards
in post-comp writed function for delete using Postservice 