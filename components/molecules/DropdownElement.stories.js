import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/Dropdown',
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: '300px',
      description: {
        component: `
Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.
By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.

# Use cases
- When there are more than a few options to choose from, you can wrap them in a Dropdown.
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
      defaultValue: "Dropdown",
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
    <DropdownElement v-bind="args" @toggle="onToggle" @click:item="onClick">
      <template>{{args.default}}</template>
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
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
