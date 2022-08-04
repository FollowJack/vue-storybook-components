import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/DropdownElement',
  argTypes: {
    variant: {
      options: [
        '', 'primary', 'secondary', 'outline', 'ghost', 'danger',
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
  isDefaultOpen: false,
  id: ''
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <DropdownElement v-bind="args" @toggle="onToggle" @click:item="onClick">
        <template #content="{ handleClickItem }">
          <DropdownListItemElement
              @click:item="handleClickItem"
              value="1"
              >Dashboard</DropdownListItemElement>
          <DropdownListItemElement
              @click:item="handleClickItem"
              value="2"
              >Settings</DropdownListItemElement>
          <DropdownListItemElement
              @click:item="handleClickItem"
              value="3"
              >Earnings</DropdownListItemElement>
          <DropdownListItemElement
              disabled
              @click:item="handleClickItem"
              >Sign out</DropdownListItemElement>
        </template>
      </DropdownElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
