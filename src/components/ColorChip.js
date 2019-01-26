import React from "react";

function ColorChip(color) {
  return (
    <div
      class="f-color-chip"
      style={{ borderTopColor: color.code, borderBottomColor: color.code }}
    >
      <div class="f-color-chip__name">{color.name}</div>
      <div class="f-color-chip__color">{color.code}</div>
    </div>
  );
}

export default ColorChip;
