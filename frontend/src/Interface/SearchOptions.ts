export interface SearchOption<T> {
  label: string;
  value: string;
  filter: (item: T, search: string) => boolean;
}