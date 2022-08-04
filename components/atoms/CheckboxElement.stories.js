import { action } from '@storybook/addon-actions'
export default {
  title: 'Atoms/CheckboxElement',
  argTypes: {
    size: {
      options: [
        'small', 'medium', 'large',
      ],
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onInput: action('input:value'),
}

const defaultArgs = {
  id: "form-checkbox-element",
  isInitialChecked: false,
  value: "",
  size: "large",
  name: '',
  disabled: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <CheckboxElement v-bind="args" @input:value="onInput">
        <span>Click me</span>
      </CheckboxElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
