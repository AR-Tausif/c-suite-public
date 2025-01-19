

# Infinite Horizontal Scroll Component

The `InfiniteHorizontalScroll` component provides a seamless and automatic horizontal scrolling effect for any list of components. This component automatically handles the infinite scrolling behavior, making it perfect for brand carousels, product showcases, image sliders, or any horizontally scrollable content.

Wrap any list of components (e.g., images, divs, or custom components) with the `<InfiniteHorizontalScroll>` component, and it will duplicate and scroll them horizontally, ensuring a continuous and smooth loop.

## How It Works

1. **Wrap Your Content**: Place any number of components as children inside the `<InfiniteHorizontalScroll>`.
2. **Automatic Duplication**: The component will automatically duplicate the children to create the illusion of infinite scrolling.
3. **Customizable Speed & Timing**: You can customize the scrolling speed and interval time with the `scrollSpeed` and `intervalTime` props.

## Usage Example

```tsx
import React from 'react';
import InfiniteHorizontalScroll from './InfiniteHorizontalScroll';

const BrandSection: React.FC = () => {
  return (
    <InfiniteHorizontalScroll intervalTime={5} scrollSpeed={2}>
      <img src="https://placehold.co/600x400" alt="Brand 1" />
      <img src="https://placehold.co/600x400" alt="Brand 2" />
      <img src="https://placehold.co/600x400" alt="Brand 3" />
      <img src="https://placehold.co/600x400" alt="Brand 4" />
      <img src="https://placehold.co/600x400" alt="Brand 5" />
      <img src="https://placehold.co/600x400" alt="Brand 6" />
      <img src="https://placehold.co/600x400" alt="Brand 7" />
      <img src="https://placehold.co/600x400" alt="Brand 8" />
      <img src="https://placehold.co/600x400" alt="Brand 9" />
      <img src="https://placehold.co/600x400" alt="Brand 10" />
    </InfiniteHorizontalScroll>
  );
};

export default BrandSection;
```

### Key Features:
- **Infinite Scroll**: Scrolls horizontally in a smooth, continuous loop, allowing users to see a never-ending list of items.
- **Customizable Speed**: Adjust the scroll speed and interval timing to suit your needs.
- **Flexibility**: Works with any React elements passed as children.

## API Reference

### Props

| Prop Name     | Type                | Default Value | Description                                                                 |
|---------------|---------------------|---------------|-----------------------------------------------------------------------------|
| `intervalTime`| `number`            | `30`          | Controls the interval time (in milliseconds) between scroll updates. Smaller values will make the scroll smoother and faster. |
| `scrollSpeed` | `number`            | `2`           | Controls the speed of scrolling (in pixels per interval). Higher values make the scroll faster. |
| `children`    | `ReactNode`         | N/A           | The content to be scrolled horizontally. Can be any valid React children (e.g., images, divs, text, or other components). |

### Example:

```tsx
<InfiniteHorizontalScroll intervalTime={5} scrollSpeed={2}>
  <img src="https://placehold.co/600x400" alt="Brand 1" />
  <img src="https://placehold.co/600x400" alt="Brand 2" />
  <img src="https://placehold.co/600x400" alt="Brand 3" />
  <img src="https://placehold.co/600x400" alt="Brand 4" />
  <img src="https://placehold.co/600x400" alt="Brand 5" />
</InfiniteHorizontalScroll>
```

### Advanced Usage

You can pass any custom components or complex UI elements inside the `<InfiniteHorizontalScroll>` component. The scrolling effect will work seamlessly regardless of the complexity of the content.

Example with custom components:

```tsx
import React from 'react';
import InfiniteHorizontalScroll from './InfiniteHorizontalScroll';

const CustomCard: React.FC<{title: string}> = ({ title }) => (
  <div style={{ width: 200, height: 100, backgroundColor: '#ddd', textAlign: 'center', lineHeight: '100px', marginRight: 10 }}>
    {title}
  </div>
);

const BrandSection: React.FC = () => {
  return (
    <InfiniteHorizontalScroll intervalTime={50} scrollSpeed={3}>
      <CustomCard title="Brand 1" />
      <CustomCard title="Brand 2" />
      <CustomCard title="Brand 3" />
      <CustomCard title="Brand 4" />
      <CustomCard title="Brand 5" />
    </InfiniteHorizontalScroll>
  );
};

export default BrandSection;
```

## Styling

You can style the container (`<div>`) and the children elements inside the `InfiniteHorizontalScroll` component by passing inline styles or using CSS classes. By default, the component provides basic styling, but you may adjust it as needed.

```tsx
<InfiniteHorizontalScroll style={{ border: '2px solid #ccc', padding: '20px 0' }} intervalTime={50} scrollSpeed={3}>
  <img src="https://placehold.co/600x400" alt="Brand 1" />
  <img src="https://placehold.co/600x400" alt="Brand 2" />
</InfiniteHorizontalScroll>
```

## Performance Considerations

- **Duplicating Children**: The component duplicates the children for seamless looping. If you are displaying a large number of elements, keep an eye on performance, especially on slower devices. Consider optimizing the number of children and the interval time.
- **Reactivity**: The `useEffect` hook ensures that the scroll behavior is handled efficiently, with cleanup on unmount to prevent memory leaks.

---

### Conclusion

The `InfiniteHorizontalScroll` component is a powerful and flexible way to create continuous horizontal scrolling for any set of React components. Whether you need a simple image carousel or a complex list of items, this component makes it easy to implement infinite scroll with customizable speed and timing.

---

This documentation is structured for clarity and readability, ensuring that developers can easily understand how to use the component and integrate it into their projects. The key features, API reference, usage examples, and advanced usage sections provide a comprehensive overview of the component's capabilities.