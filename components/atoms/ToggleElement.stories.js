import { action } from '@storybook/addon-actions'

const sizes = [
  'small', 'medium', 'large',
]

export default {
  title: 'Atoms/Toggle',
  parameters: {
    docs: {
      description: {
        component: `
Toggles are used to allow the user to switch between two different states, typically on or off. The feature or option that the toggle controls should be communicated to the user through the use of the toggle’s label.
<br/>

# Best practices
- Toggles should only be used for options with opposing states. In most cases, this is on or off.
- Toggles should be used to turn on or off a preference, notification, or feature.
- Toggles should be used when an instant response is required / desired.
- Toggles can be used to trigger both an immediate change or a background change that is not initially apparent to the user.
- Toggles should not require a review or confirmation following a change.
- Toggles must be accompanied by a clear, concise, and consistent label.
- The label should not change, regardless of the state selected.
- Do not use a toggle when requiring user consent (i.e. accepting terms and conditions). Instead, use a Checkbox.
<br/>

# Use cases
- Use a toggle for preferences (e.g. enabling app analytics tracking)
- Use a toggle for user-defined notifications (e.g. notifications enabled)
- Use a toggle for enabling or disabling specific features (e.g. show markers)

`
      }
    }
  },
  argTypes: {
    size: {
      options: sizes,
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onClick: action('update:value'),
}

const defaultArgs = {
  isInitialOn: false,
  value: '',
  id: null,
  name: null,
  disabled: false,
  size: 'large',
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <ToggleElement v-bind="args" @update:value="onClick">
      <TextElement variant="span">Toggle me</TextElement>
    </ToggleElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }

const sizesArgs = {
  isInitialOn: false,
  value: '',
  id: null,
  name: null,
  disabled: false,
}

const TemplateSizes = (args) => ({
  data() {
    return { sizes }
  },
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="space-y-4 bg-blue-100">
      <ToggleElement v-for="size in sizes" :key="size" :size="size" v-bind="args" @update:value="onClick">
        <TextElement variant="span">Size: {{size}}</TextElement>
      </ToggleElement>
    </div>
    `,
})
export const Sizes = TemplateSizes.bind({})
Sizes.args = { ...sizesArgs }
