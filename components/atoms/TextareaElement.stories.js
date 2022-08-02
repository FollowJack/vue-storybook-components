export default {
  title: 'Atoms/TextAreaElement',
  argTypes: {
    variant: {
      options: [
        'copy-large',
        'copy-medium',
        'copy-small',
      ],
      control: { type: 'radio' },
    },
    weight: {
      options: [
        'normal',
        'bold',
      ],
      control: { type: 'radio' },
    },
    maxLength: {
      control: { type: 'number' }
    },
    minLength: {
      control: { type: 'number' }
    }
  }
}

const defaultArgs = {
  value: "Dolor sit amet",
  placeholder: "Please enter something",
  variant: "copy-medium",
  name: "",
  weight: 'normal',
  minLength: null,
  maxLength: null,
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100">
      <TextAreaElement v-bind="args"/>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
