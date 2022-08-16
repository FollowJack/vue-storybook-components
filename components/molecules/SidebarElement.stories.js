import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/Sidebar',
  argTypes: {
    default: {
      description: "The default Vue slot",
      control: {
        type: 'text',
      },
      defaultValue: "Content of modal",
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
    <div class="bg-blue-100 h-screen w-screen">
      <ButtonElement variant="primary" @click.native='() => isVisible=true'>Open Sidebar</ButtonElement>
      <SidebarElement v-if="isVisible" v-bind="args" @close:sidebar="isVisible=false">
        <div class="h-full w-full">{{args.default}}</div>
      </SidebarElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
