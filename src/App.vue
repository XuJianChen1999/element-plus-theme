<!--
 * @Description: 
 * @Author: xjc
 * @Date: 2022-06-27 10:53:52
 * @LastEditTime: 2022-06-27 11:34:51
 * @LastEditors: xjc
-->
<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div style="display: flex">
      <BaseSide />
      <div>
        <img alt="Vue logo" class="element-plus-logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
      </div>
    </div>
  </el-config-provider>
</template>

<!-- <script setup>
import BaseHeader from '@/components/layouts/BaseHeader'
import BaseSide from '@/components/layouts/BaseSide'
</script> -->

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
.element-plus-logo {
  width: 50%;
}
</style>