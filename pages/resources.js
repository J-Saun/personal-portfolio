import Button from "../components/Button/button";
import Navbar from "../modules/nav/navbar";

export default function Resources() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Navbar />
      <h1 className="text-3xl font-bold underline">Resources Page!!!!</h1>
      <Button />
    </div>
  );
}