export default {
  title: 'Atoms/Loader',
  argTypes: {
    size: {
      options: [
        'small', 'medium', 'large',
      ],
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Loaders inform the user of loading or computing processes being carried out by the system. The progress can either be displayed with specific details or communicated as undefined by means of a repeated animation.
`
      }
    }
  },
}

const defaultArgs = {
  size: 'small'
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <LoaderElement v-bind="args"/>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }

const TemplateSizes = (args) => ({
  setup() {
    return { args }
  },
  template:
    `
    <div class="space-x-4 flex">
      <LoaderElement size="small"/>
      <LoaderElement size="medium"/>
      <LoaderElement size="large"/>
    </div>
    `,
})
export const Sizes = TemplateSizes.bind({})
Sizes.args = { ...defaultArgs }

