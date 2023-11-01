import { h } from "preact";

import MainLayout from "../layout/main";

const Home = (
  <MainLayout title="Home">
    <h1>Home</h1>
    <p>This is the home page.</p>
    <ul hx-get="/get-time" hx-swap="beforeend">
      <li>Timestamps</li>
    </ul>
  </MainLayout>
);
export default Home;
