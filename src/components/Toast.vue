<template>
  <div id="toast-container" class="absolute bottom-5 right-5">
    <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="toastClass(toast.type)"
        class="flex items-center gap-3 w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
    >
      <!-- Icon depending on toast type -->
      <div :class="iconClass(toast.type)" class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
        <svg v-if="toast.type === 'success'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <svg v-if="toast.type === 'danger'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
        </svg>
        <svg v-if="toast.type === 'warning'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
        </svg>
      </div>

      <div class="text-sm font-normal">{{ toast.message }}</div>
      <button @click="removeToast(toast.id)" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8">
        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '@/composables/useToast';


const { toasts, removeToast } = useToast();

const iconClass = (type : string) => {
  switch (type) {
    case 'success':
      return 'text-green-500 bg-green-100';
    case 'danger':
      return 'text-red-500 bg-red-100';
    case 'warning':
      return 'text-orange-500 bg-orange-100';
    default:
      return '';
  }
};

const toastClass = (type : string) => {
  switch (type) {
    case 'success':
      return 'border-l-4 border-green-500 text-green-500 bg-green-100';
    case 'danger':
      return 'border-l-4 border-red-500 text-red-500 bg-red-100';
    case 'warning':
      return 'border-l-4 border-orange-500 text-orange-500 bg-orange-100';
    default:
      return '';
  }
}

</script>