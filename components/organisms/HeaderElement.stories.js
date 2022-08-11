export default {
  title: 'Organisms/HeaderElement',
}

const actionsData = {
}

const defaultArgs = {
  isStatic: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 h-screen">
      <div class="bg-white border">
        <HeaderElement v-bind="args" class="bg-white border-stroke-gray">
          <template #navigation="{ handleSelect }" v-bind="args">
            <NavItemElement @click:nav="handleSelect"link="#">Projects</NavItemElement>
            <NavItemElement @click:nav="handleSelect"link="#">Get in contact</NavItemElement>
          </template>
          <template #cta="{ handleCtaClick }" v-bind="args">
            <ButtonElement class="w-full lg:w-auto" size="medium" variant="primary" @click:button="handleCtaClick">Let's start</ButtonElement>
          </template>
        </HeaderElement>
      </div>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }