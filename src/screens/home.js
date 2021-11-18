import React from 'react'

export const Home = () =>{
  return (
    <body class="">
      <h1 class="d-flex justify-content-center">Collection of JavaScript Projects</h1>
      <div class="justify-content-center d-flex">
        <p>
          This website was made using the <a href="#">React</a> framework, with the intention of hosting several different JavaScript Projects
        </p>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-1">
            <a class="btn btn-primary" href="https://jacksonpeters.dev/projects" target="blank">Portfolio Site</a>
          </div>
          <div class="col-2">
            <a class="btn btn-primary" href="https://github.com/Jpete170/react-portfolio-app" target="blank">GitHub Repository</a>
          </div>
        </div>
      </div>
      <br />
      <div class="container">
        <p>Each project will have it's own tab on this site, which can be seen under the title.</p>
        <p>The decision to host JavaScript projects in one project was to prevent the GitHub Repository from becoming cluttered, and easier to host & show on Vercel.</p>
      </div>
    </body>
  );
    
}