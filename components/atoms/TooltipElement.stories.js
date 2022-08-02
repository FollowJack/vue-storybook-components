import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/TooltipElement',
}

const actionsData = {
  onClick: action('toggle'),
}

const defaultArgs = {}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100 space-x-1">
      <TooltipElement v-bind="args" @toggle="onClick">
        <template #tooltip-anchor>Click on me</template>
        <template #tooltip-content>I am the tooltip content</template>
      </TooltipElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
