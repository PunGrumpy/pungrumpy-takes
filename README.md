# PunGrumpy's curated list of the photos

A curated list of the photos I take, built with Astro and Tailwind CSS

https://pun-grumpy-takes.vercel.app/

## Stack

- [Astro](https://astro.build/) - Static Website Framework
- [Tailwind CSS](https://tailwindui.com/) - CSS Framework
- [React](https://reactjs.org/) - Component-based UI framework for JS
- [Headless UI](https://headlessui.com/) - Unstyled interactive components
- [React Icons](https://react-icons.github.io/react-icons/) - Icon set

## Installation

```bash
# Clone the repository
git clone https://github.com/PunGrumpy/PunGrumpy-Takes.git
```

### Local Development

```bash
# Install dependencies
yarn install

# Start the development server
yarn dev
```

### Docker

#### Docker Build & Run

```bash
# Build the image
docker build -f Dockerfile.dev -t pungrumpy-takes .

# Run the container
docker run -it -p 3000:3000 pungrumpy-takes:latest

```

#### Docker Compose

```bash
# Docker Compose
docker-compose -f docker-compose-dev.yml up
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
PROJECT_ROOT
├── public              # static assets
│   └── posts           # images of posts
├── src
│   ├── components      # Astro & React components
│   │   └── icons
│   ├── layouts         # page layouts
│   ├── pages           # page files
│   │   └── posts       # .md files
│   └── styles          # global stylesheets
└── .astro              # Astro config file
```

## Tracking the project progress

![Alt](https://repobeats.axiom.co/api/embed/146c8a4de244698a29dfb39a509314ef7d55c744.svg 'Repobeats analytics image')

## License

MIT License.

You can create your own homepage for free without notifying me by forking this project under the following conditions:

- Delete my blog content and assets

---
