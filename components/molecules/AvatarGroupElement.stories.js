import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/AvatarGroup',
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
}

const actionsData = {
  onClick: action('click:avatar-group'),
}

const defaultArgs = {}

const Template = (args) => ({
  data() {
    return {
      urlImage: 'https://www.devparadise.io/_vercel/image?url=/team/team-1.webp&w=1536&q=100'
    }
  },
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
    <AvatarGroupElement v-bind="args" click:avatar-group="onClick">
      <AvatarElement :urlImage="urlImage" />
      <AvatarElement> SE </AvatarElement>
      <AvatarElement :urlImage="urlImage" />
      <AvatarElement :urlImage="urlImage" />
      <AvatarElement> XY </AvatarElement>
      </AvatarGroupElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
