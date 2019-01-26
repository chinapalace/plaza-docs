import React from "react";

const HowTo = () => (
  <div>
    <h1>How-To</h1>
    <h2>Login</h2>
    <p>
      To have an account set up in Breeze email{" "}
      <a href="emailto:clientsupport@plazahomemortgage.com">
        clientsupport@plazahomemortgage.com
      </a>{" "}
      and they will set you up with your PHM credentials.
    </p>
    <p>
      <h4>You can also use this test client login:</h4>
      <br />
      Client Id: 165103
      <br />
      Username: admin
      <br />
      Password: Welcome3
    </p>
    <h2>Get Into the Code</h2>
    <p>
      You will need access to a dev box with a local copy of Breeze to do dev
      work on. Currently the best contact to get this set up is Robert Gerardi
      and Deneese Estrada.
    </p>
    <p>
      Once you have a local instance of Breeze you can find can access the root
      of the project here: C:\inetpub\wwwroot\EpicPortal
    </p>
    <h3>File Structure</h3>
    <b>
      Many of the files in Breeze cannot be altered by PHM devs because any
      changes will be overwritten by Integra's updates. We cam change files in
      the App_themes and the Custom folders
    </b>
    <p>
      Changes to styling happen primarily here:
      C:\inetpub\wwwroot\EpicPortal\App_Themes
      <br />
      In App_Themes there is a PHM folder which contains themes for the internal
      version of the app and a PHMBP folder - themes for the client version.
      Unless otherwise noted you should mirror whatever changes you make to one
      portal in the other.
      <br />
      Both folders contain css files. Any of them can be changed by PHM
      developers. The majority of the rebrand happens in site.css. This file is
      huge and unorganized. It is best navigated by searching for specifc id's,
      classes or styles.
    </p>
    <h3>Custom Code </h3>
    <p>
      While we can't change many Integra files, we can write custom JS code that
      will override the Integra code in the client side app. The files for doing
      this exist in C:\inetpub\wwwroot\EpicPortal\Custom
    </p>
    <br />
    <h4>Changing Page Layout(Height + Width)</h4>
    <p>
      An important use case for custom scripts is to overwrite Integra's
      default.js file with our
      C:\inetpub\wwwroot\EpicPortal\Custom\scripts\CustomDefault.js
      <br />
      <br />
      <b>
        Breeze uses Javascript to determine page height. The majority of this
        logic happens in the <code>ResizeContentArea</code> function in
        default.js and overwrriten by the <code>ResizeContentArea</code>{" "}
        function in CustomDefault.js{" "}
      </b>
      <b />
    </p>
  </div>
);

export default HowTo;
