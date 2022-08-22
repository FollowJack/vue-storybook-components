import { action } from '@storybook/addon-actions'

const sizes = [
  'small', 'medium', 'large',
]
export default {
  title: 'Atoms/Checkbox',
  argTypes: {
    size: {
      options: sizes,
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onInput: action('input:value'),
}

const defaultArgs = {
  id: "",
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


const TemplateSizes = (args) => ({
  data() {
    return {
      sizes
    }
  },
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <CheckboxElement v-for="size in sizes" :size="size" v-bind="args" @input:value="onInput">
        <span>Click me</span>
      </CheckboxElement>
    </div>
    `,
})
export const Sizes = TemplateSizes.bind({})
Sizes.args = { ...defaultArgs }
