export default function mapToPrismaCreate<
  TInput extends object,
  TPrisma extends object
>(
  data: TInput
): TPrisma {
  return Object.fromEntries(
    Object.entries(data).filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, value]) => value !== undefined
    )
  ) as TPrisma
}