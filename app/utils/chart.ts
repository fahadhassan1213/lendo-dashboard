export const Utils = {
  months() {
    const count = 5;
    const result = [];
    const date = new Date(Date.UTC(2023, 0, 1));
    for (let i = 0; i < count; ++i) {
      result.push(
        new Date(date).toLocaleDateString("en-US", { month: "short" })
      );
      date.setMonth(date.getMonth() + 1);
    }
    return result;
  },
  numbers() {
    const count = 5;
    const max = 100;
    const data = [];
    for (let i = 0; i < count; ++i) {
      data.push(Math.round(Math.random() * max));
    }
    return data;
  },

  CHART_COLORS: {
    primary: "#2D91FE",
    secondary: "#4BDFFF",
    orange: "#FF6769",
    yellow: "#FFC359",
  },
};
