export default {
  title: 'Atoms/InputElement',
}

const defaultArgs = {
  value: '',
  type: 'text',
  name: 'input',
  placeholder: 'Type me',
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100 space-x-1">
      <InputElement v-bind="args" />
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
