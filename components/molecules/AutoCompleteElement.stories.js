import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/AutoComplete',
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
  }
}

const actionsData = {
  onClick: action('select:item'),
}

const defaultArgs = {
  availableItems: [{
    name: 'Vue',
  }, {
    name: 'React',
  }, {
    name: 'Nuxt',
  }],
  selectedValues: [
    { name: 'Nuxt' }
  ],
  searchValue: ''
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <AutoCompleteElement v-bind="args" @select:item="onClick" class="w-96">
      </AutoCompleteElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
