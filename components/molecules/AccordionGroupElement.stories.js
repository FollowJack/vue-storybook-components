import { action } from '@storybook/addon-actions'

export default {
  title: 'Molecules/AccordionGroup',
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
1. Frequently Asked Questions (FAQs)

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
  isMultipleAllowed: true,
  initialOpenAccordionIds: []
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <AccordionGroupElement v-bind="args" v-slot="{ selectedIds, handleSelect }" @toggle:summary="onClick">
        <AccordionElement id="1" @toggle:summary="handleSelect" :is-initial-open="selectedIds.includes('1')">
          <template #header><TextElement as="h2" variant="copy-large" weight="bold">Header #1</TextElement></template>
          <template #content><TextElement as="p">Lorem ipsum dolor sit amet.</TextElement></template>
        </AccordionElement>
        <AccordionElement id="2" @toggle:summary="handleSelect" :is-initial-open="selectedIds.includes('2')">
          <template #header><TextElement as="h2" variant="copy-large" weight="bold">Header #2</TextElement></template>
          <template #content><TextElement as="p">Lorem ipsum dolor sit amet.</TextElement></template>
        </AccordionElement>
        <AccordionElement id="3" @toggle:summary="handleSelect" :is-initial-open="selectedIds.includes('3')">
          <template #header><TextElement as="h2" variant="copy-large" weight="bold">Header #3</TextElement></template>
          <template #content><TextElement as="p">Lorem ipsum dolor sit amet.</TextElement></template>
        </AccordionElement>
      </AccordionGroupElement>
    </div>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }

const TemplateFAQ = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
    <div class="bg-blue-100">
      <AccordionGroupElement v-bind="args" v-slot="{ selectedIds, handleSelect }" @toggle:summary="onClick">
        <AccordionElement id="1" @toggle:summary="handleSelect" :is-initial-open="selectedIds.includes('1')">
          <template #header><TextElement as="h2" variant="copy-large" weight="bold">
            What is the Vue Design System?
          </TextElement></template>
          <template #content><TextElement as="p">
          Vue Design System is an open source tool for building UI Design Systems with Vue.js.
          </TextElement></template>
        </AccordionElement>
        <AccordionElement id="2" @toggle:summary="handleSelect" :is-initial-open="selectedIds.includes('2')">
          <template #header><TextElement as="h2" variant="copy-large" weight="bold">
          How do I get started?
          </TextElement></template>
          <template #content><TextElement as="p">
          See the Introduction on Docs Overview.
          </TextElement></template>
        </AccordionElement>
        <AccordionElement id="3" @toggle:summary="handleSelect" :is-initial-open="selectedIds.includes('3')">
          <template #header><TextElement as="h2" variant="copy-large" weight="bold">
          Does Vue Design System work with Nuxt.js?
          </TextElement></template>
          <template #content><TextElement as="p">
          Yes!
          </TextElement></template>
        </AccordionElement>
      </AccordionGroupElement>
    </div>
    `,
})

export const FAQ = TemplateFAQ.bind({})
FAQ.args = { ...defaultArgs, isMultipleAllowed: false, initialOpenAccordionIds: ['2'] }
FAQ.parameters = {
  docs: {
    description: {
      story: 'With `isMultipleAllowed: false` -> only one accordion can be open simultanously and second accordion open initialy.',
    },
  },
};
