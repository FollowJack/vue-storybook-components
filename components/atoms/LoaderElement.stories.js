export default {
  title: 'Atoms/LoaderElement',
  argTypes: {
    size: {
      options: [
        'sm', 'md', 'lg',
      ],
      control: { type: 'radio' },
    },
  },
}

const defaultArgs = {
  size: 'sm'
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100">
      <LoaderElement v-bind="args"/>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
