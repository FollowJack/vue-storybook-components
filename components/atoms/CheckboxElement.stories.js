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
    <CheckboxElement v-bind="args" @input:value="onInput">
      <TextElement color="primary">Click me</TextElement>
    </CheckboxElement>
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
    <div class="flex flex-col space-y-4">
      <CheckboxElement v-for="size in sizes" :size="size" :key="size" v-bind="args" @input:value="onInput">
        <span>Size: {{size}}</span>
      </CheckboxElement>
    </div>
    `,
})
export const Sizes = TemplateSizes.bind({})
Sizes.args = { ...defaultArgs }
