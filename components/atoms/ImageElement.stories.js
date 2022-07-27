export default {
  title: 'Atoms/ImageElement',
}

const defaultArgs = {
  src: "https://via.placeholder.com/300",
  height: "",
  width: "",
  alt: "",
  loading: ""
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100">
      <ImageElement v-bind="args"/>
    </div>
    `,
})
export const Placeholder = Template.bind({})
Placeholder.args = { ...defaultArgs }
