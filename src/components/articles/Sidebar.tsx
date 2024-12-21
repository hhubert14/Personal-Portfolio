import Link from "next/link";

interface Props {
    headings: {
        text: string;
        id: string;
        level: number;
    }[];
}

const Sidebar = ({headings} : Props) => {
    return(
        <div
            className="overflow-y-scroll fixed top-16 left-0 h-full w-1/4 flex flex-col text-white p-4 pl-2 bg-black bg-opacity-75 shadow-[0px_0px_25px_25px_rgba(0,0,0,0.75)]"
            style={{
                direction: "rtl",
            }}
        >
            <div
                style={{
                    direction: "ltr", // Move scrollbar to the left
                }}
            >
                {headings.map(({ text, id, level }) => (
                    <Link
                        key={id}
                        href={`#${id}`}
                        className={`border-b block`}
                        style={{
                            marginLeft: `${level * 0.5}rem`,
                            // borderBottom: "1px solid white", // Add border at the bottom
                        }}
                    >
                        {text}
                    </Link>
                ))}
            </div>
            
        </div>
    )
}

export default Sidebar