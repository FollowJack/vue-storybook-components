import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/CardMetricElement',
  parameters: {
    docs: {
      description: {
        component: `
Card with kpi
`
      }
    }
  },
}

const actionsData = {
  onClick: action('click:stat'),
}

const defaultArgs = {
  percent: 2.1,
  top: "83.249€",
  bottom: "Sales",
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
      <CardMetricElement v-bind="args" @click:stat="onClick" class="lg:w-1/2">
        <template #icon>
          <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M68.4 192A20.38 20.38 0 0048 212.2a17.87 17.87 0 00.8 5.5L100.5 400a40.46 40.46 0 0039.1 29.5h232.8a40.88 40.88 0 0039.3-29.5l51.7-182.3.6-5.5a20.38 20.38 0 00-20.4-20.2H68.4zm193.32 160.07A42.07 42.07 0 11304 310a42.27 42.27 0 01-42.28 42.07z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M160 192l96-128 96 128"/></svg>
        </template>
      </CardMetricElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
