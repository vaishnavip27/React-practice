export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onCLick={onSelect}>{children}</button>
    </li>
  );
}
