import { Footer } from "@/components/ui/footer";
import Navigation from "@/components/ui/header";

export default function Home() {
  return (
    <div>
      <Navigation></Navigation>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Hello World</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="flex flex-col h-[40%]"></div>
      <Footer></Footer>
    </div>
  );
}
