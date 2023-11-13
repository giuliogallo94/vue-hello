const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Primo esercizio Vue JS",
      titleClass: "main-title",
      textCenter: "text-center",
    };
  },

  methods: {},
});

app.mount("#app");
