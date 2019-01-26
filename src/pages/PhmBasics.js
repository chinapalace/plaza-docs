import React from "react";

const PhmBasics = () => (
  <div>
    <h1>Basics</h1>
    <h2>Overview</h2>
    <p>
      www.plazahomemortgage.com is Plaza's client facing website as opposed to
      inside.plazahomemortgage.com which is used by Plaza associates to preform
      various functions and communicate within the company. They are refered to
      as the 'external' and 'interal' sites respectively.
      inside.plazahomemortgage.com is also called the 'intranet' or 'MyPlaza'.
    </p>
    <p>
      The external site is built on asp.net and includes pre-login pages, which
      mostly serve as marketing content or information for prospective clients,
      and the post-login pages which provide more functionality for existing
      clients and brokers.{" "}
    </p>
    <p>
      The site is mobile responsive through the use of Flexbox and media
      queries.
    </p>
    <p>
      There is also a development version of the site at
      dev.plazahomemortgage.com{" "}
      <b>
        Any development on the site needs to happen here first, tested, and then
        copied over to the live site
      </b>
    </p>
    <h2>Login</h2>
    <p>
      You can login to the external site with various broker logins that use
      "plaza" as the username and different passwords
      <br />
      Try the following to login to the Jacsonville house account:
      <br />
      Username: plaza
      <br />
      Password: jax
    </p>
    <h2>File Structure</h2>
    <p>The file structure is straightforward:</p>
    <p>
      Individual pages on the site have folders at the root of the project that
      are named after the url the page is served from. For example
      www.plazahomemortgage.com/customerservice/ is in the CustomerService
      folder{" "}
    </p>
    <p>
      Pages will have an aspx file with the markup code for the page. The aspx
      file will reference a MasterPageFile and a CodeFile at the top. The
      MasterPageFile is a template that is used across various pages to include
      things like the nav bar. The CodeFile contains VB code that runs on our
      servers and is used to do things like connect to the databases.{" "}
    </p>
    <p>MasterPageFile's are found in the App_Pages folder.</p>
    <p>
      The "Data Layer" of the site, which is primarily used to read and
      manipulate data from our databases, is housed in the App_Code folder.
    </p>
    <h3>Assets</h3>
    <p>
      Assets such as css, images and sass files are located in the Assets
      folder. The newest images on the site are in img/Rebrand.
    </p>
    <h4>SASS</h4>
    <p>
      The dev site was rebranded using SASS. The sass source files are located
      in Assets/sass. To prevent confusion I've disabled these files from
      compiling diretly into the main site.css file. You can control the
      location of where they compile to in <code>compilerconfig.json</code> at
      the root of the project.{" "}
    </p>
  </div>
);

export default PhmBasics;
