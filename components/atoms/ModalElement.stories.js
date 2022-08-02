export default {
  title: 'Atoms/ModalElement',
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
    <div class="bg-blue-100 h-screen w-screen">
      <ButtonElement variant="primary" @click.native='() => isVisible=true'>Open Modal</ButtonElement>
      <ModalElement v-if="isVisible" v-bind="args" classModal='p-2 bg-white' @close="isVisible=false">
        <h1>{{args.default}}</h1>
      </ModalElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
