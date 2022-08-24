import { action } from '@storybook/addon-actions'

export default {
  title: 'Organisms/Calendly',
  parameters: {
    docs: {
      description: {
        component: `
Calendly can be used to schedule calendar events.

docu: https://calendly.com/

plugin: https://www.npmjs.com/package/vue-calendly
`
      }
    }
  },
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
      <CalendlyElement v-bind="args" class="h-30" @calendly:loaded="onClick" />
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
