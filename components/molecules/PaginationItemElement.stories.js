import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/PaginationItemElement',
  argTypes: {
    default: {
      description: "The default Vue slot",
      control: {
        type: 'text',
      },
      defaultValue: "1",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
  }
}

const actionsData = {
  onClick: action('click:item'),
}

const defaultArgs = {
  isActive: false,
  ariaLabel: '',
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-x-1">
      <ul>
        <PaginationItemElement v-bind="args" @click:item="onClick">
        {{args.default}}
        </PaginationItemElement>
      </ul>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
