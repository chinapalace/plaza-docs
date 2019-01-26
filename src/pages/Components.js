import React from "react";
import screenGrab from "../assets/Untitled.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
const codeString1 = `
<div class="main">
    <div class="content-row">
        <div class="divider aqua square">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.48 52.43">
                <title>cropped-logo</title>
                <path d="M19.86.81l.27.09a15.19,15.19,0,0,1,8.15,8.2,15.08,15.08,0,0,1,.43,9.75A24.8,24.8,0,0,1,31.21,21a23.79,23.79,0,0,0-2.56-2.14,23.73,23.73,0,0,0-5.3-3.06,24.25,24.25,0,0,0-8.94-1.79,24.37,24.37,0,0,0-8.93,1.72,22.77,22.77,0,0,0-4.12,2.16A26.15,26.15,0,0,0,0,26.22a26.43,26.43,0,0,0,1.3,8.14,23.74,23.74,0,0,0,4.21,2.2,24,24,0,0,0,8.93,1.79,24,24,0,0,0,8.94-1.73,23.22,23.22,0,0,0,5.27-3c-.13-.49-.3-1-.47-1.49a14.48,14.48,0,0,1,.47,1.49,15.14,15.14,0,0,1,.57,4.13,15.59,15.59,0,0,1-1.1,5.64,15.23,15.23,0,0,1-8.21,8.13l-.16.06a26.49,26.49,0,0,0,6.47.83h7L53.06,32.72h0l6.42-6.24-6.25-6.43L33.32,0h-7.1A26.14,26.14,0,0,0,19.86.81ZM20,28.4a15,15,0,0,1-5.58,1,15.18,15.18,0,0,1-5.57-1.09,14.56,14.56,0,0,1-3.71-2.22A15,15,0,0,1,8.87,24a15.76,15.76,0,0,1,5.59-1.06A15.39,15.39,0,0,1,20,24a15.22,15.22,0,0,1,3.69,2.22A14.83,14.83,0,0,1,20,28.4Zm15.88-3.56a24.23,24.23,0,0,0,2.15-7.45l8.82,9L38,35.25a23.91,23.91,0,0,0-2.08-7.52c-.23-.48-.48-.94-.73-1.4C35.41,25.85,35.68,25.37,35.92,24.84Z" fill="#fff" />
            </svg>

            <span>what's new
            </span>
            <%--  <div class="arrow aqua"><a href="#">more</a></div>--%>
        </div>
        <div class="flex-row">
            <div class="content-item">
                <div class="content-item-date">01.17.19</div>

                <div class="content-item-header">New Assignment of Trade</div>

                <div class="content-item-body">
                    <%= NewsPost.ShortDescription %>
                   Unwind with Plaza! Plaza now offers Assignment of Trade (AOT) through our Mandatory trade desk. Talk to your Plaza Account Executive for details!
                   
                </div>
            </div>
            <div class="vl"></div>
            <div class="content-item">
                <div class="content-item-date">12.7.18</div>
                <a target="_blank" rel="noopener" href="http://marketing.plazahomemortgage.com/acton/fs/blocks/showLandingPage/a/8441/p/p-0081/t/page/fm/0">
                    <div class="content-item-header">Send Disclosures within BREEZE</div>
                </a>
                <div class="content-item-body">
                    <%= NewsPost.ShortDescription %>
                    Get your loans on the fast track by initiating and sending a disclosure package right at the point-of-sale within BREEZE
                    <a target="_blank" rel="noopener" href="http://marketing.plazahomemortgage.com/acton/fs/blocks/showLandingPage/a/8441/p/p-0081/t/page/fm/0">...Read more</a>
                </div>
            </div>
            <div class="vl"></div>

            <div class="content-item">
                <div class="content-item-date">12.7.18</div>
                <a target="_blank" rel="noopener" href="http://marketing.plazahomemortgage.com/acton/fs/blocks/showLandingPage/a/8441/p/p-0083/t/page/fm/0">
                    <div class="content-item-header">Our new “Look”</div>
                </a>
                <div class="content-item-body">
                    <%= NewsPost.ShortDescription %>
                    Acclaimed designer, Tim Girvin, discusses the thinking behind Plaza Home Mortgage’s new corporate identity
                    <a target="_blank" rel="noopener" href="http://marketing.plazahomemortgage.com/acton/fs/blocks/showLandingPage/a/8441/p/p-0083/t/page/fm/0">...Read more</a>
                </div>
            </div>
        </div>
    </div>    
        `;
const codeString2 = ` <path d="M131.06,25.38a15.08,15.08,0,0,1,14,9.27A15.17,15.17,0,0,1,121.58,
52.4v8.06h-5.69V40.55a15.18,15.18,0,0,1,9.27-14A14.94,14.94,0,0,1,131.06,25.38Zm0,24.65a9.3,9.3,0,0,0,6.71-2.78,10,10,0,0,0,
2-3,9.66,9.66,0,0,0,0-7.39,10,10,0,0,0-2-3,9.55,9.55,0,0,0-10.41-2.05,9.7,9.7,0,
0,0-5,5.06,9.49,9.49,0,0,0,5,12.44,9.42,9.42,0,0,0,3.7.76Z" fill="#00ad98" />`;
const codeString3 = `    <div id="nav-overlay">
<div class="overlay-wrapper">
    <ul>

        <li>
            <a href="/becomeabroker/">
                <div>wholesale</div>
            </a>
        </li>
        <li>
            <a href="/minicorrespondent/">
                <div>mini-correspondent</div>
            </a>
        </li>
        <li>
            <a href="/correspondentlending/">
                <div>correspondent</div>
            </a>
        </li>
        <li>
            <a href="/reverse/">
                <div>reverse</div>
            </a>
        </li>
        <li>
            <a href="/aboutus/">
                <div>about us</div>
            </a>
        </li>

        <li>
            <a href="/contactus/">
                <div>contact us</div>
            </a>
        </li>

    </ul>
</div>`;
const codeString4 = ` function SearchLoan() {

    if (validateForm() == 1) {
        $('#search-form').hide();
        $('#loadingmessage').show();
        $.ajax({
            type: "POST",
            url: "Default.aspx/SearchLoan",
            data: {some data}
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnSuccess,
            error: OnFailure
        });
    } else {
        console.log("error")
    }

}`;
const codeString5 = ` function OnSuccess(response) {
    console.log(response);
    if (response != null) {
        response = JSON.parse(response.d)
        responseObj = response;
        console.log(response);

        const responses = { loanNum, BorrowerLastname, propaddress, loanSSN } = response;


        document.getElementById('response-lastname').innerHTML = responses.BorrowerLastname + '';
        document.getElementById('response-loannum').innerHTML = responses.loanNum + '';
        document.getElementById('response-ssn').innerHTML = responses.loanSSN + '';
        document.getElementById('response-address').innerHTML = responses.propaddress + '';
        servicerOption = responses.servicerOption;
        $('#loadingmessage').hide();
        $("#results").show();



    } else {
        console.log(response)
    }
}
function OnFailure(xhr, httpStatusMessage, customErrorMessage) {
    console.log(xhr, httpStatusMessage, customErrorMessage)
    const root = document.getElementById("results");
    $('#loadingmessage').hide();
    root.innerHTML = "<strong>Sorry, we cannot locate your loan in our system.<br />Please double check to make sure that you have the right Loan number or SSN and Zip Code.<br />If you still cannot locate your information please call us at 877-801-2445.</strong>";
    $('#results').show();
}`;
const Components = () => (
  <div>
    <h1>Components</h1>
    <h2>Overview</h2>
    <p>
      This page contains code and explanation for different components of the
      site.
    </p>
    <h3>SVG Images</h3>
    <p>
      The site uses SVG images for various items like the like logos icons.
      These are rendered inline in the aspx. The code looks like this:
    </p>
    <SyntaxHighlighter language="aspnet" style={prism}>
      {codeString2}
    </SyntaxHighlighter>

    <h3>Nav/ Mobile Nav</h3>
    <p>
      The regular Nav for the site is located in App_Pages/ReBrand.master in the
      "nav-bar" class.{" "}
    </p>
    <p>
      The markup for the mobile nav is located at the bottom of the page and is
      hidden by CSS unless the screen size is under a certain amount. The code
      looks like this:
    </p>
    <SyntaxHighlighter language="aspnet" style={prism}>
      {codeString3}
    </SyntaxHighlighter>
    <h3>Basic Page with Headers</h3>
    <p>
      These styles are used to apply basic styling around pages. If you apply
      these styles to new pages they should automatically render properly on
      mobile screens{" "}
    </p>

    <SyntaxHighlighter language="aspnet" style={prism}>
      {codeString1}
    </SyntaxHighlighter>
    <h3>Customer Service Page/ Borrower Loan Information Tool</h3>
    <p>
      The Borrower Loan Info tool makes an ajax request to activate a webmethod
      written in the VB CodeFIle{" "}
    </p>
    <h3>Ajax Request</h3>
    <SyntaxHighlighter language="javascript" style={prism}>
      {codeString4}
    </SyntaxHighlighter>
    <p>
      The VB WebMethod searches the Database and passes back a json response.
      This response triggers either a succes or failure callback function in the
      client side javascript here. These success function will render out
      different html on the page depending on the response.
    </p>
    <SyntaxHighlighter language="javascript" style={prism}>
      {codeString5}
    </SyntaxHighlighter>
  </div>
);

export default Components;
