export default function LiveIndicator({ label = "Live" }: { label?: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm text-olive font-medium">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-olive" />
      </span>
      {label}
    </div>
  )
}
