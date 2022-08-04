export default {
  title: 'Atoms/TextInputElement',
  argTypes: {
    type: {
      options: [
        'text', 'email', 'number', 'password', 'tel', 'url', ''
      ],
      control: { type: 'radio' },
    },
    maxlength: {
      control: { type: 'number' },
    },
    minlength: {
      control: { type: 'number' },
    },
    pattern: {
      control: { type: 'text' },
    },
  }

}

const defaultArgs = {
  value: '',
  type: 'text',
  name: 'input',
  placeholder: 'Type me',
  disabled: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  required: false,
  pattern: '',
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100 space-x-1">
      <TextInputElement v-bind="args" />
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
