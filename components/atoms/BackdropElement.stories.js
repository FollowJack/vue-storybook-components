import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Backdrop',
  parameters: {
    docs: {
      // Opt-out of inline rendering
      inlineStories: false,
      iframeHeight: '100px',
    },
    layout: 'fullscreen',
    description: {
      component: `
Backdrop is used for a transparent/black background that can disable scrolling in the background via the composable.
<br/>

## Use cases
1. For modals that require a transparent backdrop. See the modal component.

      `,
    },
  }
}

const actionsData = {
  onClick: action('click:backdrop'),
}

const defaultArgs = {
  isTransparent: false,
  isScrollLockEnabled: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <div class="h-screen">try to scroll down when scroll lock is enabled.</div>
      Hidden.
      <BackdropElement v-bind="args" @click:backdrop="onClick">
      </BackdropElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
