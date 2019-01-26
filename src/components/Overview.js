import React from "react";
import ColorChip from "./ColorChip";
const colors = [
  {
    name: "Plaza Aqua",
    code: "#00B097",
    id: 1
  },
  {
    name: "Plaza Green",
    code: "#81BC00",
    id: 2
  },
  {
    name: "Plaza Gray",
    code: "#707271",
    id: 3
  }
];
const highlights = [
  {
    name: "Plaza Teal",
    code: "#004C43",
    id: 6
  },
  {
    name: "Plaza Orange",
    code: "#FFA200",
    id: 6
  }
];
const Overview = () => (
  <div>
    <h1>Overview</h1>

    <p>
      This documentation is meant to help Plaza Home Mortgage developers working
      on the 2019 rebranded Breeze LOS system adn the 2019 rebanded
      www.plazahomemortgage.com.
    </p>
    <p>
      This guide contain exampls, code snippets, documentation, and style
      guidelines.
    </p>

    <h2>Color</h2>
    <div>
      <h3>Primary</h3>
      <div class="f-color-chips">
        {colors.map(color => (
          <ColorChip {...color} />
        ))}
      </div>
      <h3>Secondary</h3>
      <p>
        These colors are used more sparingly than the primary colors.
        Specifically Plaza Orange should be used only once on a page to
        highlight the most important action on that page. The call to action
        buttons on www.plazahomemortgage.com are an example of this.
      </p>
      <div class="f-color-chips">
        {highlights.map(color => (
          <ColorChip {...color} />
        ))}
      </div>
    </div>
  </div>
);
export default Overview;
