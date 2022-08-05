import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/AvatarElement',
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
    size: {
      options: [
        'large', 'medium', 'small'
      ],
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onClick: action('click:item'),
  onToggle: action('toggle'),
}

const defaultArgs = {
  size: 'large',
  urlImage: 'https://www.devparadise.io/_vercel/image?url=/team/team-1.webp&w=1536&q=100',
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <AvatarElement v-bind="args" @click:avatar="onClick">
        {{args.default}}
      </AvatarElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
