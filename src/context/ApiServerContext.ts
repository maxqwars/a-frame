import { createContext } from 'react';
import { DEFAULT_API_SERVER } from '@/constants/DEFAULT_API_SERVER';

export default createContext<string>(DEFAULT_API_SERVER);
