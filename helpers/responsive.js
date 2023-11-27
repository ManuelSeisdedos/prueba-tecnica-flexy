import { useMediaQuery } from "react-responsive"

const isMobile = useMediaQuery ({
    query: '(max-width: 719px)'
})

const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 720px)'
  })

export {
    isMobile,
    isDesktopOrLaptop
}