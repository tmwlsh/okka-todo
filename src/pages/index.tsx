import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/container";
import TodoContainer from "@/components/todoContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Container width="small">
        <TodoContainer />
      </Container>
    </main>
  );
}
