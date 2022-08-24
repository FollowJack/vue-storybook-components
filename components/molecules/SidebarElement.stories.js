import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/Sidebar',
  parameters: {
    docs: {
      // Opt-out of inline rendering
      inlineStories: false,
      iframeHeight: '400px',
      description: {
        component: `
Otherwise known as off-canvas or a side drawer, sidebar is a fixed-position toggleable slide out box, which can be used for navigation, menus, details, etc.
It is positioned on the right of the viewport, with backdrop support.
`
      }
    },
    layout: 'fullscreen'
  },
  argTypes: {
    default: {
      description: "The default Vue slot",
      control: {
        type: 'text',
      },
      defaultValue: "Click on the x icon or outside the sidebar to close it.",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
  }
}

const actionsData = {
  onClick: action('close:sidebar'),
}

const defaultArgs = {}

const Template = (args) => ({
  data() {
    return {
      isVisible: false
    }
  },
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="flex items-center justify-center h-screen w-screen ">
      <ButtonElement variant="primary" @click.native='() => isVisible=true'>Open Sidebar</ButtonElement>
      <SidebarElement v-if="isVisible" v-bind="args" @close:sidebar="isVisible=false; onClick()">
        <div class="h-full w-full">{{args.default}}</div>
      </SidebarElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
