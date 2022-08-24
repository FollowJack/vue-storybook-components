import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/SearchInput',
  parameters: {
    docs: {
      description: {
        component: `
Search fields allow users to find or filter information based on a specific input entered within the field.

# Best practices
- Use the search label to provide context to the user for their search (e.g. Enter ZIP code for location search).
- Do not use an optional hint unless the search label can not provide enough context and direction for the user.
- Use a navigation bar or tab when directing users to specific content via an organized hierarchy system.

# Use cases
- Search within the site header.
- Search for an code.
- Search for customer information.
- Search for products.
`
      }
    }
  },
  argTypes: {
    maxlength: {
      control: { type: 'number' },
    },
    minlength: {
      control: { type: 'number' },
    },
    pattern: {
      control: { type: 'text' },
    },
  }
}

const actionsData = {
  handleSelect: action('select:item'),
  handleBlur: action('blur:input'),
  handleFocus: action('focus:input'),
  handleInput: action('input:value'),
}



const defaultArgs = {
  value: '',
  type: 'text',
  name: 'input',
  placeholder: 'Type me',
  disabled: false,
  readonly: false,
  maxlength: null,
  minlength: null,
  required: false,
  pattern: '',

  selectedValues: [
    { name: 'Nuxt' }
  ],
  availableItems: [{
    name: 'Vue',
  }, {
    name: 'React',
  }, {
    name: 'Nuxt',
  }],
}

const Template = (args) => ({
  data() {
    return {

    }
  },
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <SearchInputElement v-bind="args"
      @select:item="handleSelect"
      @blur:input="handleBlur"
      @focus:input="handleFocus"
      @input:value="handleInput"
    >
      <template
    </SearchInput>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
