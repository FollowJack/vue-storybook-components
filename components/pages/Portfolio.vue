<template>
  <div class="bg-black">
    <header class="flex flex-col h-screen">
      <HeaderElement
        is-static
        class="bg-black"
        @click:cta="handleCalendlyVisibiliy(true)"
      >
        <template #navigation="{ handleSelect }">
          <NavItemElement
            href="#projects"
            class="lg:text-white"
            @click:nav="handleSelect"
            >PROJECTS</NavItemElement
          >
        </template>
        <template #cta="{ handleCtaClick }">
          <ButtonElement
            class="w-full lg:w-auto font-bold"
            variant="primary"
            size="medium"
            @click:button="handleCtaClick"
            >LET'S START 🚀</ButtonElement
          >
        </template>
      </HeaderElement>
      <HeroElement class="mt-20 px-4 xl:px-0 flex-1">
        <template #left>
          <TextElement as="h3" variant="copy-large" color="white"
            >Hello I'm</TextElement
          >
          <TextElement as="h1" variant="headline1" color="white"
            >Deniel Horvatic</TextElement
          >
          <TextElement as="h3" variant="copy-large" color="white" class="mb-10">
            <i fill="currentColor">
              <svg
                fill="none"
                class="text-primary mb-2 mr-1 inline-flex"
                height="22"
                width="22"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 10 20 15 15 20"></polyline>
                <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
              </svg> </i
            >Senior Frontend Engineer</TextElement
          >
          <TextElement
            as="h3"
            variant="copy-medium"
            color="white"
            class="mb-6 lg:mb-10"
            >Hello I'm I am a highly motivated and conscientious developer
            finding pleasure in contributing to life changing applications and
            services. Faced and conquered countless technological challenges.
            Ready to help you with your problems.</TextElement
          >
          <ButtonElement
            variant="primary"
            class="w-fit"
            size="large"
            @click:button="handleDownloadCV"
            >Download CV
          </ButtonElement>
        </template>
        <template #right>
          <ImageElement class="self-center" :src="urlProfile" />
        </template>
        <template #bottom>
          <IconGroupElement class="pb-4" />
        </template>
      </HeroElement>
    </header>
    <ContainerElement
      id="projects"
      as="main"
      class="px-4 xl:px-0 py-10 lg:pb-16 lg:pt-20"
    >
      <TextElement
        as="h3"
        variant="headline3"
        color="white"
        class="mb-2 lg:mb-8"
        >Projects</TextElement
      >
      <TextElement
        as="h3"
        variant="copy-medium"
        color="white"
        class="mb-6 lg:mb-10"
        >Need some insights? Here are some of my latest projects.</TextElement
      >
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
      >
        <CardPortfolioElement
          v-for="(project, index) in projects"
          :key="index"
          :url-image="project.urlImage"
          :alt="project.alt"
          class="md:h-full"
          @click:card="handleGoToUrl(project.linkUrl)"
        >
          <template #title>{{ project.category }}</template>
          <template #content>{{ project.content }}</template>
        </CardPortfolioElement>
      </div>
    </ContainerElement>
    <ModalCalendlyElement
      v-if="isCalendlyVisible"
      @close="handleCalendlyVisibiliy(false)"
    />
    <FooterElement
      class="px-4 xl:px-0 pt-10 lg:pt-16 pb-10 lg:pb-20 bg-[#1d1f25]"
    >
      <template #left>
        <div class="mb-2 lg:mb-0">
          <TextElement as="p" variant="copy-medium" color="white" class="mb-1">
            So, do we work together?
          </TextElement>
          <LinkElement
            class="block animate-bounce"
            href="tel:+49 17699111575"
            target="_blank"
            ><TextElement
              as="p"
              variant="headline3"
              color="primary"
              weight="bold"
            >
              LET'S TALK!
            </TextElement>
          </LinkElement>
        </div>
      </template>
      <template #right>
        <div>
          <TextElement as="p" variant="copy-medium" color="white" class="mb-2">
            Connect via:
          </TextElement>
          <IconGroupElement />
        </div>
      </template>
      <template #bottom>
        <div
          class="flex flex-col lg:flex-row lg:justify-between mt-10 lg:mt-16"
        >
          <div class="flex items-center">
            <TextElement as="p" variant="copy-small" color="white" class="mr-1"
              >Built &amp; designed with</TextElement
            >
            <i fill="currentColor" class="text-red-500">
              <svg
                fill="currentColor"
                height="14"
                width="14"
                viewBox="0 0 1792 1792"
              >
                <path
                  d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
                ></path>
              </svg>
            </i>
          </div>
          <div class="flex items-center space-x-2">
            <TextElement variant="copy-small" color="white"
              >© 2022 All rights reserved.
            </TextElement>
            <LinkElement href="https://devparadise.io">
              <TextElement as="span" variant="copy-small" color="white">
                DevParadise
              </TextElement>
            </LinkElement>
          </div>
        </div>
      </template>
    </FooterElement>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import urlProfile from 'static/images/profile.webp'
import urlProject1 from 'static/images/project1.webp'
import urlProject2 from 'static/images/project2.webp'
import urlProject3 from 'static/images/project3.webp'
import urlProject4 from 'static/images/project4.webp'
import urlProject5 from 'static/images/project5.webp'
import urlProject6 from 'static/images/project6.webp'
const projects = [
  {
    linkUrl: 'https://vue-storybook-components.vercel.app/',
    urlImage: urlProject1,
    alt: 'Project 1',
    category: 'Component Library',
    content: 'Public storybook library that accelerates your development',
  },
  {
    linkUrl: 'https://getyourguide.com',
    urlImage: urlProject2,
    alt: 'Project 2',
    category: 'E-Commerce',
    content:
      'UI Migration from PHP to Vue.js while facing millions of clients daily',
  },
  {
    linkUrl: 'https://dentalxr.ai',
    urlImage: urlProject3,
    alt: 'Project 3',
    category: 'Portal',
    content: 'Portal for AI Assisted dentistry solution',
  },
  {
    linkUrl: 'https://wiegandautomobile.de',
    urlImage: urlProject4,
    alt: 'Project 4',
    category: 'Migration',
    content: 'Landing Page for car dealer with React.js (Next.js)',
  },
  {
    linkUrl: 'https://bcgdv.com',
    urlImage: urlProject5,
    alt: 'Project 5',
    category: 'Dashboard',
    content: 'Corona Dashboard MVP for fortune 500 companies.',
  },
  {
    linkUrl: 'https://wikinger-reisen.de',
    urlImage: urlProject6,
    alt: 'Project 6',
    category: 'Migration',
    content: 'Legacy Migration of landing page builder to React.js ',
  },
]

const isCalendlyVisible = ref(false)

function handleGoToUrl(url) {
  window.open(url, '_blank')
}

function handleCalendlyVisibiliy(isOpen) {
  isCalendlyVisible.value = isOpen
}

function handleDownloadCV() {
  const urlCv =
    'https://drive.google.com/file/d/1pK9CSBgbojGmm8M4X5bRD3a4dGoXQRSp/view?usp=sharing'
  window.open(urlCv)
}
</script>
