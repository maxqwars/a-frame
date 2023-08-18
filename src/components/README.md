# How to create components in a project

This tutorial will teach you how to create components in a project.



## Pre-requisites

Several packages, concepts and methodologies are used when developing application components.

For example, `Redux' is used for state management and `i18next' for translation support.

When writing styles, the `Block-Element-Modifier` methodology created in Yandex is used.

Also when writing components, `classnames` is used to combine classes, and a `ThemeContext` is provided to define the theme used.



### Briefly you need to know:

1. React including its hooks: `useContext`, `useEffect`, `useState`.
2. `Redux` including `react-redux`.
3. `BEM' methodology
4. The `classnames` package
5. `i18next` including `react-i18next`.



## Component structure

When creating a component, it is recommended to use the following code structure

```tsx
/* External modules */
import { useContext } from 'react'
import cn from 'classnames'

/* App modules */
import ThemeContext from '@/context/ThemeContext'

/* Styles */
import './MyComponent.css'

type MyComponentProps = {
  /* Component props */
}

const MyComponent = ({}: MyComponentProps) => {
    
    const theme = useContext(ThemeContext)
    
    return (
    	<div classNames=(cn('my-component', {
        	[`my-component_${theme}`]: theme
        }))
        >MyComponent</div>
    )
}

export default MyComponent

```


### Context `ThemeContext`.

This context provides the value of the application theme, can return `light` or `dark`



### File Structure

When creating components, it is recommended to use the following file and folder structure



```text
MyComponent/
├─ index.ts (Export file)
├─ MyComponent.tsx (Main component, aka block)
├─ MyComponentElement.tsx (Component or block element)
├─ MyComponent.css (Styles file)
├─ MyComponentSlice.ts (State slice if redux is used)

```



## Component Styling

As written earlier, BEM methodologies are used when writing component styles.

You can learn more about BEM here https://en.bem.info/, the style variables are in `mizuhiki/src/css/_theme.css`.