import { action } from '@storybook/addon-actions'

export default {
  title: 'Organisms/Calendly',
}

const actionsData = {
  onClick: action('calendly:loaded')
}

const defaultArgs = {
  url: 'https://calendly.com/webclan'
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 h-screen">
      <CalendlyElement v-bind="args" @calendly:loaded="onClick">
      </CalendlyElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
