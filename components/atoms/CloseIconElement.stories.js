import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/CloseIcon',
}

const actionsData = {
  onClick: action('click:close'),
}

const defaultArgs = {
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <CloseIconElement v-bind="args" @click:close="onClick" class="text-font-gray" />
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
