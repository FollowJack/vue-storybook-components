import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/PaginationItem',
  parameters: {
    docs: {
      description: {
        component: `
PaginationItem is the visible representation which is used in conjunction with pagination.
`
      }
    }
  },
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
      <ul>
        <PaginationItemElement v-bind="args" @click:item="onClick">
        {{args.default}}
        </PaginationItemElement>
      </ul>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
