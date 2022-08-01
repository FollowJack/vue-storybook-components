import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/TabsElement',
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
      <TabsElement v-bind="args" @click:remove="onClick">
        Vue.js
      </TabsElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
