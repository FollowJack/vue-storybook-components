export default {
  title: 'Atoms/ContainerElement',
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
      Outside of the container
      <ContainerElement v-bind="args" class="bg-blue-900">
        Inside the container
      </ContainerElement>
    </div>
    `,
})
export const Placeholder = Template.bind({})
Placeholder.args = { ...defaultArgs }
