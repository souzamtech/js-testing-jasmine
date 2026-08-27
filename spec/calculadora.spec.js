describe("Teste Calculadora", function() {

    it("Somas válidas", function() {
        expect(soma(1, 2)).toBe(3);
        expect(soma(9, 9)).toBe(18);
    });

    it("Subtrações válidas", function() {
        expect(subtracao(10, 4)).toBe(6);
        expect(subtracao(5, 8)).toBe(-3);
    });

    it("Multiplicações válidas", function() {
        expect(multiplicacao(4, 5)).toBe(20);
        expect(multiplicacao(3, 0)).toBe(0);
    });

    it("Divisões válidas", function() {
        expect(divisao(10, 2)).toBe(5);
        expect(divisao(9, 3)).toBe(3);
    });

});