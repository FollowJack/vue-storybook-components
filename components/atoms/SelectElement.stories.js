import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Select',
  parameters: {
    docs: {
      description: {
        component: `
Select components enable the selection of one out of at least four options provided in a list. Select components are typically used within a form to allow users to make their desired selection from the list of options.
<br />
# Best practices
- Use a select component when users can only make a single selection from the list of possible options.
- Use a select component when there are at least four options available to the user.
- Use the label to provide clear and concise direction on the selection that the user is required to make.
- Use a hint to provide the user with additional, contextual guidance.
- Where it makes sense, order the select list based on the importance and/or frequency of list item interaction.
- Where the above does not make sense, list the possible options in a rational order that makes logical sense. Alphabetically is often the best approach.
- Do not use a select component when it's important that all available options are visible to the user. Instead, use the Radio Button component.
- Do not use a select component when presenting just two options in a list. Instead, use the Radio Button component.
- Do not use a select component when users can select more than one option. Instead, use the Checkbox component.
<br />

# Use cases
- Selecting an item from a list.
`
      }
    }
  },
  argTypes: {
    id: {
      description: "The unique identifier",
      control: {
        type: 'text',
      },
    },
  },
}

const actionsData = {
  onClick: action('update:value'),
}

const defaultArgs = {
  id: null,
  options: [{
    value: 1,
    content: 'Vue.js',
  }, {
    value: 2,
    content: 'Nuxt.js',
  }, {
    value: 3,
    content: 'TailwindCSS',
  },],
  selectedValue: {},
  disabled: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="w-40">
      <SelectElement v-bind="args" @update:value="onClick" />
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
