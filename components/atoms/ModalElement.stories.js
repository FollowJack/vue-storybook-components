export default {
  title: 'Atoms/Modal',
  parameters: {
    docs: {
      // Opt-out of inline rendering
      inlineStories: false,
      iframeHeight: '400px',
      description: {
        component: `
When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information.
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
      defaultValue: "Click outside the modal to close it.",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
  }
}

const defaultArgs = {}

const Template = (args) => ({
  data() {
    return {
      isVisible: true
    }
  },
  setup() {
    return { args }
  },
  template:
    `
    <div class="h-screen w-screen">
      <ButtonElement variant="primary" @click.native='() => isVisible=true'>Open Modal</ButtonElement>
      <ModalElement v-if="isVisible" v-bind="args" classModal='p-2 bg-white' @close="isVisible=false">
        <h1>{{args.default}}</h1>
      </ModalElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
