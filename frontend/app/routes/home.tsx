import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "../components/navbar/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <section>
        <h1>Welcome to PowerPlan</h1>
        <p>Your fitness journey starts here</p>
      </section>
    </>
  );
}
