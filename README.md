# PunGrumpy's Curated List of Photos 📸

A curated list of the photos I take, built with Astro and Tailwind CSS.

[View the project](https://takes.pungrumpy.com/)

## Stack 🛠️

- [Astro](https://astro.build/) - Static Website Framework 🌐
- [Tailwind CSS](https://tailwindui.com/) - CSS Framework 🎨
- [React](https://reactjs.org/) - Component-based UI framework for JavaScript ⚛️
- [Headless UI](https://headlessui.com/) - Unstyled interactive components 🧩
- [React Icons](https://react-icons.github.io/react-icons/) - Icon set 🔣

## Installation 💻

Clone the repository:

```bash
git clone https://github.com/PunGrumpy/pungrumpy-takes.git
```

### Local Development 🌱

Install dependencies and start the development server:

```bash
# Install dependencies
yarn install

# Start the development server
yarn dev
```

### Docker 🐳

#### Docker Build & Run 🛠️

Build the Docker image and run the container:

```bash
# Build the image
docker build -f Dockerfile.dev -t pungrumpy-takes .

# Run the container
docker run -it -p 3000:3000 pungrumpy-takes:latest
```

#### Docker Compose 🛠️

Use Docker Compose to build and run the project:

```bash
# Docker Compose
docker-compose -f docker-compose-dev.yml up
```

## Project Structure 📂

Inside your Astro project, you'll see the following folders and files:

```
PROJECT_ROOT
├── public              # Static assets
│   └── posts           # Images of posts
├── src
│   ├── components      # Astro & React components
│   │   └── icons
│   ├── layouts         # Page layouts
│   ├── pages           # Page files
│   │   └── posts       # Markdown (.md) files
│   └── styles          # Global stylesheets
└── .astro              # Astro config file
```

## Tracking the Project Progress 📈

![Repobeats analytics image](https://repobeats.axiom.co/api/embed/146c8a4de244698a29dfb39a509314ef7d55c744.svg)

## License 📜

MIT License.

---

You can create your own homepage for free by forking this project under the following conditions:

- Delete my blog content and assets.
