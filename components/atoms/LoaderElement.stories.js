export default {
  title: 'Atoms/LoaderElement',
}

const defaultArgs = {
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100">
      <LoaderElement v-bind="args"/>
    </div>
    `,
})
export const Placeholder = Template.bind({})
Placeholder.args = { ...defaultArgs }
