import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/AvatarGroup',
  argTypes: {}
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
