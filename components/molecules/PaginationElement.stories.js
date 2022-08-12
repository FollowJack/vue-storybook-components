import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/PaginationElement',
  argTypes: {
  }
}

const actionsData = {
  onClick: action('click:pagination'),
}

const defaultArgs = {
  totalPages: 10,
  currentPage: 4,
  maxVisibleButtons: 3,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-x-1">
      <PaginationElement v-bind="args" @click:pagination="onClick">
        {{args.default}}
      </PaginationElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
