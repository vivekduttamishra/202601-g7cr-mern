
import ReactDOM from 'react-dom/client'



//JSX
let Heading =<h1>Hello, React World</h1>

let Body = <div>
                <h2>Welcome To Home Page</h2>
                <a href='https://react.dev' target='_blank'>
                    Learn More!
                </a>
           </div>

let Footer=<div>&copy; https://dev.vnc.in </div>


//Get Access To Real DOM
let root = document.querySelector("#root")

let app = <div>
            <Heading/>
            <hr/>
            
            <Body/>
            <Footer/>
          </div>


//let app=React.createElement('div', null, heading,body,footer)





//html text not jsx
//root.innerHTML=`<h1>Hello Plain Text</h1>`

let reactRoot = ReactDOM.createRoot(root);
reactRoot.render(app);



