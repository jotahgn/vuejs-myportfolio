<template>
    
    <div class="main-container">
        <header class="bg-indigo-600">
            <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
              <div class="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
                <div class="flex items-center">
                </div>
                <div class="ml-10 space-x-4">
                  <router-link class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50" to="/">Voltar</router-link>
                </div>
              </div>
            </nav>
          </header>
        <div class="bg-gray-900">
            <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
              <div class="space-y-12">
                <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                  <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meus Projetos</h2>
                  <p class="text-xl text-gray-300">Aqui estão alguns projetos feitos por mim.</p>
                </div>
                <ul role="list" class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
                  <li class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                    <div class="space-y-6 xl:space-y-10">
                      <img class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src="https://i.pinimg.com/originals/0b/eb/4b/0beb4b7b5b70be576778c280270aafb4.gif" alt="" />
                      <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                        <div class="space-y-1 text-lg font-medium leading-6">
                          <h3 class="text-white">Sistema de busca instagram</h3>
                          
                        </div>
                        <button class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50">Acessar</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
    name: "Projetos",
    data() {
    return {
      ano: new Date().getFullYear(),
      navigation: [
      { name: 'Instagram', href: 'https://instagram.com/jotahgn' },
      { name: 'Github', href: 'https://github.com/jotahgn' },
      { name: 'Projetos', href: '' },
    ]
    }
  }
  };
  </script>
  