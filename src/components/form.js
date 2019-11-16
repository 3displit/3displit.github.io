import React from "react"
import formStyles from "./form.module.css"
export default ({ children }) => (
  <div className={formStyles.form}>{children}</div>
)