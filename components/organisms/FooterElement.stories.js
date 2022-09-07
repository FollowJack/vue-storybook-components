export default {
  title: 'Organisms/Footer',
  parameters: {
    docs: {
      description: {
        component: `
Footer can be used to layout the content. On purpose kept simple to adapt it to your needs.
`
      }
    }
  },
  argTypes: {
    "left": {
      description: "The left slot",
      control: {
        type: 'text',
      },
      defaultValue: "Left content",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
    "right": {
      description: "The right slot",
      control: {
        type: 'text',
      },
      defaultValue: "Right content",
      table: {
        category: 'Slots',
        type: {
          summary: 'html',
        },
      }
    },
    "bottom": {
      description: "The bottom slot",
      control: {
        type: 'text',
      },
      defaultValue: "Bottom content",
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
}

const defaultArgs = {
  hasContainer: true,
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
      <FooterElement v-bind="args" class="bg-blue-100">
        <template #left>{{args.left}}</template>
        <template #right>{{args.right}}</template>
        <template #bottom>{{args.bottom}}</template>
      </FooterElement>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }

const TemplateLean = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template:
    `
<FooterElement
  class="px-4 xl:px-0 pt-10 lg:pt-16 pb-10 lg:pb-20 bg-white"
>
  <template #left>
    <div class="mb-2 lg:mb-0">
      <TextElement as="p" variant="copy-medium" class="mb-1">
        So, do we work together?
      </TextElement>
      <LinkElement
        class="block animate-bounce"
        href="tel:+49 17699111575"
        target="_blank"
        ><TextElement
          as="p"
          variant="headline3"
          color="primary"
          weight="bold"
        >
          LET'S TALK!
        </TextElement>
      </LinkElement>
    </div>
  </template>
  <template #right>
    <div>
      <TextElement as="p" variant="copy-medium" color="black" class="mb-2">
        Connect via:
      </TextElement>
      <IconGroupElement color="black"/>
    </div>
  </template>
  <template #bottom>
    <div
      class="flex flex-col lg:flex-row lg:justify-between mt-10 lg:mt-16"
    >
      <div class="flex items-center">
        <TextElement as="p" variant="copy-small" color="black" class="mr-1"
          >Built &amp; designed with</TextElement
        >
        <i fill="currentColor" class="text-red-500">
          <svg
            fill="currentColor"
            height="14"
            width="14"
            viewBox="0 0 1792 1792"
          >
            <path
              d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"
            ></path>
          </svg>
        </i>
        <TextElement as="p" variant="copy-small" color="black" class="mx-1"
          >by</TextElement
        >
        <LinkElement href="https://devparadise.io">
          <TextElement as="span" variant="copy-small" color="black">
            DevParadise
          </TextElement>
        </LinkElement>
      </div>
      <div class="flex items-center space-x-2">
        <TextElement variant="copy-small" color="black"
          >© {{new Date().getFullYear()}} All rights reserved.
        </TextElement>
      </div>
    </div>
  </template>
</FooterElement>
    `,
})
export const Lean = TemplateLean.bind({})
Lean.args = { ...defaultArgs }
