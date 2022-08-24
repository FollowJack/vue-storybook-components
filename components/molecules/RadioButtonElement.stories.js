import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/RadioButton',
  parameters: {
    docs: {
      description: {
        component: `
Radio buttons enable the selection of one out of at least two options provided in a list. Activation of a radio button therefore rules out the activation of other radio buttons of the same group. Each radio button has a label slot.

# Best practices
- Use a radio button when users can only make a single selection from the list of possible options.
- Use a radio button when there are at least two options available to the user.
- Use a radio button when it's important that all available options are visible to the user. Use the Select component if this is not the case.
- Use a radio button alongside a clear and concise label.
- List the possible options in a rational order that makes logical sense.
- Users cannot go back to having no option selected once a choice has been made, without refreshing their browser window. Therefore, include ‘None of the above’ or ‘I do not know’ (if they are valid options) to improve user experience.
- Do not use a radio button when users can select more than one option. Instead, use the Checkbox component.
- Do not use a radio button when a long list of options are available to the user. Instead, use the Select component.


# Use cases
- Selecting between different, mutually exclusive packages.
- Selecting a preferred option from a list of options.
- Selecting a preferred communication channel.
`
      }
    }
  },
}

const actionsData = {
  onClick: action('update:value'),
}

const defaultArgs = {
  name: "",
  valuePicked: '',
  id: "",
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-y-1 inline-flex flex-col">
      <RadioButtonElement v-bind="args" id="1" value="1" name="form-radio" @update:value="onClick">
        Vue.js
      </RadioButtonElement>
      <RadioButtonElement v-bind="args" id="2" value="2" name="form-radio" @update:value="onClick">
        Nuxt.js
      </RadioButtonElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
