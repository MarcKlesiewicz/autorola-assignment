export class Auction {
    constructor(
        public id: number = 0,
        public countryCode: string = '',
        public timeFormatted: string = '',
        public logo: string | null = null,
        public title: string = '',
        public numberOfCars: string = ''
    ) {}
}

export class AuctionGroup {
    constructor(
        public domesticAuctions: Auction[] = [],
        public internationalAuctions: Auction[] = []
    ) {}
}