import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/NavItemElement',
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
  link: "#",
  isActive: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-x-1">
      <NavItemElement v-bind="args" @click:nav="onClick">
        {{args.default}}
      </NavItemElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
