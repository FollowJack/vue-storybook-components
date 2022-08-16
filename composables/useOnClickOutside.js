import { onMounted, onUnmounted } from 'vue';

// docu: https://www.sobyte.net/post/2022-04/vue-hook/
export const useOnClickOutside = (ref = null, callback = () => { }) => {
  function handleClickOutside(event) {
    if (ref.value && !ref.value.contains(event.target)) {
      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
  })

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });
}
