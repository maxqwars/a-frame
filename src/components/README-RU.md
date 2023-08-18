# Как создавать компоненты в проекте

Данное руквоводство научит вас тому как создавать компоненты в проекте.



## Предварительные требования

При разработке компонентов приложения используется несколько пакетов, концепций и методологий.

Так например для управления состоянием используется `Redux`, для поддержки переводов `i18next`.

При написания стилей используется методология `Блок-Элемент-Модификатор` созданная в Yandex.

Так же при написании компонентов используется `classnames` для комбинации классов, и предоставляется контекст `ThemeContext` для определения используемой темы.



### Кратко вам необходимо знать:

1. React включая его хуки: `useContext`, `useEffect`, `useState`
2. `Redux` включая `react-redux`
3. Методологию `BEM`
4. Пакет `classnames`
5. `i18next` включая `react-i18next`



## Структура компонента

При создании компонента рекомендуется использовать следующую структуру кода

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



### Контекст `ThemeContext`

Данный контекст предоставляет значение темы приложения, может возвращать значение `light` или `dark`



### Структура файлов

При создании компонентов рекомендуется использовать следующуюю структуру файлов и папок



```text
MyComponent/
├─ index.ts (Файл экспорта)
├─ MyComponent.tsx (Главный компонент, он же блок)
├─ MyComponentElement.tsx (Елемент компонента или блока)
├─ MyComponent.css (Файл стилей)
├─ MyComponentSlice.ts (Срез состояния если используется redux)

```



## Стилизация компонентов

Как было написано ранее при написании стилей компонентов используется методологии БЭМ.

Вы можете узнать больше о БЭМ тут https://en.bem.info/, переменные стилей находятся в `mizuhiki/src/css/_theme.css`

