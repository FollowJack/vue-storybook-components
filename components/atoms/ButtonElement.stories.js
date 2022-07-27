import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/ButtonElement',
}

const actionsData = {
  onClick: action('click-button'),
}

const defaultArgs = {
  rounded: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-x-1">
      <ButtonElement v-bind="args"  @click-button="onClick">Click me!</ButtonElement>
      <ButtonElement v-bind="args" rounded="true" @click-button="onClick">Click me!</ButtonElement>
    </div>
    `,
})
export const Primary = Template.bind({})
Primary.args = { ...defaultArgs, primary: true }

export const Secondary = Template.bind({})
Secondary.args = { ...defaultArgs, secondary: true }

export const Outline = Template.bind({})
Outline.args = { ...defaultArgs, outline: true }

export const Ghost = Template.bind({})
Ghost.args = { ...defaultArgs, ghost: true }

export const Danger = Template.bind({})
Danger.args = { ...defaultArgs, danger: true }
