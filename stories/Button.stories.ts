import { ref } from "vue";
import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/vue3";

import XButton from "../src/components/Button.vue";

const meta = {
  title: "Example/Button",
  component: XButton,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    backgroundColor: { control: "color" },
  },
  args: {
    primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof XButton>;

type Story = StoryObj<typeof XButton>;

export default meta;

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Drawer = {
  render: (args) => ({
    components: { XButton },
    setup() {
      const onClick = (event) => {
        console.log(666, event);
      };

      return { ...args, onClick };
    },
    template: '<x-button :label="label" :primary="primary"  @click="onClick"/>',
  }),
  args: {
    primary: true,
    label: "Button",
  },
};




const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XButton },
  setup() {
    let model = ref("Javascript");
    const onClick = (event) => {
      console.log(666, event);
    };

    return { ...args, model, onClick };
  },
  template: '<x-button :label="label" :primary="primary"  @click="onClick"/>',
});

export const Normal = Template.bind({});

Normal.args = {
  primary: true,
  label: "Button",
};

// Normal.storyName = "Drawer";

// export const Normal = {
//   args: {
//     primary: false,
//     label: "Normal",
//   },
//   render: (args, { argTypes }) => ({
//     components: { Button },
//     props: args,
//     template: "<button />",
//   }),
// };
