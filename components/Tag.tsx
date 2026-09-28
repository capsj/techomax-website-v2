export default function Tag({ children, white = false }: { children: string; white?: boolean }) {
  return (
    <p className={`tag${white ? " tag--white" : ""}`}>
      <span>{children}</span>
    </p>
  )
}
