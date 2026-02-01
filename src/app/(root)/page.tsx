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
