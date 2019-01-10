 export default {
  methods: {
    formatDate (d) {
      const month = new Date(d).toDateString().substring(4, 7)
      let date = new Date(d).getDate()
      const foo = date % 10

      if (foo == 1 && date !== 11) {
        date = date + 'st'
      } else if (foo == 2 && date !== 12) {
        date = date + 'nd'
      } else if (foo == 3 && date !== 13) {
        date = date + 'rd'
      } else {
        date = date + 'th'
      }
      return month + ' ' + date;
    }
  }
}
