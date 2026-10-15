export type Level = 1 | 2 | 3;
export const names = ['Foundation', 'Standard', 'Advanced'];
export function task(level: Level, seed: number) {
  const x = 2 + seed % 9, b = 2 + seed % 6, a = 2 + seed % 4;
  if (level === 1) return {level, x, a:1,b,c:x+b,equation:`x + ${b} = ${x+b}`, story:'Find the missing number.', hints:[`Take ${b} away from both sides.`, `Work out ${x+b} − ${b}.`], steps:[`x + ${b} = ${x+b}`,`x = ${x+b} − ${b}`,`x = ${x}`], check:`${x} + ${b} = ${x+b}`};
  if (level === 2) return {level,x,a,b,c:a*x+b,equation:`${a}x + ${b} = ${a*x+b}`,story:'Find x. Use two steps.',hints:[`First, take ${b} away from both sides.`,`Then divide both sides by ${a}.`],steps:[`${a}x + ${b} = ${a*x+b}`,`${a}x = ${a*x}`,`x = ${a*x} ÷ ${a}`,`x = ${x}`],check:`${a} × ${x} + ${b} = ${a*x+b}`};
  return {level,x,a,b,c:a*(x+b),equation:`${a}(x + ${b}) = ${a*(x+b)}`,story:`A group buys ${a} tickets. Each ticket costs x dollars. Each person also pays ${b} dollars for a snack. The total is ${a*(x+b)} dollars. What is the price of one ticket?`,hints:[`Find the cost for one person first.`,`Divide ${a*(x+b)} by ${a}. Then take away the snack cost.`],steps:[`${a}(x + ${b}) = ${a*(x+b)}`,`x + ${b} = ${x+b}`,`x = ${x+b} − ${b}`,`x = ${x}. One ticket costs ${x} dollars.`],check:`${a} × (${x} + ${b}) = ${a*(x+b)}`};
}
export function parseAnswer(raw:string):number|null {const s=raw.trim();if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s))return null;const n=Number(s);return Number.isFinite(n)?n:null;}
export function correct(raw:string,expected:number){return parseAnswer(raw)===expected;}
