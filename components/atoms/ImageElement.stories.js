export default {
  title: 'Atoms/Image',
  parameters: {
    docs: {
      description: {
        component: `
Image can be used to lazy load the image.
`
      }
    }
  },
  argTypes: {
    loading: {
      options: [
        'eager', 'lazy'
      ],
      control: { type: 'radio' },
    },
    alt: {
      description: "The alt attribute specifies an alternate text for an image, if the image cannot be displayed.",
      control: {
        type: 'text',
      },
    },
  }
}

const defaultArgs = {
  src: "https://via.placeholder.com/300",
  alt: null,
  loading: "eager"
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <ImageElement v-bind="args"/>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
