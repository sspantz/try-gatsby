import React from "react"
export default ({ children }) => (
  <div
    style={{
      color: `teal`,
      margin: `3rem auto`,
      maxWidth: 700,
      padding: `0 1rem`,
    }}
  >
    <h3>MySweetSite</h3>
    {children}
  </div>
)
