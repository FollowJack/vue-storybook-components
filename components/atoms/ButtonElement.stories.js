import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Button',
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
        '', 'primary', 'secondary', 'ghost', 'danger'
      ],
      control: { type: 'radio' },
    },
    size: {
      options: [
        '', 'small', 'medium', 'large',
      ],
      control: { type: 'radio' },
    },
    type: {
      options: [
        'button', 'submit', 'reset',
      ],
      control: { type: 'radio' },
    },
  },
}

const actionsData = {
  onClick: action('click:button'),
}

const defaultArgs = {
  variant: 'primary',
  size: 'small',
  rounded: true,
  ariaLabel: '',
  type: 'button',
  id: '',
  disabled: false,
  name: '',
  value: '',
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <ButtonElement v-bind="args" @click:button="onClick">{{args.default}}</ButtonElement>
    </div>
    `,
})
export const Primary = Template.bind({})
Primary.args = { ...defaultArgs, variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { ...defaultArgs, variant: 'secondary' }

export const Ghost = Template.bind({})
Ghost.args = { ...defaultArgs, variant: 'ghost' }

export const Danger = Template.bind({})
Danger.args = { ...defaultArgs, variant: 'danger' }

