import { action } from '@storybook/addon-actions'

export default {
  title: 'Atoms/Accordion',
  parameters: {
    docs: {
      description: {
        component: `
Accordions are used to expand and collapse content related to a given heading. It allows larger sections of information to be presented to the user in a more digestible format, with the heading providing the user with an indication of what content will be revealed when the accordion is expanded.

<br/>
## Best practices
- Use an accordion to group together long sections of related content into a more digestible format.
- Use an accordion for information that can take a lower priority than other content on the page.
- Use an accordion to help reduce the length of a page, while still ensuring that all necessary information is available to users.
- Use the accordion heading to clearly communicate to users the content that will be available when the section is expanded.
- Do not use an accordion to hide calls to action that require the user's attention.
- Do not use an accordion to hide error states.
- Do not use an accordion as a selection control component for the user.
- Do not use an accordion to hide important legal or privacy information.
<br/>

## Use cases
1. Frequently Asked Questions (FAQs) - see Molecules/AccordionGroupElement for an example story

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
    <AccordionElement v-bind="args" @toggle:summary="onClick" class="bg-white">
      <template #header><TextElement as="h2" variant="copy-large" weight="bold">{{args.header}}</TextElement></template>
      <template #content><TextElement as="p">{{args.content}}</TextElement></template>
    </AccordionElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }
