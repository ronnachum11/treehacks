import Globe from "@/components/globe";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-16 pt-8">
      <div className="flex flex-col gap-8 items-center max-w-4xl">
        <div className="flex flex-col gap-3 items-center">
          <div className="text-7xl font-black">Synthesis</div>
          <div className="text-2xl font-bold text-slate-600">
            The Truly-Everything News Platform.
          </div>
        </div>
        <Image
          src="world.svg"
          width="500"
          height="50"
          // className="w-full max-w-2xl"
          alt="Landing page"
        />
        <Link href="/news/15db7a48-eaca-42b8-b3f9-1e11cef77792" passHref>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            Jump into the synthesis
          </button>
        </Link>
        <div className="flex flex-col gap-8">
          <div className="text-2xl font-semibold justify-center flex">
            Enjoy your news on your own terms.
          </div>
          <div className="flex flex-row gap-8">
            <div className="rounded-lg border p-4 flex flex-row gap-4">
              <div className="flex flex-col gap-2">
                <div className="font-bold text-lg">Get the facts quickly.</div>
                <div>
                  Read the news at your own pace. Like something? Swipe right.
                  Need something explained? Get the answer quickly with the help
                  of our chat model.
                </div>
              </div>
              <Image
                src="phone.svg"
                width="60"
                height="60"
                alt="Phone"
                className="w-24"
              />
            </div>
            <div className="rounded-lg border p-4 flex flex-row gap-4">
              <div className="flex flex-col gap-2">
                <div className="font-bold text-lg">Avoid Misinformation.</div>
                <div>
                  Our AI agent is trained to curate in-demand content for you in
                  a reliable, unpolarized manner. Don't be fooled by fake news
                  anymore.
                </div>
              </div>
              <Image
                src="warn.svg"
                width="60"
                height="60"
                alt="Phone"
                className="w-24"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
