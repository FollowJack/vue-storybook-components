export default {
  title: 'Atoms/ImageElement',
  argTypes: {
    loading: {
      options: [
        'eager', 'lazy'
      ],
      control: { type: 'radio' },
    },
  }
}

const defaultArgs = {
  src: "https://via.placeholder.com/300",
  alt: "",
  loading: "eager"
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
