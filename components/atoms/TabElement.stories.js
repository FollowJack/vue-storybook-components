import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Tab',
  parameters: {
    docs: {
      description: {
        component: `
Use the tabs component when a set of related content would benefit from being split between different views that the user can navigate through to digest the information.
They are used in conjunction with TabGroupElement to group further subsections.
        `,
      },
    },
  },
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
    <TabElement v-bind="args" @update:selected="onClick">Tab 1</TabElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
