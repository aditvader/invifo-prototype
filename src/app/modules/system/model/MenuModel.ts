export interface AsideMenu {
    aside: AsideHeader
}

interface AsideHeader {
    items: Items[]
}

interface SubItems {
    section: string
    title: string
    root : boolean
    icon : string
    page    : string
    bullet: string
    submenu :Items[]
}

interface Items {
    section: string
    title: string
    root : boolean
    icon : string
    page    : string
    bullet: string
    submenu :SubItems[]
}