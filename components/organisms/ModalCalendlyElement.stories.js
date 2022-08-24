import { action } from '@storybook/addon-actions'

export default {
  title: 'Organisms/ModalCalendly',
  parameters: {
    docs: {
      // Opt-out of inline rendering
      inlineStories: false,
      iframeHeight: '600px',
      description: {
        component: `
A modal wrapper for calendly. See calendly component for further details.
`
      }
    },
    layout: 'fullscreen'
  },
}

const actionsData = {
  onClick: action('calendly:loaded'),
}

const defaultArgs = {
}

const Template = (args) => ({
  data() {
    return {
      isVisible: true
    }
  },
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 h-screen">
      <ButtonElement variant="primary" @click.native='() => isVisible=true'>Open Modal</ButtonElement>
      <ModalCalendlyElement v-if="isVisible" v-bind="args" @calendly:loaded="onClick" @close="isVisible=false">
      </ModalCalendlyElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
