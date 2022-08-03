import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/TabElement',
}

const actionsData = {
  onClick: action('click-button'),
}

const defaultArgs = {
  id: 'tab-1',
  disabled: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <TabElement @update-selected="onClick">Tab 1</TabElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
