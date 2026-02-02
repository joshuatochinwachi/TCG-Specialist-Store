import Image from "next/image"

interface CategoryBannerProps {
  title: string
  description: string
  image: string
}

export function CategoryBanner({ title, description, image }: CategoryBannerProps) {
  return (
    <div className="relative h-[300px] w-full overflow-hidden bg-gradient-to-r from-primary to-secondary">
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover opacity-30" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">{title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl text-pretty">{description}</p>
        </div>
      </div>
    </div>
  )
}
