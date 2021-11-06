<template>
  <div class="alert alert-success" role="alert">
    <div v-if="$slots.title">
      <slot name="title">
        <h2>Default page</h2>
      </slot>
    </div>
    <slot></slot>
    <hr />
    <slot name="description"></slot>
  </div>
</template>