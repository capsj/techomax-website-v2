/** @type {import("next").NextConfig} */
const nextConfig = {
  // The pages are files, not routes. beforeFiles runs ahead of Next's own
  // routing, so a request for /about is answered by the copy of /about
  // rather than by the placeholder page.
  async rewrites() {
    return {
      beforeFiles: [
              {
                      "source": "/",
                      "destination": "/index.html"
              },
              {
                      "source": "/servicios",
                      "destination": "/servicios/index.html"
              },
              {
                      "source": "/servicios/",
                      "destination": "/servicios/index.html"
              },
              {
                      "source": "/proyectos",
                      "destination": "/proyectos/index.html"
              },
              {
                      "source": "/proyectos/",
                      "destination": "/proyectos/index.html"
              }
      ],
    }
  },
}

export default nextConfig
