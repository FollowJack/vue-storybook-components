import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/SearchInput',
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
    <div class="bg-blue-100 space-x-1">
      <SearchInputElement v-bind="args"
        @select:item="handleSelect"
        @blur:input="handleBlur"
        @focus:input="handleFocus"
        @input:value="handleInput"
      >
        <template
      </SearchInput>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
