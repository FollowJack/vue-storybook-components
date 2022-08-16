import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/RadioButton',
}

const actionsData = {
  onClick: action('update:value'),
}

const defaultArgs = {
  name: "",
  valuePicked: '',
  id: "",
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-y-1 flex flex-col">
      <RadioButtonElement v-bind="args" id="1" value="1" name="form-radio" @update:value="onClick">
        Vue.js
      </RadioButtonElement>
      <RadioButtonElement v-bind="args" id="2" value="2" name="form-radio" @update:value="onClick">
        Nuxt.js
      </RadioButtonElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
