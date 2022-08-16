import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Tab',
}

const actionsData = {
  onClick: action('update:selected'),
}

const defaultArgs = {
  id: 'tab-1',
  selected: 'tab-2',
  disabled: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <TabElement v-bind="args" @update:selected="onClick">Tab 1</TabElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
