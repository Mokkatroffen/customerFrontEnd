import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Contact info</h1>
    <table>
      <tbody>
        <tr>
          <td>
            <b>Fossekall Teknologi AS</b>
          </td>
          <td />
        </tr>
        <tr>
          <td>Organizational number</td>
          <td>919 378 794</td>
        </tr>
        <tr>
          <td>Billing adress</td>
          <td>Anna Sethnes gate 4 B, 0474 Oslo</td>
        </tr>
        <tr>
          <td>Contact email</td>
          <td>
            <a href="mailto:kontakt@fossekalltek.no">kontakt@fossekalltek.no</a>
          </td>
        </tr>
      </tbody>
    </table>

    <Link to="/">Back to the homepage</Link>
  </Layout>
)

export default SecondPage
