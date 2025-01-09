<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
import "./button.css";
import { computed } from "vue";


const props = withDefaults(
  defineProps<{
    /**
     * 按钮的文本
     */
    label: string;
    /**
     * 是否是primary
     */
    primary?: boolean;
    /**
     * 按钮大小
     */
    size?: "small" | "medium" | "large";
    /**
     * 按钮背景颜色
     */
    backgroundColor?: string;
  }>(),
  { primary: false }
);

const emit = defineEmits<{
  /**
   * 按钮点击事件
   */
  (e: "click", id: number): void;
}>();

const classes = computed(() => ({
  "storybook-button": true,
  "storybook-button--primary": props.primary,
  "storybook-button--secondary": !props.primary,
  [`storybook-button--${props.size || "medium"}`]: true,
}));

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

/**
 * 按钮的文本111
 */
const onClick = () => {
  emit("click", 1);
};
</script>
