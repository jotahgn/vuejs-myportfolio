<template>
    <div class="main-container">
        <div class="relative overflow-hidden bg-gray-800">
            <div class="hidden sm:absolute sm:inset-0 sm:block" aria-hidden="true">
              <svg class="absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none" width="364" height="384" viewBox="0 0 364 384" fill="none">
                <defs>
                  <pattern id="eab71dd9-9d7a-47bd-8044-256344ee00d0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
              </svg>
            </div>
            <div class="relative pt-6 pb-16 sm:pb-24">
                <nav class="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Global">
                  <div class="flex flex-1 items-center">
                    <div class="flex w-full items-center justify-between md:w-auto">
                      <a href="#">
      
                        <img class="h-8 w-auto sm:h-10" src="https://jotahgn.github.io/assets/img/logo-jota.png" alt="" />
                      </a>
                    </div>
                    <div class="hidden space-x-10 md:ml-10 md:flex">
                      <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-white hover:text-gray-300">{{ item.name }}</a>
                      <router-link class="font-medium text-white hover:text-gray-300" to="/projetos">Projetos</router-link>
                    </div>
                  </div>
                </nav>
        
          
              <main class="mt-16 sm:mt-24">
                <div class="mx-auto max-w-7xl">
                  <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div class="px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                      <div>
                        <h1 class="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Ajudando a construir produtos digitais de forma moderna e de alta qualidade.</h1>
                        <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Meu nome é João Paulo, ou “jota” (é como me chamam agora). Sou freelancer como Back-end developer. Desenvolvo sistemas modernos de alta qualidade, concentrado em performance e modernidade.</p>
                        <p class="mt-8 text-base font-semibold text-white sm:mt-10">Habilidades</p>
                        <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                          <div class="flex flex-wrap items-start justify-between">
                            <div class="flex justify-center px-1">
                              <img class="h-9 sm:h-10" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript" />
                            </div>
                            <div class="flex justify-center px-1">
                              <img class="h-9 sm:h-10" src="https://assets.stickpng.com/images/62a7524a223343fbc2207d08.png" alt="NodeJS" />
                            </div>
                            <div class="flex justify-center px-1">
                              <img class="h-9 sm:h-10" src="https://www.pngrepo.com/png/331488/512/mongodb.png" alt="Mongo" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
                      <div class="sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                        <img class="w-full" src="https://cdn.discordapp.com/attachments/1044724793880105043/1045150033072365578/Elemento_3D_de_Astronauta_no_Foguete_PNG_Transparente.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              
            </div>
          
          </div>
          <section class="overflow-hidden bg-white">
            <div class="relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:py-20">
              <svg class="absolute top-full left-0 translate-x-80 -translate-y-24 transform lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                <defs>
                  <pattern id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="784" height="404" fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
              </svg>
        
              <svg class="absolute right-full top-1/2 hidden translate-x-1/2 -translate-y-1/2 transform lg:block" width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
                <defs>
                  <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
              </svg>
        
              <div class="relative lg:flex lg:items-center">
                <div class="hidden lg:block lg:flex-shrink-0">
                  <img class="h-64 w-64 rounded-full xl:h-80 xl:w-80" src="https://avatars.githubusercontent.com/u/41558475?v=4" alt="" />
                </div>
        
                <div class="relative lg:ml-10">
                  <svg class="absolute top-0 left-0 h-36 w-36 -translate-x-8 -translate-y-24 transform text-indigo-200 opacity-50" stroke="currentColor" fill="none" viewBox="0 0 144 144" aria-hidden="true">
                    <path stroke-width="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z" />
                  </svg>
                  <blockquote class="relative">
                    <div class="text-2xl font-medium leading-9 text-gray-900">
                      <p>Desenvolvedor desde 2019, porém apaixonado por programação desde 2015. Atualmente ocupo uma posição de desenvolvedor back-end trabalhando ativamente com Nodejs.</p>
                    </div>
                    <footer class="mt-8">
                      <div class="flex">
                        <div class="ml-4 lg:ml-0">
                          <div class="text-base font-medium text-gray-900">Jota</div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>
          <footer class="bg-gray-800" aria-labelledby="footer-heading">
            <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div class="mt-1 md:flex md:items-center md:justify-center">
                    <p class="mt-8 text-base text-gray-400 md:order-1 md:mt-0">&copy; {{ano}} jotahgn</p>
                  </div>
            </div>
          </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
    data() {
    return {
      ano: new Date().getFullYear(),
      navigation: [
      { name: 'Instagram', href: 'https://instagram.com/jotahgn' },
      { name: 'Github', href: 'https://github.com/jotahgn' },
    ]
    }
  }
  };
  </script>
  