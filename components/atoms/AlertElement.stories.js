import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Alert',
  parameters: {
    docs: {
      description: {
        component: `
Alerts are used for feedback to to show alert messages to users.
<br/>

## Use cases
1.

        `,
      },
    },
  },
  argTypes: {
    header: {
      description: "The header slot",
      control: {
        type: 'text',
      },
      defaultValue: "Error",
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
      defaultValue: "This is an info message",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
    variant: {
      options: [
        'info', 'error', 'success'
      ],
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onClick: action('click:close'),
}

const defaultArgs = {
  id: '1',
  variant: 'info',
  isClosable: true,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <AlertElement v-bind="args" @click:close="onClick">
        <template #header><TextElement as="div" weight="bold">{{args.header}}</TextElement></template>
        <template #content><TextELement as="div">{{args.content}}</TextELement></template>
      </AlertElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }

export const NotClosable = Template.bind({})
NotClosable.args = { ...defaultArgs, isClosable: false }
