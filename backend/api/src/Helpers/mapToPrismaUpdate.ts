export function mapToPrismaUpdate<TInput extends object, TPrisma extends object>(
  data: TInput
): Partial<TPrisma> {
  const result: Partial<TPrisma> = {}

  for (const key of Object.keys(data) as (keyof TInput)[]) {
    const value = data[key]

    if (value !== undefined) {
      ;(result as Record<string, unknown>)[key as string] = value
    }
  }

  return result
}
export default mapToPrismaUpdate;