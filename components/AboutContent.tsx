import Image from 'next/image'

interface AboutData {
    name: string
    title: string
    description: string
}

interface AboutContentProps {
    data: AboutData | null
}

export default function AboutContent({ data }: AboutContentProps) {
    if (!data) return null
    const { name, title, description } = data
    const descriptions = description.split('|')

    return (
        <>
            <h6 className="text-secondary text-xl mb-4">
                {name}: {title}
            </h6>

            <div className="flex items-center flex-col md:flex-row mt-8 md:mt-0">
                <div
                    className="relative rounded-full overflow-hidden flex-shrink-0 mb-8 md:mb-0 md:mr-8"
                    style={{ width: '100px', height: '100px' }}
                >
                    <Image
                        src="/images/img/sagar.jpeg"
                        alt="Sagar Sawuck"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    {descriptions.map((item, index) => (
                        <p key={`${item}-${index}`} className="mb-2">
                            - {item}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}
