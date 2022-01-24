const debounceSearchTerm = val => {
  clearTimeout(timer);
  let timer = setTimeout(() => {
    searchTerm = val;
  }, 750);
}

module.exports = debounceSearchTerm
