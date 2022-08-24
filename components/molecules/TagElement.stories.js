import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/Tag',
  parameters: {
    docs: {
      description: {
        component: `
Tags are labels that contain small amounts of information that can be used in conjunction with each other to add context to other information on a page.
Unlike a badge, they are not used to convey information that requires immediate attention and are not directly associated with another component.
They often contain keywords that relate to another item, such as search results.

# Best practices
- Tags are used to visually label UI objects for quick recognition and navigation.
- Tags increase the amount of visual noise, particularly when combined with other visual labelling elements, so try to use them in moderation.
- Tags are designed to be displayed within a Tag Group.
- Don't use tags to display critical, urgent information to a user.
- When possible, keep UI related to adding/editing tags in close proximity to a tag group.
`
      }
    }
  },
  argTypes: {
    size: {
      options: [
        'small', 'medium', 'large',
      ],
      control: { type: 'radio' },
    },
    id: {
      description: "The unique identifier",
      control: {
        type: 'text',
      },
    },
  }
}

const actionsData = {
  onClick: action('click:remove'),
}

const defaultArgs = {
  size: "small",
  isRemovable: true,
  id: null,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <TagElement v-bind="args" @click:remove="onClick">
      Vue.js
    </TagElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }


const sizeArgs = {
  isRemovable: true,
  id: null,
}

const TemplateSizes = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="space-x-1">
      <TagElement size="small" v-bind="args" @click:remove="onClick">
      small
      </TagElement>
      <TagElement size="medium" v-bind="args" @click:remove="onClick">
      medium
      </TagElement>
      <TagElement size="large" v-bind="args" @click:remove="onClick">
      large
      </TagElement>
    </div>
    `,
})
export const Sizes = TemplateSizes.bind({})
Sizes.args = { ...sizeArgs }
