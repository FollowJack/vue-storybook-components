import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/ToggleElement',
}

const actionsData = {
  onClick: action('update:value'),
}

const defaultArgs = {
  isOn: true,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-x-1">
      <ToggleElement v-bind="args" @update:value="onClick" />
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
