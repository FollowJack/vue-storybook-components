import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/DropdownElement',
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
    <div class="bg-blue-100 space-x-1">
      <DropdownElement v-bind="args" @update:selected="onClick" />
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
