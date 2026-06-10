import type { breadcrumbs } from "./breadcrumbs";
import type { HeaderActions } from "./HeaderActions";
import type { SearchOption } from "./SearchOptions";

export interface PageHeaderProps {
  title: string;
  actions?: HeaderActions[];
  searchField?: string;
  searchValue?: string;
  onSearchFieldChange?: (value: string) => void;
  onSearchValueChange?: (value: string) => void;
  searchOptions?: SearchOption[];
  breadcrumbs?:breadcrumbs[];
}