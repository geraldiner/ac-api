import Image from 'next/image';

export default function AdminHome() {
  return (
    <main>
      <section className="w-full bg-gray-100">
        <div className="w-full md:max-w-4xl mx-auto p-5 md:py-10">
          <h1>Admin Home</h1>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full md:max-w-4xl mx-auto p-5 md:py-10">
          <div className="grid grid-cols-1 gap-10">
            <div>
              <h2>Audio Test</h2>
              <audio controls>
                <source
                  src="/api/v2/blobs/audio/song/aloha_kk.mp3"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div>
              <h2>Image Test</h2>
              <div className="relative w-60 h-60">
                <Image
                  fill={true}
                  src="/api/v2/blobs/images/bug/atlas_moth.png"
                  alt="ACNH Atlas Moth"
                />
              </div>
            </div>
            <div>
              <h2>Icon Test</h2>
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
    </main>
  );
}
