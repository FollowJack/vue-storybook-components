export default {
  title: 'Atoms/VideoElement',
}

const defaultArgs = {
  src: "https://www.devparadise.io/videos/laptop_typing.mp4",
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100">
      <VideoElement v-bind="args"/>
    </div>
    `,
})
export const Placeholder = Template.bind({})
Placeholder.args = { ...defaultArgs }
