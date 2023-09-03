export interface LandingNavBarItem {
    text: string,
    url: string,
}

export interface LandingSocialItem {
    faIcon: string,
    url: string,
}

export interface LandingGridItem {
    title: string,
    content: string,
    orientation: string,
    bgImgUrl: string,
    url: string,
    rowSpan: string,
    colSpan: string,
}

export interface LikeCounter {
    likes: number,
    dislikes: number
}