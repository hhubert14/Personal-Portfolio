export type ArticleItem = {
    id: string
    title: string
    date: string
    category: string
}

export interface LichessUserDataType {
    id: string
    username: string
    perfs: {
        [key: string]: {
            games: number
            rating: number
            rd: number
            prog: number
            prov?: boolean
            runs?: number
            score?: number
        }
    }
    createdAt: number
    seenAt: number
    playTime: {
        total: number
        tv: number
    }
    url: string
    count: {
        all: number
        rated: number
        ai: number
        draw: number
        drawH: number
        loss: number
        lossH: number
        win: number
        winH: number
        bookmark: number
        playing: number
        import: number
        me: number
    }
    followable: boolean
    following: boolean
    blocking: boolean
}

export interface MonkeytypeUserDataType {
    data: {
        name: string;
        typingStats: {
            completedTests: number;
            startedTests: number;
            timeTyping: number;
        };
        personalBests: {
            time: {
                [key: string]: {
                    acc: number;
                    consistency: number;
                    difficulty: string;
                    lazyMode: boolean;
                    language: string;
                    punctuation: boolean;
                    raw: number;
                    wpm: number;
                    timestamp: number;
                    numbers?: boolean;
                }[];
            };
            words: {
                [key: string]: {
                    acc: number;
                    consistency: number;
                    difficulty: string;
                    lazyMode: boolean;
                    language: string;
                    punctuation: boolean;
                    raw: number;
                    wpm: number;
                    timestamp: number;
                    numbers?: boolean;
                }[];
            };
        };
        allTimeLbs: {
            time: {
                [key: string]: {
                    [key: string]: {
                        rank: number;
                        count: number;
                    };
                };
            };
        };
    };
}