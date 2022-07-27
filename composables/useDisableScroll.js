import { watch } from 'vue'

export const useDisableScroll = (isVisible) => {
  // const getBackdropDiv = () => {
  //   let backdrop = document.getElementById('modal-backdrop');

  //   if (backdrop === null) {
  //     backdrop = document.createElement('div');
  //     backdrop.id = 'modal-backdrop';
  //     backdrop.classList.add("bg-gray-500", "fixed", "inset-0", "pointer-events-none", "opacity-75", "transition-opacity")
  //     document.body.appendChild(backdrop);
  //   }

  //   return backdrop;
  // };
  // const backdrop = getBackdropDiv();

  watch(
    isVisible.value,
    () => {
      if (isVisible.value === true) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'initial';
      }
    },
    { immediate: true }
  )
};
