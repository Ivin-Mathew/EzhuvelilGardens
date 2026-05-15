"use client"
type Props = {
    displayText: string;
    styles?: string;
    reverse?: boolean;
}

const Button = ({ displayText, styles = "", reverse = false }: Props) => {
    return (
        <>
            {
                reverse ? (
                    <div className={`${styles} h-6  relative group overflow-clip hover:cursor-pointer`}>
                        <p className={`group-hover:translate-y-6 -mt-6 duration-300`}>
                            {displayText}
                        </p>
                        <p className={`group-hover:translate-y-6 duration-300`}>
                            {displayText}
                        </p>
                    </div>
                ) : (
                    <div className={`${styles} h-6  relative group overflow-clip hover:cursor-pointer`}>
                        <p className={`group-hover:-translate-y-6 duration-300`}>
                            {displayText}
                        </p>
                        <p className={`group-hover:-translate-y-6 duration-300`}>
                            {displayText}
                        </p>
                    </div>
                )
            }
        </>
    )
}

export default Button