import React from "react";

const Basics = () => (
  <div>
    <h1>Breeze Basics</h1>
    <h2>Overview</h2>
    <p>
      Breeze is Plaza's Loan Origination System. The software was origionally
      built by developers at Integra as a native desktop application. It is
      currently enhanced and maintained by developers at Plaza and Integra.
      Plaza has two versions of the software, one for clients and one for
      internal use. These are the same software but show different screens for
      different uses.
    </p>
    <h2>Deployment</h2>
    <p>
      Integra controls the root of the Breeze application and we develop on top
      of that at Plaza. In order for our changes to not be erased by Integra's
      bi-weekly updates we have to send our code changes to Integra. Our updates
      are sent out by weekly by the Plaza App Developers. Currently Sunitha
      Kasibalta and Jeff Mckeown are your best points of contact for deployement
      help and Breeze source control.
    </p>
    <h2>Typography</h2>

    <p>
      Breeze uses Nunito Sans for a base font. Nunito Sans is an open-source
      font available from Google.
    </p>
    <p>
      It is included at the top of <b>site.css</b> as{" "}
      <code>
        @import
        url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700');
      </code>{" "}
    </p>
    <p>
      Different weights of the fonts are used in different components. The
      weight can be controled in the CSS like <code>font-weight: bold</code>
    </p>
  </div>
);

export default Basics;
