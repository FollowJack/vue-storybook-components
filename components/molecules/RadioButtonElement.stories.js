import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/RadioButtonElement',
}

const actionsData = {
  onClick: action('click:remove'),
}

const defaultArgs = {
  size: "small",
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-y-1 flex flex-col">
      <RadioButtonElement v-bind="args" name="form-radio" @click:remove="onClick">
        Vue.js
      </RadioButtonElement>
      <RadioButtonElement v-bind="args" name="form-radio" @click:remove="onClick">
        Nuxt.js
      </RadioButtonElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
