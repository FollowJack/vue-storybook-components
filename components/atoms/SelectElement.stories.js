import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/SelectElement',
}

const actionsData = {
  onClick: action('update:value'),
}

const defaultArgs = {
  id: 'form-select',
  options: [{
    value: 1,
    content: 'Vue.js',
  }, {
    value: 2,
    content: 'Nuxt.js',
  }, {
    value: 3,
    content: 'TailwindCSS',
  },],
  selectedValue: {},
  disabled: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <SelectElement v-bind="args" @update:value="onClick" />
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
