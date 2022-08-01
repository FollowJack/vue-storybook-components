import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/ButtonElement',
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
        '', 'primary', 'secondary', 'outline', 'ghost', 'danger',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: [
        '', 'sm', 'md', 'lg',
      ],
      control: { type: 'radio' },
    },
  },
}

const actionsData = {
  onClick: action('click-button'),
}

const defaultArgs = {
  variant: 'primary',
  size: 'sm',
  rounded: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <div class="space-x-1">
        <ButtonElement v-bind="args" @click-button="onClick">{{args.default}}</ButtonElement>
      </div>
    </div>
    `,
})
export const Primary = Template.bind({})
Primary.args = { ...defaultArgs, variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { ...defaultArgs, variant: 'secondary' }

export const Outline = Template.bind({})
Outline.args = { ...defaultArgs, variant: 'outline' }

export const Ghost = Template.bind({})
Ghost.args = { ...defaultArgs, variant: 'ghost' }

export const Danger = Template.bind({})
Danger.args = { ...defaultArgs, variant: 'danger' }

