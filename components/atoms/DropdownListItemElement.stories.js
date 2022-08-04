import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/DropdownListItemElement',
}

const actionsData = {
  onClick: action('click:item'),
}

const defaultArgs = {
  value: '',
  disabled: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <DropdownListItemElement v-bind="args" @click:item="onClick">
        Content of the Element.
      </DropdownListItemElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
