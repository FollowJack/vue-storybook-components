export default {
  title: 'Atoms/VideoElement',
}

const defaultArgs = {
  src: "https://www.devparadise.io/videos/laptop_typing.mp4",
  autoplay: true,
  muted: true,
  loop: true,
  controls: false,
  type: 'video/mp4',
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
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
