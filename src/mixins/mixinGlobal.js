export default {
  methods: {
    iconBySportId(id) {
      switch (id) {
        case 2:
          return "sports-4";
        case 3:
          return "sports-5";
        case 1:
          return "sports-22";
        default:
          break;
      }
    },
  },
};
