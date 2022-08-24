export default {
  title: 'Molecules/IconGroup',
  parameters: {
    docs: {
      description: {
        component: `
Group of social icons like facebook, linkedIn and others. You can copy and adapt as you like.
`
      }
    },
  },
}

const actionsData = {
}

const defaultArgs = {
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="space-x-1">
      <IconGroupElement/>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
