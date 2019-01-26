import React from "react";
import screenGrab from "../assets/Untitled.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
const codeString1 = `<asp:Accordion ID="BorrowerInformationWebPanel" runat="Server" SelectedIndex="0" HeaderCssClass="AccordianCssStyle" HeaderSelectedCssClass="AccordianSelectedCssStyle"
  Width="100%" CssClass="AccordionStyle" AutoSize="None" FadeTransitions="false"
  TransitionDuration="250" FramesPerSecond="40" RequireOpenedPane="false" SuppressHeaderPostbacks="true">
      <Panes>
        <asp:AccordionPane ID="BorrowerInformationWebPanelAccordionPane" runat="server">
              <Header>
                <asp:Label ID="BorrowerInfoLabel" Text="Borrower Information" runat="server" ClientIDMode="Static"></asp:Label>
              </Header>
              <Content>

              </Content>
        </asp:AccordionPane>
    </Panes>
</asp:Accordion>
        `;

const CommonIssues = () => (
  <div>
    <h1>Common Issues</h1>
    <h2>Overview</h2>
    <p>
      This page contains previous issues encourted when developing for Breeze
      and how to do with them.
    </p>
    <h3>Custom Scripts Not Working/ Being Overwritten</h3>
    <p>
      If you are you trying to write a function to override some of Integra's
      code and it isn't working, or is only working sometimes...
    </p>
    <p>
      Most likely the original Integra function is being saved somewhere, for
      example on the window Object, before it is overwritten. Later Breeze is
      calling this original function
    </p>
    <p>
      This happened with <code>ResizeContentArea</code> in default.js because
      the function was being assigned to the window object like this{" "}
      <code>window.onresize = ResizeContentArea</code>
    </p>
    <p>
      To solve this - make sure to override any instance of the original
      function in your new code. For example the new version of
      ResizeContentArea starts like this:
      <br />
      <code>
        ResizeContentArea: function ResizeContentArea(eventArgs, selectedIndex)
        {" {"}
        <br />
        window.onresize = ResizeContentArea <br />
        {" }"}
      </code>
    </p>
    <h3>CSS Layout not Working</h3>
    <p>
      If you are writing CSS, particularily for layout, and they are not having
      their desired effect ...
    </p>
    <p>
      Much of the styling in Breeze is detirmed in JavaScript files, not CSS.
      The general style rules for height and width are defined in default.js.
      Individual pages also do this. For example Pipeline.js determines the
      height of the Pipeline page that you see when you first login.
    </p>
    <p>
      To update styles defined in JavaScript you have to overide the JS with
      custom scripts. This is discussed further <a href="/how-to"> here</a>
    </p>
    <h3>Weird Borders/ Lack of padding around page</h3>
    <p>
      Some pages don't have well defined padding and borders and end up looking
      sloppy:
    </p>
    <img src={screenGrab} />
    <p>
      There is no easy solution with just CSS because the wrapper{" "}
      <code>div</code> for the entire page and the wrapper <code>div</code> for
      the inner individual pages have the same class and ID. This problem can
      very easily be solved if you have access to change the markup for the
      page.
    </p>
    <p>
      The easiest thing to do is take advantage of the CSS and Javascript rules
      already written for the accordian sliders on several existing pages. If
      you wrap any page in the markup for the sliders, the borders and padding
      should look much better.
    </p>
    <p>
      <b>
        You can find the markup for the sliders on the Plaza Loan Summary page
        and any of the URLA/Application pages
      </b>
      <p>
        C:\inetpub\wwwroot\EpicPortal\Custom\PHM\LoanSummary\LoanSummary.aspx
      </p>
    </p>
    <p>The code looks like this: </p>

    <SyntaxHighlighter language="aspnet" style={prism}>
      {codeString1}
    </SyntaxHighlighter>
  </div>
);

export default CommonIssues;
