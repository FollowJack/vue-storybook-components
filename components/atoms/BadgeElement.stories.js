import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Badge',
  parameters: {
    docs: {
      description: {
        component: `
Badges are labels that hold small amounts of information. They are used in conjunction with another component to draw attention to a change the user may want to review, such as a new message or cart item.
<br/>

## Best practices
- Use badges for counts of important information, in close proximity to the relevant item.
- Use badges to notify or draw attention to changed values or status.
- A small dot badge notifies the user that something is new or updated without showing a count, such as an “unread report”, or activity notification. It may be useful as a less prominent badge, even when the count is known.
- Always maintain the same position in relation to the anchor element for the same usage of the badge.

<br/>
## Use cases
1. For urgent interruptions, requiring acknowledgment, that inform the user about a situation.

        `,
      },
    },
  },
  argTypes: {
    default: {
      description: "The default Vue slot",
      control: {
        type: 'text',
      },
      defaultValue: "Click me",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
    variant: {
      options: [
        'primary', 'secondary', 'success', 'danger'
      ],
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
  onClick: action('click:badge'),
}

const defaultArgs = {
  variant: "danger"
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="">
      <BadgeElement v-bind="args" @click:badge="onClick">
        {{args.default}}
      </BadgeElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }

const TemplateVariations = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="inline-flex flex-col space-y-2">
      <BadgeElement variant="primary" @click:badge="onClick">
        primary
      </BadgeElement>
      <BadgeElement variant="secondary" @click:badge="onClick">
        secondary
      </BadgeElement>
      <BadgeElement variant="success" @click:badge="onClick">
        success
      </BadgeElement>
      <BadgeElement variant="danger" @click:badge="onClick">
        danger
      </BadgeElement>
    </div>
    `,
})
export const Variations = TemplateVariations.bind({})
TemplateVariations.args = {}

const noteArgs = {
  variant: "danger"
}

const TemplateNote = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <span class="relative">
      {{args.default}}
      <BadgeElement v-bind="args" @click:badge="onClick"  class="absolute top-0 -right-1 " />
    </span>
    `,
})
export const Note = TemplateNote.bind({})
Note.args = { ...noteArgs }

