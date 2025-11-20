const calculadora = require("../models/calculadora");

test("somar 7 + 7 deve retornar 14", () => {
  const resultado = calculadora.somar(7, 7);
  expect(resultado).toBe(14);
});
