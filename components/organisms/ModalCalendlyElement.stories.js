import { action } from '@storybook/addon-actions'

export default {
  title: 'Organisms/ModalCalendlyElement',
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
