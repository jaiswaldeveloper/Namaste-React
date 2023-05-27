
import React from "react"
import ReactDOM  from "react-dom/client";

{/* <div id="parent">
    <div id="child">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h1>
    </div>
    <div id="child2">
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h1>
    </div>
</div> */}
// React.createElement(object)=>html(browser understand);


//nested Html tags and Siblings tags
    const parent = React.createElement("div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"hello i m h1 tag"),
    React.createElement("h2",{},"hello i m h2 tag")
]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h3",{},"hello i m h3 tag"),
    React.createElement("h4",{},"hello i m h4 tag")
    ])
    ]
);



    //single tag how to create

// const heading = React.createElement("h1", 
// {
//     id:"mysections", className:"myclass"
// } ,"Hello World From React!");
// root.render(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);