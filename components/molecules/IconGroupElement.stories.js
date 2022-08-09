export default {
  title: 'Molecules/IconGroupElement',
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
    <div class="bg-blue-100 space-x-1">
      <IconGroupElement/>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
