import { useToast } from "vue-toastification";

export default {
  data() {
    // Get toast interface
    const toast = useToast();

    return { toast };
  },
};
