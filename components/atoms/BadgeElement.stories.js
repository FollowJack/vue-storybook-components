import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/BadgeElement',
  argTypes: {
    default: {
      description: "The default Vue slot",
      control: {
        type: 'text',
      },
      defaultValue: "Click me",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
    variant: {
      options: [
        'primary', 'secondary', 'success', 'danger'
      ],
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onClick: action('click:badge'),
}

const defaultArgs = {
  variant: "danger"
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <BadgeElement v-bind="args" @click:badge="onClick">
        {{args.default}}
      </BadgeElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
