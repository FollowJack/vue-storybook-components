export default {
  title: 'Pages/Portfolio',
  argTypes: {
  },
  parameters: {
    docs: {
      // Opt-out of inline rendering
      inlineStories: false,
      iframeHeight: '500px',
    },
    layout: 'fullscreen'
  }
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
      <Portfolio/>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
