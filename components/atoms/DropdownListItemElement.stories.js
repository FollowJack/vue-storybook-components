import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/DropdownListItem',
  parameters: {
    docs: {
      description: {
        component: `
DropdownListItem holds clickable information. They are used in conjunction with DropdownElement to go for further subsections or options to choose.
        `,
      },
    },
  },
}

const actionsData = {
  onClick: action('click:item'),
}

const defaultArgs = {
  value: null,
  disabled: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <DropdownListItemElement v-bind="args" @click:item="onClick">
        Hover over me. See DropdownListElement for a complete example.
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
