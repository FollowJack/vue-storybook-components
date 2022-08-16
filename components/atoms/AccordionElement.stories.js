import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Accordion',
  argTypes: {
    header: {
      description: "The header slot",
      control: {
        type: 'text',
      },
      defaultValue: "Header of the accordion",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
    content: {
      description: "The content slot",
      control: {
        type: 'text',
      },
      defaultValue: "Content of the accordion. Lorem ipsum dolor sit amet.",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
  }
}

const actionsData = {
  onClick: action('toggle:summary'),
}

const defaultArgs = {
  isInitialOpen: false,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <AccordionElement v-bind="args" @toggle:summary="onClick">
        <template #header><TextElement as="h2" variant="copy-large" weight="bold">{{args.header}}</TextElement></template>
        <template #content><TextElement as="p">{{args.content}}</TextElement></template>
      </AccordionElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
