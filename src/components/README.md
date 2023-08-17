# How to add a component

## Component file structure

### Contexts and etc

### Folder structure

```text
MyComponent/
├─ index.ts (Main export file)
├─ MyComponent.tsx
├─ MyComponentElement.tsx (If component have elements)
├─ MyComponent.css (CSS styles file)
├─ MyComponentSlice.ts (If component use Redux)

```

## Component styling guide

### Global variables

### Block

.`my-component` {}

### Element

.my-component__`my-element` {}

### Modification

.my-component_`mod` or .my-component__my-element_`mod` {}

