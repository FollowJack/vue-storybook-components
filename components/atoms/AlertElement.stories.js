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
1. For urgent interruptions, requiring acknowledgment, that inform the user about a situation.

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
    id: {
      description: "The unique identifier",
      control: {
        type: 'text',
      },
    }
  }
}

const actionsData = {
  onClick: action('click:close'),
}

const defaultArgs = {
  id: null,
  variant: 'info',
  isClosable: true,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div>
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
NotClosable.parameters = {
  docs: {
    description: {
      story: 'With `isClosable: false` -> close icon is not visible anymore.',
    },
  },
};

const TemplateVariations = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="space-y-1">
      <AlertElement variant="info" @click:close="onClick">
        <template #header><TextElement as="div" weight="bold">{{args.header}}</TextElement></template>
        <template #content><TextELement as="div">{{args.content}}</TextELement></template>
      </AlertElement>
      <AlertElement variant="error" @click:close="onClick">
        <template #header><TextElement as="div" weight="bold">{{args.header}}</TextElement></template>
        <template #content><TextELement as="div">{{args.content}}</TextELement></template>
      </AlertElement>
      <AlertElement variant="success" @click:close="onClick">
        <template #header><TextElement as="div" weight="bold">{{args.header}}</TextElement></template>
        <template #content><TextELement as="div">{{args.content}}</TextELement></template>
      </AlertElement>
    </div>
    `,
})
export const Variations = TemplateVariations.bind({})
Variations.args = { ...defaultArgs }

