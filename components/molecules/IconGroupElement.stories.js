const colors = [
  'gray', 'primary', 'white', 'black'
]

const sizes = [
  'small', 'medium', 'large'
]

export default {
  title: 'Molecules/IconGroup',
  parameters: {
    docs: {
      description: {
        component: `
Group of social icons like facebook, linkedIn and others. You can copy and adapt as you like.
`
      }
    },
  },
  argTypes: {
    color: {
      options: colors,
      control: { type: 'radio' },
    },
    size: {
      options: sizes,
      control: { type: 'radio' },
    },
  }
}

const actionsData = {
}

const defaultArgs = {
  color: 'white',
  size: 'large'
}

const Template = (args) => ({
  setup() {
    return { args, ...actionsData }
  },
  template: `
<IconGroupElement v-bind="args"/>
    `,
})
export const Default = Template.bind({})
Default.args = { ...defaultArgs }

const TemplateColor = (args) => ({
  data() {
    return {
      colors
    }
  },
  setup() {
    return { args, ...actionsData }
  },
  template: `
<div class="space-y-4">
  <IconGroupElement v-for="color in colors" :color="color" :key="color" v-bind="args"/>
</div>
    `,
})
export const Colors = TemplateColor.bind({})
Colors.args = {
  size: 'large'
}

const TemplateSize = (args) => ({
  data() {
    return {
      sizes,
    }
  },
  setup() {
    return { args, ...actionsData }
  },
  template: `
<div class="space-y-4">
  <div v-for="size in sizes" :key="size">
    <TextElement color='white' class="mr-2">Size {{size}} </TextElement>
    <IconGroupElement :size="size"  v-bind="args"/>
  </div>
</div>
    `,
})
export const Sizes = TemplateSize.bind({})
Sizes.args = {
  color: 'white',
}


