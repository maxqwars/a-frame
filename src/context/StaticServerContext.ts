import { createContext } from 'react';
import { DEFAULT_STATIC_SERVER } from '@/constants/DEFAULT_STATIC_SERVER';

export default createContext<string>(DEFAULT_STATIC_SERVER);
