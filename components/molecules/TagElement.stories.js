import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/TagElement',
  argTypes: {
    size: {
      options: [
        'sm', 'md', 'lg',
      ],
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onClick: action('click:remove'),
}

const defaultArgs = {
  size: "sm",
  isRemovable: true,
  id: '',
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-x-1">
      <TagElement v-bind="args" @click:remove="onClick">
        Vue.js
      </TagElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
