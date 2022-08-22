export default {
  title: 'Atoms/TextInput',
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
    id: {
      description: "The unique identifier",
      control: {
        type: 'text',
      },
    },
    name: {
      description: "The name of the control, which is submitted with the form data",
      control: {
        type: 'text',
      },
    },
    value: {
      description: "The value of the control, which is submitted with the form data",
      control: {
        type: 'text',
      },
    }
  }

}

const defaultArgs = {
  value: '',
  type: 'text',
  placeholder: 'Write inside me',
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
    <TextInputElement v-bind="args" />
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
