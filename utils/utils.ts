export default class Calculador {
  static CalculaMedida(a: number, b: number, c: number) {
    return (b * c) / a;
  }
  
  static CalculaMedidaExpressao(r: number, c: number , n: string) {
    return `${n} => ${c} => ${r.toFixed(2)} => ${(Math.round(r).toFixed(2))}`
  }
}