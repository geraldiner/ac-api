# Animal Crossing API

🚧 **This project is a work in progress.** 🚧

**A lightweight REST API for developers who want to build applications with Animal Crossing game data.

[Live Prototype](https://ac-api.netlify.app)

Once upon a time there was an [Animal Crossing: New Horizons API](https://github.com/alexislours/ACNHAPI) that I built silly little projects with. However, it's since been archived, and my projects are broken. This project is an exploration in building a reusable API and creating a structured collection of game data and media assets, in pursuit of bringing those projects back to life.

For this initial prototype, I focused on music as the first resource to power one of my first projects [Nook Radio](https://github.com/geraldiner/nook-radio) (initially [K.K. Radio](https://github.com/geraldiner/kk-radio)).

## How It's Made

### Next.js & TypeScript

I'm using Next.js to build the API with Route Handlers, as well as an admin portal for managing game data.

Although Next.js is typically associated with building frontend applications, its App Router also provides a way to create REST API endpoints. This lets me keep the API and the admin tools in the same project.

TypeScript provides type safety throughout the application, particularly when working with different resource types and their metadata.

### MongoDB & Mongoose

MongoDB is used to store the metadata for each resource. I'm using Mongoose to define schemas and validate documents before they're saved to the database.

One of my goals is to keep the data model flexible enough to support different types of resources, such as music, villagers, fish, and sea creatures.

I'm also using references between documents to avoid duplicating shared information. For example, hourly background music references a game installment by its key rather than storing the game's full name with every track.

### Netlify Blobs

Netlify Blobs provides object storage for the media assets used by the API, including audio files and images.

I'm keeping media storage separate from MongoDB so that the database only needs to store references to the corresponding assets.

### Clerk

Clerk handles authentication for the admin portal and protects the administrative API routes.

Since the admin portal is currently intended for personal use, I'm keeping access restricted rather than building out a more complicated user management system.

### Testing & Code Quality

I'm using Vitest and React Testing Library for automated tests, with ESLint and Prettier to maintain consistent code quality and formatting.

I've also set up Husky and lint-staged to run checks against staged files before committing. I wanted to establish these practices early rather than introduce them later in development.

## Future Work

This project is still in its early stages, and there's plenty I'd like to explore as it develops!

Some things on my roadmap include:

- Improve the admin portal to make managing metadata and uploading assets easier.
- Create scripts to support bulk uploading and registering game data.
- Implement an authentication and authorization strategy for external developers using the API, including API key management and access controls.
- Build out the REST endpoints for querying individual resources and collections.
- Expand the API beyond music to support other Animal Crossing resources, such as villagers, fish, bugs, fossils, and sea creatures.
- Add API documentation so other developers can easily explore and integrate with the API.
- Deploy the API and make it accessible to other developers.

## 🚀 Other Projects

Check out other stuff I've worked on:

**Min To Win**: https://github.com/geraldiner/min-to-win

**Animal Crossing API**: https://github.com/geraldiner/ac-api

**Reuben Sandwiches**: https://github.com/geraldiner/reuben-sandwiches

## 🤙 Let's connect

- Website: [geraldiner.com](https://geraldiner.com)
- Resume: [Geraldine R](https://geraldiner.com/GeraldineRagsac_Resume.pdf)
- LinkedIn: [in/geraldiner](https://linkedin.com/in/geraldiner)
- Sometimes I write: [@geraldiner](https://geraldiner.hashnode.dev)
- For crochet work: [@geraldinedesu](https://instagram.com/geraldinedesu)
