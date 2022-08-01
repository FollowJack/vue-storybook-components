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
  disabled: false,
  maxlength: null,
  minlength: null,
  placeholder: 'Type me',
  pattern: null,
  readonly: false,
  required: false,
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
