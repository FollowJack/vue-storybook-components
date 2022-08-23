import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/Avatar',
  parameters: {
    docs: {
      description: {
        component: `
Avatar components are visual representations of a user or entity. They can contain either characters on a neutral background, or an image, typically set by the user.

Typically they will be used to represent an individual account holder or internal tool user.

# Best practices
- Always include a user's initials when available.
- Where possible, make the avatar selectable and take the user to a profile page if applicable.
- The number of user initials displayed is left up to the implementer, ensure consistency across all instances where you use the components.
- If using in conjunction with badges, ensure consistency in placement for each use case (e.g. presence indicator / notifications).
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
      defaultValue: "DE",
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
    <AvatarElement v-bind="args" @click:avatar="onClick">
      {{args.default}}
    </AvatarElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }

const sizeArgs = {
  urlImage: 'https://www.devparadise.io/_vercel/image?url=/team/team-1.webp&w=1536&q=100',
}

const TemplateSizes = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="flex space-x-4">
      <AvatarElement v-bind="args" size="small" @click:avatar="onClick">
        {{args.default}}
      </AvatarElement>
      <AvatarElement v-bind="args" size="medium" @click:avatar="onClick">
        {{args.default}}
      </AvatarElement>
      <AvatarElement v-bind="args" size="large" @click:avatar="onClick">
        {{args.default}}
      </AvatarElement>
    </div>
    `,
})
export const Sizes = TemplateSizes.bind({})
Sizes.args = { ...sizeArgs }
