import { createContext } from '../../utils'
import type { UseToggleGroupReturn } from './use-toggle-group'

export interface ToggleGroupContext extends UseToggleGroupReturn {}

export const [ToggleGroupProvider, useToggleGroupContext] =
  createContext<ToggleGroupContext>('ToggleGroupContext')
