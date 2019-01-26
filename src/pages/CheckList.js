import React from "react";

const CheckList = () => (
  <div>
    <h2>Check List for New PHM Devs</h2>
    <h4>Welcome to Plaza Home Mortgage IT Department!</h4>
    <p>
      In order to get started contributing code there are a few things you'll
      want to make sure you have a grasp of. Ask around to people in IT until
      you figure out the following:
    </p>
    <ol>
      <li>
        Overview of inside.plazahomemortgage.com, plazahomemortgage.com, and
        Breeze client and external portals. Find out about how all these
        sites/webapps relate, what they do differently and who uses and develops
        on which platform.
      </li>
      <li>
        Find out about the various databases. Plaza uses multiple databases so
        that development and reporting can happen without jeopordizing the main
        database. Depending on what you are working on and in what enviroment,
        you will be accessing different databases. Find out what UAT, Dev, and
        PROD are and when you would want to use each.
      </li>
      <li>
        Your Dev enviroment. Find out how you will get into the code bases. Ask
        for help until you know exactly how to login to Citrix and how to RDP
        into a Dev workstation that has the code you will be working on. Don't
        feel dumb for asking simple stuff like how to navigate Plaza's systems.
      </li>
      <li>
        Ask about the company shared folders and how to access files and folders
        across Plaza's network.
      </li>
      <li>
        Find out about source control. How will you be contributing code to a
        project once it is tested and approved. How will you revert this code if
        it breaks in production?
      </li>
    </ol>
  </div>
);

export default CheckList;
