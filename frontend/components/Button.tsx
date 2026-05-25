"use client"
import { ScrollSmoother } from "gsap/all";

type Props = {
    displayText: string;
    styles?: string;
    reverse?: boolean;
    scrollTo?: string;
    navigateTo?: string;
}

const Button = ({ displayText, styles = "", reverse = false, scrollTo, navigateTo }: Props) => {
    return (
        <>
            <button onClick={() => {
                    if (navigateTo) {
                        window.open(navigateTo,"_blank", "noopener, noreferrer")
                        return;
                    }

                    if (scrollTo) {
                        const smoother = ScrollSmoother.get();
                        const target = document.getElementById(scrollTo);

                        if (smoother && target) {
                            smoother.scrollTo(target, true, "top 120px");
                        }
                        return;
                    }
                }}
                className={`${styles} h-6  relative group overflow-clip hover:cursor-pointer`}>

                {
                    reverse ? (
                        <>
                            <p className={`group-hover:translate-y-6 -mt-6 duration-300`}>
                                {displayText}
                            </p>
                            <p className={`group-hover:translate-y-6 duration-300`}>
                                {displayText}
                            </p>
                        </>
                    ) : (
                        <>
                            <p className={`group-hover:-translate-y-6 duration-300`}>
                                {displayText}
                            </p>
                            <p className={`group-hover:-translate-y-6 duration-300`}>
                                {displayText}
                            </p>
                        </>
                    )
                }
            </button>
        </>
    )
}

export default Button