export default {
  title: 'Atoms/BackdropElement',
}

const defaultArgs = {
  isTransparent: false,
  isScrollLockEnabled: false,
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100 ">
      <div class="h-screen">try to scroll down when scroll lock is enabled.</div>
      Hidden.
      <BackdropElement v-bind="args" >
      </BackdropElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
