import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/NavItem',
  parameters: {
    docs: {
      description: {
        component: `
Navitem is part of the header component.
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
      defaultValue: "Projects",
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
  onClick: action('click:nav'),
}

const defaultArgs = {
  href: "#",
  isActive: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <NavItemElement v-bind="args" @click:nav="onClick">
      {{args.default}}
    </NavItemElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
