export default {
  title: 'Atoms/TextareaElement',
}

const defaultArgs = {
  value: "Dolor sit amet",
  placeholder: "Please enter something",
  name: "",
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="bg-blue-100">
      <TextareaElement v-bind="args"/>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
