export default {
  title: 'Atoms/Container',
}

const defaultArgs = {
  as: 'div'
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100">
      Outside of the container. No margin on the horizontal if the screen is desktop.
      <ContainerElement v-bind="args" class="bg-primary">
        Inside the container. Horizontal space if the screen is desktop.
      </ContainerElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
