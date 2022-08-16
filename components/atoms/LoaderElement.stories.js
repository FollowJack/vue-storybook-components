export default {
  title: 'Atoms/Loader',
  argTypes: {
    size: {
      options: [
        'small', 'medium', 'large',
      ],
      control: { type: 'radio' },
    },
  },
}

const defaultArgs = {
  size: 'small'
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
