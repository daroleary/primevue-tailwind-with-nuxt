<template>
  <div id="MainLayout" class="fixed z-50 w-full">
    <div id="TopMenu" class="w-full border-b bg-[#FAFAFA] md:block hidden">
      <ul
        class="flex h-10 max-w-[1200px] items-center justify-end bg-[#FAFAFA] px-2 text-xs font-light text-[#333333]"
      >
        <li class="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#FF4636]">
          Primevue
        </li>
        <li class="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#FF4636]">
          Cookie Preferences
        </li>
        <li class="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#FF4636]">Help</li>
        <li class="cursor-pointer border-r border-r-gray-400 px-3 hover:text-[#FF4636]">
          Buyer Protection
        </li>
        <li class="px-3 hover:text-[#FF4646] cursor-pointer">
          <Icon name="ic:sharp-install-mobile" size="17" />
          App
        </li>
        <li
          class="relative flex items-center px-2.5 hover:text-[#FF4646] h-full cursor-pointer"
          :class="
            isAccountMenu
              ? 'bg-white border z-40 shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]'
              : 'border border-[#FAFAFA]'
          "
          @mouseenter="isAccountMenu = true"
          @mouseleave="isAccountMenu = false"
        >
          <Icon name="ph:user-thin" size="17" />
          Account
          <Icon name="mdi:chevron-down" size="15" class="ml-5" />
          <div
            v-if="isAccountMenu"
            id="AccountMenu"
            class="absolute bg-white w-[220px] text-[#333333] z-40 top-[38px] -left-[100px] border-x border-b"
          >
            <div v-if="true">
              <div class="text-semibold text-[15px] my-4 px-3">Welcome to Primevue!</div>
              <div class="flex items-center gap-1 px-3 mb-3">
                <NuxtLink
                  to="/auth"
                  class="bg-[#FF4646] text-center w-full text-[16px] rounded-sm text-white font-semibold"
                >
                  Login / Register
                </NuxtLink>
              </div>
            </div>
            <div class="border-b" />
            <ul class="bg-white">
              <li
                class="text-[13px]py-2 px-4 w-full hover:bg-gray-200"
                @click="navigateTo('/orders')"
              >
                My Orders
              </li>
              <li v-if="true" class="text-[13px] py-2 px-4 w-full hover:bg-gray-200">Sign Out</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div id="MainHeader" class="flex items-center w-full bg-white"></div>
    <Loading v-if="userStore.isLoading" />

    <div class="lg:pt-[150px] md:pt-[40px] pt-[80px]" />

    <div class="dark:bg-gray-900 min-h-screen flex items-center justify-center gap-4">
      <Button label="Primevue Button" />
      <InputText placeholder="Primevue input" />
    </div>

    <slot />

    <Footer v-if="!userStore.isLoading" />
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
// import Button from 'primevue/button'

const userStore = useUserStore()

const isAccountMenu = ref(false)

import Loading from '~/components/BaseLoading.vue'
import Footer from '~/components/BaseFooter.vue'
</script>
