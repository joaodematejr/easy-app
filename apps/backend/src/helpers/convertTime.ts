const MS_POR_SEGUNDO = 1000;
const MS_POR_MINUTO = 60 * MS_POR_SEGUNDO;
const MS_POR_HORA = 60 * MS_POR_MINUTO;
const MS_POR_DIA = 24 * MS_POR_HORA;

const UNIDADES_MAP = {
  s: MS_POR_SEGUNDO,
  m: MS_POR_MINUTO,
  h: MS_POR_HORA,
  d: MS_POR_DIA,
};

const DURATION_REGEX = /^(\d+)([smhd])$/i;

export function convertTime(duration: string): number {
  const match = duration.trim().match(DURATION_REGEX);

  if (!match) {
    return 0;
  }

  const valor = parseInt(match[1], 10);
  const unidade = match[2].toLowerCase() as keyof typeof UNIDADES_MAP;

  const multiplicador = UNIDADES_MAP[unidade];

  if (multiplicador) {
    return valor * multiplicador;
  }

  return 0;
}
