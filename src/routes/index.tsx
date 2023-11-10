import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://main--startling-daifuku-bb8624.netlify.app/CodimosApp.apk" target="_blank">
          Download codimos
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
