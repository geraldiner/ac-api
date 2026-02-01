import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="w-full bg-gray-100">
        <div className="w-full md:max-w-4xl mx-auto p-5 md:py-10">
          <h1>Welcome to the Animal Crossing API by Geraldine</h1>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full md:max-w-4xl mx-auto p-5 md:py-10">
          <p>
            This is a RESTful API that provides data for the video game Animal
            Crossing. Stay tuned for more!
          </p>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full md:max-w-4xl mx-auto p-5 md:py-10">
          <div className="grid grid-cols-1 gap-10">
            <div className="grid grid-cols-1 gap-5">
              <h2>An Audio Blob</h2>
              <code>
                https:/ac-api.netlify.app/api/v2/blobs/audio/song/aloha_kk.mp3
              </code>
              <audio controls>
                <source
                  src="/api/v2/blobs/audio/song/aloha_kk.mp3"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <h2>Image Test</h2>
              <code>
                https:/ac-api.netlify.app/api/v2/blobs/images/bug/atlas_moth.png
              </code>
              <div className="relative w-60 h-60">
                <Image
                  fill={true}
                  src="/api/v2/blobs/images/bug/atlas_moth.png"
                  alt="ACNH Atlas Moth"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <h2>Icon Test</h2>
              <code>
                https:/ac-api.netlify.app/api/v2/blobs/icons/bug/atlas_moth.png
              </code>
              <div className="relative w-16 h-16">
                <Image
                  fill={true}
                  objectFit="contain"
                  src="/api/v2/blobs/icons/bug/atlas_moth.png"
                  alt="ACNH Atlas Moth icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full md:max-w-4xl mx-auto p-5 md:py-10">
          <h2>Roadmap</h2>
          <ul className="list-disc ml-5">
            <li>
              Music API: Routes for accessing K.K. Slider songs and hourly BGM
              across the series (ie. New Horizons, New Leaf, City Folk, Game
              Cube)
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
