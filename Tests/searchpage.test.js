const searchBar = require("../components/SearchBar");

test("logs the inputted text into the console", () => {
  const consoleSpy = jest.spyOn(console, "log");

  expect(searchBar(consoleSpy)).toBe("string");
});
