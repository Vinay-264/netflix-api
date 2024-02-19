
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { getGenres, getTrendingMovies, getPopularMovies, fetchDataByGenre, searchMovieorTVShows, getMovieById, getShowById, getMovieReviewsById, getShowReviewsById } = require('./NetflixService');
const baseUrl = 'https://api.themoviedb.org/3';

describe("getGenres", () => {
    let mock = new MockAdapter(axios);
    const endpoint = '/genre/movie/list';

    it("should get generes and match the data", async () => {
        const data = {
            "genres": [{
                "id": 28,
                "name": 'Action'
            },
            {
                "id": 12,
                "name": "Adventure",
            },
            {
                "id": 16,
                "name": "Animation",
            },
            {
                "id": 35,
                "name": "Comedy",
            },
            {
                "id": 80,
                "name": "Crime",
            },
            {
                "id": 99,
                "name": "Documentary",
            },
            {
                "id": 18,
                "name": "Drama",
            },
            {
                "id": 10751,
                "name": "Family",
            },
            {
                "id": 14,
                "name": "Fantasy",
            },
            {
                "id": 36,
                "name": "History",
            },
            {
                "id": 27,
                "name": "Horror",
            },
            {
                "id": 10402,
                "name": "Music",
            },
            {
                "id": 9648,
                "name": "Mystery",
            },
            {
                "id": 10749,
                "name": "Romance",
            },
            {
                "id": 878,
                "name": "Science Fiction",
            },
            {
                "id": 10770,
                "name": "TV Movie",
            },
            {
                "id": 53,
                "name": "Thriller",
            },
            {
                "id": 10752,
                "name": "War",
            },
            {
                "id": 37,
                "name": "Western",
            }
            ]
        };
        const req = {};

        const res = {
            json: jest.fn(),
        };
        mock.onGet(baseUrl + endpoint);
        // Calling the getGenres function
        await getGenres(req, res);

        // Assertions
        expect(res.json).toHaveBeenCalledWith(data);

    });

    it("should not match the data", async () => {
        const data = {};
        const req = {};

        const res = {
            json: jest.fn(),
        };
        mock.onGet(baseUrl + endpoint);
        // Calling the getGenres function
        await getGenres(req, res);

        // Assertions
        expect(res.json).not.toEqual(data);
    });
});

describe("getTrendingMovies", () => {
    let mock = new MockAdapter(axios);
    it("should get trending movies and match the data", async () => {
        const data = {
            "urlPrefix": "https://image.tmdb.org/t/p/w500/",
            "data": [
                {
                    "adult": false,
                    "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
                    "id": 866398,
                    "title": "The Beekeeper",
                    "original_language": "en",
                    "original_title": "The Beekeeper",
                    "overview": "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
                    "poster_path": "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        28,
                        53,
                        18
                    ],
                    "popularity": 936.355,
                    "release_date": "2024-01-10",
                    "video": false,
                    "vote_average": 7.261,
                    "vote_count": 1206
                },
                {
                    "adult": false,
                    "backdrop_path": "/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
                    "id": 572802,
                    "title": "Aquaman and the Lost Kingdom",
                    "original_language": "en",
                    "original_title": "Aquaman and the Lost Kingdom",
                    "overview": "Black Manta seeks revenge on Aquaman for his father's death. Wielding the Black Trident's power, he becomes a formidable foe. To defend Atlantis, Aquaman forges an alliance with his imprisoned brother. They must protect the kingdom.",
                    "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        28,
                        12,
                        14
                    ],
                    "popularity": 1036,
                    "release_date": "2023-12-20",
                    "video": false,
                    "vote_average": 6.897,
                    "vote_count": 1720
                },
                {
                    "adult": false,
                    "backdrop_path": "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
                    "id": 787699,
                    "title": "Wonka",
                    "original_language": "en",
                    "original_title": "Wonka",
                    "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
                    "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        35,
                        10751,
                        14
                    ],
                    "popularity": 1523.973,
                    "release_date": "2023-12-06",
                    "video": false,
                    "vote_average": 7.204,
                    "vote_count": 2175
                },
                {
                    "adult": false,
                    "backdrop_path": "/A0EqMM4WZpzfxpdoDoqICCpzSQ1.jpg",
                    "id": 609681,
                    "title": "The Marvels",
                    "original_language": "en",
                    "original_title": "The Marvels",
                    "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
                    "poster_path": "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        878,
                        12,
                        28
                    ],
                    "popularity": 1316.793,
                    "release_date": "2023-11-08",
                    "video": false,
                    "vote_average": 6.28,
                    "vote_count": 1777
                },
                {
                    "adult": false,
                    "backdrop_path": "/zW0v2YT74C6tRafzqqBkfSqLAN0.jpg",
                    "id": 52814,
                    "name": "Halo",
                    "original_language": "en",
                    "original_name": "Halo",
                    "overview": "Depicting an epic 26th-century conflict between humanity and an alien threat known as the Covenant, the series weaves deeply drawn personal stories with action, adventure and a richly imagined vision of the future.",
                    "poster_path": "/hmHA5jqxN3ESIAGx0jAwV7TJhTQ.jpg",
                    "media_type": "tv",
                    "genre_ids": [
                        10759,
                        10765
                    ],
                    "popularity": 2537.63,
                    "first_air_date": "2022-03-24",
                    "vote_average": 8.311,
                    "vote_count": 2200,
                    "origin_country": [
                        "US"
                    ]
                },
                {
                    "adult": false,
                    "backdrop_path": "/siA2d4PNn4JVFZAwfIYx4pnKCaK.jpg",
                    "id": 46648,
                    "name": "True Detective",
                    "original_language": "en",
                    "original_name": "True Detective",
                    "overview": "An American anthology police detective series utilizing multiple timelines in which investigations seem to unearth personal and professional secrets of those involved, both within or outside the law.",
                    "poster_path": "/cuV2O5ZyDLHSOWzg3nLVljp1ubw.jpg",
                    "media_type": "tv",
                    "genre_ids": [
                        18
                    ],
                    "popularity": 1144.067,
                    "first_air_date": "2014-01-12",
                    "vote_average": 8.322,
                    "vote_count": 3045,
                    "origin_country": [
                        "US"
                    ]
                },
                {
                    "adult": false,
                    "backdrop_path": "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
                    "id": 1072790,
                    "title": "Anyone But You",
                    "original_language": "en",
                    "original_title": "Anyone But You",
                    "overview": "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
                    "poster_path": "/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        35,
                        10749
                    ],
                    "popularity": 664.351,
                    "release_date": "2023-12-21",
                    "video": false,
                    "vote_average": 6.93,
                    "vote_count": 461
                },
                {
                    "adult": false,
                    "backdrop_path": "/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
                    "id": 792307,
                    "title": "Poor Things",
                    "original_language": "en",
                    "original_title": "Poor Things",
                    "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
                    "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        878,
                        10749,
                        35
                    ],
                    "popularity": 610.946,
                    "release_date": "2023-12-07",
                    "video": false,
                    "vote_average": 8.1,
                    "vote_count": 1254
                },
                {
                    "adult": false,
                    "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
                    "id": 872585,
                    "title": "Oppenheimer",
                    "original_language": "en",
                    "original_title": "Oppenheimer",
                    "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
                    "poster_path": "/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        18,
                        36
                    ],
                    "popularity": 594.229,
                    "release_date": "2023-07-19",
                    "video": false,
                    "vote_average": 8.1,
                    "vote_count": 6738
                },
                {
                    "adult": false,
                    "backdrop_path": "/6snBXmgkscLEJQmxx46qEIlqYlB.jpg",
                    "id": 46518,
                    "name": "Masters of the Air",
                    "original_language": "en",
                    "original_name": "Masters of the Air",
                    "overview": "During World War II, airmen risk their lives with the 100th Bomb Group, a brotherhood forged by courage, loss, and triumph.",
                    "poster_path": "/rSAmgcoA74371rplbqM27yVsd3y.jpg",
                    "media_type": "tv",
                    "genre_ids": [
                        10768,
                        18
                    ],
                    "popularity": 646.025,
                    "first_air_date": "2024-01-25",
                    "vote_average": 7.8,
                    "vote_count": 93,
                    "origin_country": [
                        "US"
                    ]
                },
                {
                    "adult": false,
                    "backdrop_path": "/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg",
                    "id": 37854,
                    "name": "One Piece",
                    "original_language": "ja",
                    "original_name": "ワンピース",
                    "overview": "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a \"Devil Fruit,\" decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!",
                    "poster_path": "/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
                    "media_type": "tv",
                    "genre_ids": [
                        10759,
                        35,
                        16
                    ],
                    "popularity": 213.781,
                    "first_air_date": "1999-10-20",
                    "vote_average": 8.728,
                    "vote_count": 4322,
                    "origin_country": [
                        "JP"
                    ]
                },
                {
                    "adult": false,
                    "backdrop_path": "/uhUO7vQQKvCTfQWubOt5MAKokbL.jpg",
                    "id": 693134,
                    "title": "Dune: Part Two",
                    "original_language": "en",
                    "original_title": "Dune: Part Two",
                    "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
                    "poster_path": "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        878,
                        12
                    ],
                    "popularity": 322.111,
                    "release_date": "2024-02-27",
                    "video": false,
                    "vote_average": 0,
                    "vote_count": 0
                },
                {
                    "adult": false,
                    "backdrop_path": "/3mpgltEMgPf8zFtPnAWdDVN8ZT1.jpg",
                    "id": 1056360,
                    "title": "American Fiction",
                    "original_language": "en",
                    "original_title": "American Fiction",
                    "overview": "A novelist fed up with the establishment profiting from \"Black\" entertainment uses a pen name to write a book that propels him into the heart of hypocrisy and the madness he claims to disdain.",
                    "poster_path": "/57MFWGHarg9jid7yfDTka4RmcMU.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        35,
                        18
                    ],
                    "popularity": 94.342,
                    "release_date": "2023-11-10",
                    "video": false,
                    "vote_average": 7.3,
                    "vote_count": 190
                },
                {
                    "adult": false,
                    "backdrop_path": "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
                    "id": 940551,
                    "title": "Migration",
                    "original_language": "en",
                    "original_title": "Migration",
                    "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
                    "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        16,
                        28,
                        12,
                        35,
                        10751
                    ],
                    "popularity": 1128.747,
                    "release_date": "2023-12-06",
                    "video": false,
                    "vote_average": 7.626,
                    "vote_count": 678
                },
                {
                    "adult": false,
                    "backdrop_path": "/y3sKoItrKZdVEfPeLyoE9m5OG2v.jpg",
                    "id": 695721,
                    "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
                    "original_language": "en",
                    "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
                    "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
                    "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        18,
                        878,
                        28
                    ],
                    "popularity": 899.398,
                    "release_date": "2023-11-15",
                    "video": false,
                    "vote_average": 7.196,
                    "vote_count": 1801
                },
                {
                    "adult": false,
                    "backdrop_path": "/pRmF6VBsRnvWCbLB9P80UvZFMyK.jpg",
                    "id": 1014590,
                    "title": "Upgraded",
                    "original_language": "en",
                    "original_title": "Upgraded",
                    "overview": "Ana is an ambitious intern dreaming of a career in the art world while trying to impress her demanding boss Claire. When she's upgraded to first class on a work trip, she meets handsome Will, who mistakes Ana for her boss– a white lie that sets off a glamorous chain of events, romance and opportunity, until her fib threatens to surface.",
                    "poster_path": "/9xn7y63VIpUsIVzSP9fYrqJHyl9.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        10749,
                        35
                    ],
                    "popularity": 1031.19,
                    "release_date": "2024-02-07",
                    "video": false,
                    "vote_average": 7.411,
                    "vote_count": 331
                },
                {
                    "adult": false,
                    "backdrop_path": "/8te0oIAuUOxi03RbM1SfL3xUYHB.jpg",
                    "id": 848538,
                    "title": "Argylle",
                    "original_language": "en",
                    "original_title": "Argylle",
                    "overview": "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
                    "poster_path": "/siduVKgOnABO4WH4lOwPQwaGwJp.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        35,
                        28,
                        80
                    ],
                    "popularity": 191.07,
                    "release_date": "2024-01-31",
                    "video": false,
                    "vote_average": 6.139,
                    "vote_count": 273
                },
                {
                    "adult": false,
                    "backdrop_path": "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
                    "id": 1022796,
                    "title": "Wish",
                    "original_language": "en",
                    "original_title": "Wish",
                    "overview": "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
                    "poster_path": "/nesuSdJakNkf0zs7OfoasB6Clxf.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        16,
                        10751,
                        14,
                        12
                    ],
                    "popularity": 1064.875,
                    "release_date": "2023-11-13",
                    "video": false,
                    "vote_average": 6.64,
                    "vote_count": 751
                },
                {
                    "adult": false,
                    "backdrop_path": "/leVOmOabRRWgdhUDNFQhpOAa5s3.jpg",
                    "id": 118642,
                    "name": "Mr. & Mrs. Smith",
                    "original_language": "en",
                    "original_name": "Mr. & Mrs. Smith",
                    "overview": "Meet the Smiths: two lonely strangers, John and Jane, who have given up their lives and identities to be thrown together as partners – both in espionage and in marriage",
                    "poster_path": "/kvJvGxsDLi3MmHzc9nregyJtOWY.jpg",
                    "media_type": "tv",
                    "genre_ids": [
                        10759,
                        35,
                        18
                    ],
                    "popularity": 287.192,
                    "first_air_date": "2024-02-01",
                    "vote_average": 6.2,
                    "vote_count": 94,
                    "origin_country": [
                        "US"
                    ]
                },
                {
                    "adult": false,
                    "backdrop_path": "/4l65BWqJBl7hBwdIwp2nQdwsOuw.jpg",
                    "id": 850165,
                    "title": "The Iron Claw",
                    "original_language": "en",
                    "original_title": "The Iron Claw",
                    "overview": "The true story of the inseparable Von Erich brothers, who made history in the intensely competitive world of professional wrestling in the early 1980s. Through tragedy and triumph, under the shadow of their domineering father and coach, the brothers seek larger-than-life immortality on the biggest stage in sports.",
                    "poster_path": "/nfs7DCYhgrEIgxKYbITHTzKsggf.jpg",
                    "media_type": "movie",
                    "genre_ids": [
                        18,
                        36
                    ],
                    "popularity": 362.266,
                    "release_date": "2023-12-21",
                    "video": false,
                    "vote_average": 7.549,
                    "vote_count": 236
                }
            ]
        }
        const req = { params: { category: 'all', time_window: 'week' } };

        const res = {
            json: jest.fn(),
        };
        mock.onGet(baseUrl + `netflix/trending/${req.params.category}/${req.params.time_window}`);
        // Calling the getTrendingMovies function
        await getTrendingMovies(req, res);

        // Assertions
        expect(res.json).toHaveBeenCalledWith(data);

    });

    it("should not match the data", async () => {
        const data = {};
        const req = { params: { category: 'all', time_window: 'week' } };

        const res = {
            json: jest.fn(),
        };
        mock.onGet(baseUrl + `/trending/${req.params.category}/${req.params.time_window}`);
        // Calling the getTrendingMovies function
        await getTrendingMovies(req, res);

        // Assertions
        expect(res.json).not.toEqual(data);
    });
});

describe("getPopularMovies", () => {
    let mock = new MockAdapter(axios);
    it("should get popular movies and match the data", async () => {
        const data = {
            "urlPrefix": "https://image.tmdb.org/t/p/w500/",
            "data": [
                {
                    "adult": false,
                    "backdrop_path": "/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg",
                    "genre_ids": [
                        878,
                        28,
                        18
                    ],
                    "id": 933131,
                    "original_language": "ko",
                    "original_title": "황야",
                    "overview": "After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
                    "popularity": 2140.707,
                    "poster_path": "/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg",
                    "release_date": "2024-01-26",
                    "title": "Badland Hunters",
                    "video": false,
                    "vote_average": 6.744,
                    "vote_count": 435
                },
                {
                    "adult": false,
                    "backdrop_path": "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
                    "genre_ids": [
                        35,
                        10751,
                        14
                    ],
                    "id": 787699,
                    "original_language": "en",
                    "original_title": "Wonka",
                    "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
                    "popularity": 1523.973,
                    "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
                    "release_date": "2023-12-06",
                    "title": "Wonka",
                    "video": false,
                    "vote_average": 7.204,
                    "vote_count": 2175
                },
                {
                    "adult": false,
                    "backdrop_path": "/unvtbkgxh47BewQ8pENvdOdme0r.jpg",
                    "genre_ids": [
                        28,
                        18
                    ],
                    "id": 1212073,
                    "original_language": "de",
                    "original_title": "60 Minuten",
                    "overview": "Desperate to keep custody of his daughter, a mixed martial arts fighter abandons a big match and races across Berlin to attend her birthday party.",
                    "popularity": 1467.616,
                    "poster_path": "/jojfbnIHGsRpodIood3OQoqA45Y.jpg",
                    "release_date": "2024-01-19",
                    "title": "Sixty Minutes",
                    "video": false,
                    "vote_average": 6.869,
                    "vote_count": 370
                },
                {
                    "adult": false,
                    "backdrop_path": "/s9YTxwaByYeoSqugYjJJtZjMRAG.jpg",
                    "genre_ids": [
                        28,
                        27,
                        35,
                        53
                    ],
                    "id": 1211483,
                    "original_language": "en",
                    "original_title": "Skal - Fight for Survival",
                    "overview": "My name's Arthur, a huge Internet star who's just hit 3 million subs. While in the midst of throwing an epic party to celebrate, the universe had the balls to bring on the effing apocalypse and cut my night short. What was supposed to be a perfect hangover, has turned into an epic fight for survival.",
                    "popularity": 1390.13,
                    "poster_path": "/uQkiDKQyun13mqsOXv7I5MRKr0q.jpg",
                    "release_date": "2023-11-24",
                    "title": "Skal - Fight for Survival",
                    "video": false,
                    "vote_average": 6.1,
                    "vote_count": 26
                },
                {
                    "adult": false,
                    "backdrop_path": "/uUiIGztTrfDhPdAFJpr6m4UBMAd.jpg",
                    "genre_ids": [
                        878,
                        28,
                        12
                    ],
                    "id": 634492,
                    "original_language": "en",
                    "original_title": "Madame Web",
                    "overview": "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
                    "popularity": 1292.366,
                    "poster_path": "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
                    "release_date": "2024-02-14",
                    "title": "Madame Web",
                    "video": false,
                    "vote_average": 5.417,
                    "vote_count": 175
                },
                {
                    "adult": false,
                    "backdrop_path": "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
                    "genre_ids": [
                        28,
                        35
                    ],
                    "id": 1029575,
                    "original_language": "en",
                    "original_title": "The Family Plan",
                    "overview": "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
                    "popularity": 1327.834,
                    "poster_path": "/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
                    "release_date": "2023-12-14",
                    "title": "The Family Plan",
                    "video": false,
                    "vote_average": 7.3,
                    "vote_count": 942
                },
                {
                    "adult": false,
                    "backdrop_path": "/A0EqMM4WZpzfxpdoDoqICCpzSQ1.jpg",
                    "genre_ids": [
                        878,
                        12,
                        28
                    ],
                    "id": 609681,
                    "original_language": "en",
                    "original_title": "The Marvels",
                    "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
                    "popularity": 1316.793,
                    "poster_path": "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
                    "release_date": "2023-11-08",
                    "title": "The Marvels",
                    "video": false,
                    "vote_average": 6.3,
                    "vote_count": 1776
                },
                {
                    "adult": false,
                    "backdrop_path": "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
                    "genre_ids": [
                        16,
                        28,
                        12,
                        35,
                        10751
                    ],
                    "id": 940551,
                    "original_language": "en",
                    "original_title": "Migration",
                    "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
                    "popularity": 1128.747,
                    "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
                    "release_date": "2023-12-06",
                    "title": "Migration",
                    "video": false,
                    "vote_average": 7.629,
                    "vote_count": 676
                },
                {
                    "adult": false,
                    "backdrop_path": "/ay0PJQZizDXk0pzhoGX4v7K9h7A.jpg",
                    "genre_ids": [
                        28,
                        53
                    ],
                    "id": 1214314,
                    "original_language": "en",
                    "original_title": "One More Shot",
                    "overview": "Following the attack on the black site in Poland, Navy SEAL Jake Harris is ordered to escort terrorist suspect Amin Mansur to Washington D.C. for interrogation. Before the prisoner transfer process is complete, though, the airport is attacked by a group of heavily armed, well-trained mercenaries.",
                    "popularity": 1244.613,
                    "poster_path": "/nQ1BQg4yMdlYSHvHZgwladzy7EF.jpg",
                    "release_date": "2024-01-12",
                    "title": "One More Shot",
                    "video": false,
                    "vote_average": 6.6,
                    "vote_count": 149
                },
                {
                    "adult": false,
                    "backdrop_path": "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
                    "genre_ids": [
                        28,
                        35,
                        80
                    ],
                    "id": 955916,
                    "original_language": "en",
                    "original_title": "Lift",
                    "overview": "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
                    "popularity": 1154.363,
                    "poster_path": "/46sp1Z9b2PPTgCMyA87g9aTLUXi.jpg",
                    "release_date": "2024-01-10",
                    "title": "Lift",
                    "video": false,
                    "vote_average": 6.592,
                    "vote_count": 814
                },
                {
                    "adult": false,
                    "backdrop_path": "/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
                    "genre_ids": [
                        28,
                        12,
                        14
                    ],
                    "id": 572802,
                    "original_language": "en",
                    "original_title": "Aquaman and the Lost Kingdom",
                    "overview": "Black Manta seeks revenge on Aquaman for his father's death. Wielding the Black Trident's power, he becomes a formidable foe. To defend Atlantis, Aquaman forges an alliance with his imprisoned brother. They must protect the kingdom.",
                    "popularity": 1036,
                    "poster_path": "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
                    "release_date": "2023-12-20",
                    "title": "Aquaman and the Lost Kingdom",
                    "video": false,
                    "vote_average": 6.9,
                    "vote_count": 1719
                },
                {
                    "adult": false,
                    "backdrop_path": "/pRmF6VBsRnvWCbLB9P80UvZFMyK.jpg",
                    "genre_ids": [
                        10749,
                        35
                    ],
                    "id": 1014590,
                    "original_language": "en",
                    "original_title": "Upgraded",
                    "overview": "Ana is an ambitious intern dreaming of a career in the art world while trying to impress her demanding boss Claire. When she's upgraded to first class on a work trip, she meets handsome Will, who mistakes Ana for her boss– a white lie that sets off a glamorous chain of events, romance and opportunity, until her fib threatens to surface.",
                    "popularity": 1031.19,
                    "poster_path": "/9xn7y63VIpUsIVzSP9fYrqJHyl9.jpg",
                    "release_date": "2024-02-07",
                    "title": "Upgraded",
                    "video": false,
                    "vote_average": 7.427,
                    "vote_count": 329
                },
                {
                    "adult": false,
                    "backdrop_path": "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
                    "genre_ids": [
                        16,
                        10751,
                        14,
                        12
                    ],
                    "id": 1022796,
                    "original_language": "en",
                    "original_title": "Wish",
                    "overview": "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
                    "popularity": 1064.875,
                    "poster_path": "/nesuSdJakNkf0zs7OfoasB6Clxf.jpg",
                    "release_date": "2023-11-13",
                    "title": "Wish",
                    "video": false,
                    "vote_average": 6.64,
                    "vote_count": 751
                },
                {
                    "adult": false,
                    "backdrop_path": "/y3sKoItrKZdVEfPeLyoE9m5OG2v.jpg",
                    "genre_ids": [
                        18,
                        878,
                        28
                    ],
                    "id": 695721,
                    "original_language": "en",
                    "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
                    "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
                    "popularity": 899.398,
                    "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
                    "release_date": "2023-11-15",
                    "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
                    "video": false,
                    "vote_average": 7.199,
                    "vote_count": 1799
                },
                {
                    "adult": false,
                    "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
                    "genre_ids": [
                        28,
                        53,
                        18
                    ],
                    "id": 866398,
                    "original_language": "en",
                    "original_title": "The Beekeeper",
                    "overview": "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
                    "popularity": 936.355,
                    "poster_path": "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
                    "release_date": "2024-01-10",
                    "title": "The Beekeeper",
                    "video": false,
                    "vote_average": 7.261,
                    "vote_count": 1204
                },
                {
                    "adult": false,
                    "backdrop_path": "/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg",
                    "genre_ids": [
                        28,
                        80,
                        53,
                        18
                    ],
                    "id": 891699,
                    "original_language": "en",
                    "original_title": "Silent Night",
                    "overview": "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
                    "popularity": 789.272,
                    "poster_path": "/nJCP1ZNTPKlZ7S0Kv3gbmuraAT4.jpg",
                    "release_date": "2023-11-30",
                    "title": "Silent Night",
                    "video": false,
                    "vote_average": 6.3,
                    "vote_count": 476
                },
                {
                    "adult": false,
                    "backdrop_path": "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
                    "genre_ids": [
                        878,
                        18,
                        28
                    ],
                    "id": 848326,
                    "original_language": "en",
                    "original_title": "Rebel Moon - Part One: A Child of Fire",
                    "overview": "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
                    "popularity": 916.567,
                    "poster_path": "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
                    "release_date": "2023-12-15",
                    "title": "Rebel Moon - Part One: A Child of Fire",
                    "video": false,
                    "vote_average": 6.405,
                    "vote_count": 1470
                },
                {
                    "adult": false,
                    "backdrop_path": "/yl2GfeCaPoxChcGyM5p7vYp1CKS.jpg",
                    "genre_ids": [
                        28,
                        35,
                        10749
                    ],
                    "id": 848187,
                    "original_language": "en",
                    "original_title": "Role Play",
                    "overview": "Emma has a wonderful husband and two kids in the suburbs of New Jersey – she also has a secret life as an assassin for hire – a secret that her husband David discovers when the couple decide to spice up their marriage with a little role play.",
                    "popularity": 798.374,
                    "poster_path": "/7MhXiTmTl16LwXNPbWCmqxj7UxH.jpg",
                    "release_date": "2024-01-04",
                    "title": "Role Play",
                    "video": false,
                    "vote_average": 6,
                    "vote_count": 359
                },
                {
                    "adult": false,
                    "backdrop_path": "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
                    "genre_ids": [
                        28,
                        35
                    ],
                    "id": 897087,
                    "original_language": "en",
                    "original_title": "Freelance",
                    "overview": "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
                    "popularity": 727.949,
                    "poster_path": "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
                    "release_date": "2023-10-05",
                    "title": "Freelance",
                    "video": false,
                    "vote_average": 6.55,
                    "vote_count": 565
                },
                {
                    "adult": false,
                    "backdrop_path": "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
                    "genre_ids": [
                        36,
                        10752,
                        28,
                        18
                    ],
                    "id": 753342,
                    "original_language": "en",
                    "original_title": "Napoleon",
                    "overview": "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
                    "popularity": 724.285,
                    "poster_path": "/vcZWJGvB5xydWuUO1vaTLI82tGi.jpg",
                    "release_date": "2023-11-22",
                    "title": "Napoleon",
                    "video": false,
                    "vote_average": 6.5,
                    "vote_count": 1684
                }
            ]

        }
        const req = {};

        const res = {
            json: jest.fn(),
        };
        mock.onGet(baseUrl + `netflix/movie/popular`);
        // Calling the getPopularMovies function
        await getPopularMovies(req, res);

        // Assertions
        expect(res.json).toHaveBeenCalledWith(data);

    });

    it("should not match the data", async () => {
        const data = {};
        const req = {};

        const res = {
            json: jest.fn(),
        };
        mock.onGet(baseUrl + `/movie/popular`);
        // Calling the getPopularMovies function
        await getPopularMovies(req, res);

        // Assertions
        expect(res.json).not.toEqual(data);
    });
});

describe("fetchDataByGenre", () => {
    let mock = new MockAdapter(axios);
    it("should get data by genre and match the data", async () => {
        const data = {
            "urlPrefix": "https://image.tmdb.org/t/p/w500/",
            "data": [
                {
                    "adult": false,
                    "backdrop_path": "/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg",
                    "genre_ids": [
                        878,
                        28,
                        18
                    ],
                    "id": 933131,
                    "original_language": "ko",
                    "original_title": "황야",
                    "overview": "After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
                    "popularity": 2140.707,
                    "poster_path": "/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg",
                    "release_date": "2024-01-26",
                    "title": "Badland Hunters",
                    "video": false,
                    "vote_average": 6.742,
                    "vote_count": 433
                },
                {
                    "adult": false,
                    "backdrop_path": "/unvtbkgxh47BewQ8pENvdOdme0r.jpg",
                    "genre_ids": [
                        28,
                        18
                    ],
                    "id": 1212073,
                    "original_language": "de",
                    "original_title": "60 Minuten",
                    "overview": "Desperate to keep custody of his daughter, a mixed martial arts fighter abandons a big match and races across Berlin to attend her birthday party.",
                    "popularity": 1467.616,
                    "poster_path": "/jojfbnIHGsRpodIood3OQoqA45Y.jpg",
                    "release_date": "2024-01-19",
                    "title": "Sixty Minutes",
                    "video": false,
                    "vote_average": 6.875,
                    "vote_count": 369
                },
                {
                    "adult": false,
                    "backdrop_path": "/y3sKoItrKZdVEfPeLyoE9m5OG2v.jpg",
                    "genre_ids": [
                        18,
                        878,
                        28
                    ],
                    "id": 695721,
                    "original_language": "en",
                    "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
                    "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
                    "popularity": 899.398,
                    "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
                    "release_date": "2023-11-15",
                    "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
                    "video": false,
                    "vote_average": 7.199,
                    "vote_count": 1799
                },
                {
                    "adult": false,
                    "backdrop_path": "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
                    "genre_ids": [
                        28,
                        53,
                        18
                    ],
                    "id": 866398,
                    "original_language": "en",
                    "original_title": "The Beekeeper",
                    "overview": "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
                    "popularity": 936.355,
                    "poster_path": "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
                    "release_date": "2024-01-10",
                    "title": "The Beekeeper",
                    "video": false,
                    "vote_average": 7.259,
                    "vote_count": 1203
                },
                {
                    "adult": false,
                    "backdrop_path": "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
                    "genre_ids": [
                        878,
                        18,
                        28
                    ],
                    "id": 848326,
                    "original_language": "en",
                    "original_title": "Rebel Moon - Part One: A Child of Fire",
                    "overview": "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
                    "popularity": 916.567,
                    "poster_path": "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
                    "release_date": "2023-12-15",
                    "title": "Rebel Moon - Part One: A Child of Fire",
                    "video": false,
                    "vote_average": 6.406,
                    "vote_count": 1468
                },
                {
                    "adult": false,
                    "backdrop_path": "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
                    "genre_ids": [
                        36,
                        10752,
                        28,
                        18
                    ],
                    "id": 753342,
                    "original_language": "en",
                    "original_title": "Napoleon",
                    "overview": "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
                    "popularity": 724.285,
                    "poster_path": "/vcZWJGvB5xydWuUO1vaTLI82tGi.jpg",
                    "release_date": "2023-11-22",
                    "title": "Napoleon",
                    "video": false,
                    "vote_average": 6.5,
                    "vote_count": 1684
                },
                {
                    "adult": false,
                    "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
                    "genre_ids": [
                        18,
                        36
                    ],
                    "id": 872585,
                    "original_language": "en",
                    "original_title": "Oppenheimer",
                    "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
                    "popularity": 594.229,
                    "poster_path": "/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
                    "release_date": "2023-07-19",
                    "title": "Oppenheimer",
                    "video": false,
                    "vote_average": 8.117,
                    "vote_count": 6733
                },
                {
                    "adult": false,
                    "backdrop_path": "/1ZSKH5GGFlM8M32K34GMdaNS2Ew.jpg",
                    "genre_ids": [
                        10402,
                        18
                    ],
                    "id": 802219,
                    "original_language": "en",
                    "original_title": "Bob Marley: One Love",
                    "overview": "Jamaican singer-songwriter Bob Marley overcomes adversity to become the most famous reggae musician in the world.",
                    "popularity": 481.028,
                    "poster_path": "/1lQftpEARVVB9op4TaYiIbactzG.jpg",
                    "release_date": "2024-02-14",
                    "title": "Bob Marley: One Love",
                    "video": false,
                    "vote_average": 6.935,
                    "vote_count": 69
                },
                {
                    "adult": false,
                    "backdrop_path": "/pW1sEV4R2GL99OoUq73Pvf7r7Ce.jpg",
                    "genre_ids": [
                        16,
                        35,
                        18
                    ],
                    "id": 24238,
                    "original_language": "en",
                    "original_title": "Mary and Max",
                    "overview": "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York.",
                    "popularity": 426.431,
                    "poster_path": "/b4LKlquh0ls5Rgb27QLPlkC7Oya.jpg",
                    "release_date": "2009-02-09",
                    "title": "Mary and Max",
                    "video": false,
                    "vote_average": 7.849,
                    "vote_count": 1846
                },
                {
                    "adult": false,
                    "backdrop_path": "/su7FqHdZez0oOvpZAbV7P6BGq0R.jpg",
                    "genre_ids": [
                        28,
                        80,
                        18,
                        53
                    ],
                    "id": 939335,
                    "original_language": "en",
                    "original_title": "Muzzle",
                    "overview": "LAPD K-9 officer Jake Rosser has just witnessed the shocking murder of his dedicated partner by a mysterious assailant. As he investigates the shooter’s identity, he uncovers a vast conspiracy that has a chokehold on the city in this thrilling journey through the tangled streets of Los Angeles and the corrupt bureaucracy of the LAPD.",
                    "popularity": 465.404,
                    "poster_path": "/qXChf7MFL36BgoLkiB3BzXiwW82.jpg",
                    "release_date": "2023-09-29",
                    "title": "Muzzle",
                    "video": false,
                    "vote_average": 6.468,
                    "vote_count": 171
                },
                {
                    "adult": false,
                    "backdrop_path": "/xvzxqKWltnj6qSiWBXRq6ZCdcrw.jpg",
                    "genre_ids": [
                        53,
                        18
                    ],
                    "id": 1151534,
                    "original_language": "es",
                    "original_title": "Nowhere",
                    "overview": "A young pregnant woman named Mia escapes from a country at war by hiding in a maritime container aboard a cargo ship. After a violent storm, Mia gives birth to the child while lost at sea, where she must fight to survive.",
                    "popularity": 465.7,
                    "poster_path": "/cVxIX8JJJB179zh7wcUt0A6TpQQ.jpg",
                    "release_date": "2023-09-29",
                    "title": "Nowhere",
                    "video": false,
                    "vote_average": 7.46,
                    "vote_count": 1124
                },
                {
                    "adult": false,
                    "backdrop_path": "/4l65BWqJBl7hBwdIwp2nQdwsOuw.jpg",
                    "genre_ids": [
                        18,
                        36
                    ],
                    "id": 850165,
                    "original_language": "en",
                    "original_title": "The Iron Claw",
                    "overview": "The true story of the inseparable Von Erich brothers, who made history in the intensely competitive world of professional wrestling in the early 1980s. Through tragedy and triumph, under the shadow of their domineering father and coach, the brothers seek larger-than-life immortality on the biggest stage in sports.",
                    "popularity": 362.266,
                    "poster_path": "/nfs7DCYhgrEIgxKYbITHTzKsggf.jpg",
                    "release_date": "2023-12-21",
                    "title": "The Iron Claw",
                    "video": false,
                    "vote_average": 7.5,
                    "vote_count": 235
                },
                {
                    "adult": false,
                    "backdrop_path": "/H41DJiw7Q8xn6bWC75eyaavp9L.jpg",
                    "genre_ids": [
                        878,
                        12,
                        18,
                        9648
                    ],
                    "id": 943134,
                    "original_language": "fr",
                    "original_title": "Le Règne animal",
                    "overview": "In a world hit by a wave of mutations transforming humans into animals, François does everything he can to save his wife. As some of the creatures disappear into a nearby forest, he and their son Émile embark on a quest that will change their lives forever.",
                    "popularity": 364.132,
                    "poster_path": "/39AiQnXlXOjoqBSkiUpTG80rXLw.jpg",
                    "release_date": "2023-10-04",
                    "title": "The Animal Kingdom",
                    "video": false,
                    "vote_average": 7.193,
                    "vote_count": 285
                },
                {
                    "adult": false,
                    "backdrop_path": "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
                    "genre_ids": [
                        18,
                        36
                    ],
                    "id": 906126,
                    "original_language": "es",
                    "original_title": "La sociedad de la nieve",
                    "overview": "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
                    "popularity": 398.448,
                    "poster_path": "/2e853FDVSIso600RqAMunPxiZjq.jpg",
                    "release_date": "2023-12-13",
                    "title": "Society of the Snow",
                    "video": false,
                    "vote_average": 8.084,
                    "vote_count": 1954
                },
                {
                    "adult": false,
                    "backdrop_path": "/hIeEpk2w1dnC9ly9ZJwwbunH2Cx.jpg",
                    "genre_ids": [
                        16,
                        35,
                        18,
                        10751
                    ],
                    "id": 838240,
                    "original_language": "es",
                    "original_title": "Robot Dreams",
                    "overview": "Dog lives in Manhattan and he's tired of being alone. One day he decides to build himself a robot, a companion. Their friendship blossoms, until they become inseparable, to the rhythm of 80's NYC. One summer night, Dog, with great sadness, is forced to abandon Robot at the beach. Will they ever meet again?",
                    "popularity": 350.349,
                    "poster_path": "/qLtK6DFeuJNuB3THGVDklirhQ8u.jpg",
                    "release_date": "2023-10-20",
                    "title": "Robot Dreams",
                    "video": false,
                    "vote_average": 7.153,
                    "vote_count": 59
                },
                {
                    "adult": false,
                    "backdrop_path": "/6sGJzdJjdoJBBJ8oQCkQthHJEUF.jpg",
                    "genre_ids": [
                        28,
                        18
                    ],
                    "id": 1178734,
                    "original_language": "ja",
                    "original_title": "ナックルガール",
                    "overview": "Following the story of Ran, who confronts a mysterious organization by participating in a no-rules deathmatch after discovering her missing younger sister Yuzuki is involved in a crime. With danger at every corner, Ran must trade in her boxing gloves for brass knuckles. Will she save her sister?",
                    "popularity": 304.786,
                    "poster_path": "/3mQ8tK7xpx95nq0RslW91RPbB5Y.jpg",
                    "release_date": "2023-10-25",
                    "title": "Knuckle Girl",
                    "video": false,
                    "vote_average": 6.808,
                    "vote_count": 26
                },
                {
                    "adult": false,
                    "backdrop_path": "/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg",
                    "genre_ids": [
                        12,
                        28,
                        18
                    ],
                    "id": 980489,
                    "original_language": "en",
                    "original_title": "Gran Turismo",
                    "overview": "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
                    "popularity": 325.607,
                    "poster_path": "/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
                    "release_date": "2023-08-09",
                    "title": "Gran Turismo",
                    "video": false,
                    "vote_average": 7.921,
                    "vote_count": 1991
                },
                {
                    "adult": false,
                    "backdrop_path": "/lntyt4OVDbcxA1l7LtwITbrD3FI.jpg",
                    "genre_ids": [
                        18,
                        10749
                    ],
                    "id": 1010581,
                    "original_language": "es",
                    "original_title": "Culpa mía",
                    "overview": "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
                    "popularity": 251.494,
                    "poster_path": "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
                    "release_date": "2023-06-08",
                    "title": "My Fault",
                    "video": false,
                    "vote_average": 8.029,
                    "vote_count": 2263
                },
                {
                    "adult": false,
                    "backdrop_path": "/efro4duB7agkA2Xl5LmkD3HeCim.jpg",
                    "genre_ids": [
                        28,
                        53,
                        18
                    ],
                    "id": 818511,
                    "original_language": "pt",
                    "original_title": "Carga Máxima",
                    "overview": "When truck racer Roger loses everything, he receives a tempting but dangerous offer: to work as the getaway driver for a gang of thieves.",
                    "popularity": 280.963,
                    "poster_path": "/6yx14lSACNJ2zRoYyXqecf3QNgr.jpg",
                    "release_date": "2023-09-27",
                    "title": "Overhaul",
                    "video": false,
                    "vote_average": 6.772,
                    "vote_count": 116
                },
                {
                    "adult": false,
                    "backdrop_path": "/P3GAbRjzVo9RKU4WxzvtgwlITc.jpg",
                    "genre_ids": [
                        28,
                        18
                    ],
                    "id": 678512,
                    "original_language": "en",
                    "original_title": "Sound of Freedom",
                    "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
                    "popularity": 296.647,
                    "poster_path": "/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg",
                    "release_date": "2023-07-03",
                    "title": "Sound of Freedom",
                    "video": false,
                    "vote_average": 8.054,
                    "vote_count": 1972
                }
            ]
        }
        const req = { params: { type: 'movie' }, query: { genre: 18 } };

        const res = {
            json: jest.fn(),
        };
        mock.onGet(baseUrl + `netflix/discover/${req.params.type}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${req.query.genre}`);
        // Calling the fetchDataByGenre function
        await fetchDataByGenre(req, res);

        // Assertions
        expect(res.json).toHaveBeenCalledWith(data);

    });

    it("should not match the data", async () => {
        const data = {};
        const req = { params: { type: 'movie' }, query: { genre: 18 } };;

        const res = {
            json: jest.fn(),
        };
        mock.onGet(baseUrl + `netflix/discover/${req.params.type}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${req.query.genre}`);
        // Calling the fetchDataByGenre function
        await fetchDataByGenre(req, res);

        // Assertions
        expect(res.json).not.toEqual(data);
    });
});

describe("getMovieById", () => {
    let mock = new MockAdapter(axios);
    it("should get data and match the data", async () => {
        const data = {
            "urlPrefix": "https://image.tmdb.org/t/p/w500/",
            "data": {
                "adult": false,
                "backdrop_path": "/29MxMzZlBcLk0O3emOt8TWU1Odw.jpg",
                "belongs_to_collection": {
                    "id": 690968,
                    "name": "Mazzaropi Collection",
                    "poster_path": "/pVO30Orq3a9dSNVz64clL3DxlAV.jpg",
                    "backdrop_path": "/i9o2O8muynKirjqamTvnP6xzNn3.jpg"
                },
                "budget": 0,
                "genres": [
                    {
                        "id": 35,
                        "name": "Comedy"
                    }
                ],
                "homepage": "",
                "id": 192918,
                "imdb_id": "tt0191209",
                "original_language": "pt",
                "original_title": "O Jeca Macumbeiro",
                "overview": "Pirola is a poor guy who lives with his son Ze in a hovel on his boss's farm. One day, Pirola is surprised by the visit of an old friend who, feeling that the hour of his death approaches, decides to present him with a bag full of money.",
                "popularity": 0.71,
                "poster_path": "/uEnAkonmjhqJb4VDoO2JJUgJB5H.jpg",
                "production_companies": [
                    {
                        "id": 14011,
                        "logo_path": null,
                        "name": "Produções Amacio Mazzaropi (PAM Filmes)",
                        "origin_country": "BR"
                    }
                ],
                "production_countries": [
                    {
                        "iso_3166_1": "BR",
                        "name": "Brazil"
                    }
                ],
                "release_date": "1975-05-11",
                "revenue": 0,
                "runtime": 87,
                "spoken_languages": [
                    {
                        "english_name": "Portuguese",
                        "iso_639_1": "pt",
                        "name": "Português"
                    }
                ],
                "status": "Released",
                "tagline": "",
                "title": "O Jeca Macumbeiro",
                "video": false,
                "vote_average": 5.8,
                "vote_count": 4
            }
        }
        const req = { params: { movie_id: 192918 } };

        const res = {
            json: jest.fn(),
        };

        mock.onGet(baseUrl + `netflix/movie/${req.params.movie_id}`);

        // Calling the getMovieById function
        await getMovieById(req, res);

        // Assertions
        expect(res.json).toHaveBeenCalledWith(data);

    });

    it("should not match the data", async () => {
        const data = {};
        const req = { params: { movie_id: 157336 } };;

        const res = {
            json: jest.fn(),
        };
        mock.onGet(baseUrl + `netflix/movie/${req.params.movie_id}`);
        // Calling the getGenres function
        await getMovieById(req, res);

        // Assertions
        expect(res.json).not.toEqual(data);
    });
});

describe("getShowById", () => {
    let mock = new MockAdapter(axios);
    it("should get data and match the data", async () => {
        const data = {
            "urlPrefix": "https://image.tmdb.org/t/p/w500/",
            "data": {
                "adult": false,
                "backdrop_path": "/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg",
                "created_by": [
                    {
                        "id": 66633,
                        "credit_id": "52542286760ee31328001a7b",
                        "name": "Vince Gilligan",
                        "gender": 2,
                        "profile_path": "/z3E0DhBg1V1PZVEtS9vfFPzOWYB.jpg"
                    }
                ],
                "episode_run_time": [],
                "first_air_date": "2008-01-20",
                "genres": [
                    {
                        "id": 18,
                        "name": "Drama"
                    },
                    {
                        "id": 80,
                        "name": "Crime"
                    }
                ],
                "homepage": "https://www.sonypictures.com/tv/breakingbad",
                "id": 1396,
                "in_production": false,
                "languages": [
                    "en",
                    "de",
                    "es"
                ],
                "last_air_date": "2013-09-29",
                "last_episode_to_air": {
                    "id": 62161,
                    "name": "Felina",
                    "overview": "All bad things must come to an end.",
                    "vote_average": 9.2,
                    "vote_count": 205,
                    "air_date": "2013-09-29",
                    "episode_number": 16,
                    "episode_type": "finale",
                    "production_code": "",
                    "runtime": 56,
                    "season_number": 5,
                    "show_id": 1396,
                    "still_path": "/pA0YwyhvdDXP3BEGL2grrIhq8aM.jpg"
                },
                "name": "Breaking Bad",
                "next_episode_to_air": null,
                "networks": [
                    {
                        "id": 174,
                        "logo_path": "/alqLicR1ZMHMaZGP3xRQxn9sq7p.png",
                        "name": "AMC",
                        "origin_country": "US"
                    }
                ],
                "number_of_episodes": 62,
                "number_of_seasons": 5,
                "origin_country": [
                    "US"
                ],
                "original_language": "en",
                "original_name": "Breaking Bad",
                "overview": "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
                "popularity": 421.507,
                "poster_path": "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
                "production_companies": [
                    {
                        "id": 11073,
                        "logo_path": "/wHs44fktdoj6c378ZbSWfzKsM2Z.png",
                        "name": "Sony Pictures Television Studios",
                        "origin_country": "US"
                    },
                    {
                        "id": 33742,
                        "logo_path": null,
                        "name": "High Bridge Productions",
                        "origin_country": "US"
                    },
                    {
                        "id": 2605,
                        "logo_path": null,
                        "name": "Gran Via Productions",
                        "origin_country": "US"
                    }
                ],
                "production_countries": [
                    {
                        "iso_3166_1": "US",
                        "name": "United States of America"
                    }
                ],
                "seasons": [
                    {
                        "air_date": "2009-02-17",
                        "episode_count": 10,
                        "id": 3577,
                        "name": "Specials",
                        "overview": "",
                        "poster_path": "/40dT79mDEZwXkQiZNBgSaydQFDP.jpg",
                        "season_number": 0,
                        "vote_average": 0
                    },
                    {
                        "air_date": "2008-01-20",
                        "episode_count": 7,
                        "id": 3572,
                        "name": "Season 1",
                        "overview": "High school chemistry teacher Walter White's life is suddenly transformed by a dire medical diagnosis. Street-savvy former student Jesse Pinkman \"teaches\" Walter a new trade.",
                        "poster_path": "/1BP4xYv9ZG4ZVHkL7ocOziBbSYH.jpg",
                        "season_number": 1,
                        "vote_average": 8.3
                    },
                    {
                        "air_date": "2009-03-08",
                        "episode_count": 13,
                        "id": 3573,
                        "name": "Season 2",
                        "overview": "Walt must deal with the chain reaction of his choice, as he and Jesse face new and severe consequences. When danger and suspicion around Walt escalate, he is pushed to new levels of desperation. Just how much higher will the stakes rise? How far is Walt willing to go to ensure his family's security? Will his grand plan spiral out of control?",
                        "poster_path": "/e3oGYpoTUhOFK0BJfloru5ZmGV.jpg",
                        "season_number": 2,
                        "vote_average": 8.4
                    },
                    {
                        "air_date": "2010-03-21",
                        "episode_count": 13,
                        "id": 3575,
                        "name": "Season 3",
                        "overview": "Walt continues to battle dueling identities: a desperate husband and father trying to provide for his family, and a newly appointed key player in the Albuquerque drug trade. As the danger around him escalates, Walt is now entrenched in the complex worlds of an angst-ridden family on the verge of dissolution, and the ruthless and unrelenting drug cartel.",
                        "poster_path": "/ffP8Q8ew048YofHRnFVM18B2fPG.jpg",
                        "season_number": 3,
                        "vote_average": 8.4
                    },
                    {
                        "air_date": "2011-07-17",
                        "episode_count": 13,
                        "id": 3576,
                        "name": "Season 4",
                        "overview": "Walt and Jesse must cope with the fallout of their previous actions, both personally and professionally. Tension mounts as Walt faces a true standoff with his employer, Gus, with neither side willing or able to back down. Walt must also adjust to a new relationship with Skyler, whom while still reconciling her relationship with Walt, is committed to properly laundering Walt’s money and ensuring her sister Marie and an ailing Hank are financially stable.",
                        "poster_path": "/5ewrnKp4TboU4hTLT5cWO350mHj.jpg",
                        "season_number": 4,
                        "vote_average": 8.5
                    },
                    {
                        "air_date": "2012-07-15",
                        "episode_count": 16,
                        "id": 3578,
                        "name": "Season 5",
                        "overview": "Walt is faced with the prospect of moving on in a world without his enemy. As the pressure of a criminal life starts to build, Skyler struggles to keep Walt’s terrible secrets. Facing resistance from sometime adversary and former Fring lieutenant Mike, Walt tries to keep his world from falling apart even as his DEA Agent brother in law, Hank, finds numerous leads that could blaze a path straight to Walt. ",
                        "poster_path": "/r3z70vunihrAkjILQKWHX0G2xzO.jpg",
                        "season_number": 5,
                        "vote_average": 8.9
                    }
                ],
                "spoken_languages": [
                    {
                        "english_name": "English",
                        "iso_639_1": "en",
                        "name": "English"
                    },
                    {
                        "english_name": "German",
                        "iso_639_1": "de",
                        "name": "Deutsch"
                    },
                    {
                        "english_name": "Spanish",
                        "iso_639_1": "es",
                        "name": "Español"
                    }
                ],
                "status": "Ended",
                "tagline": "Change the equation.",
                "type": "Scripted",
                "vote_average": 8.901,
                "vote_count": 13136
            }
        }
        const req = { params: { series_id: 1396 } };

        const res = {
            json: jest.fn(),
        };

        mock.onGet(baseUrl + `netflix/tv/${req.params.series_id}`);

        // Calling the getShowById function
        await getShowById(req, res);

        // Assertions
        expect(res.json).toHaveBeenCalledWith(data);

    });

    it("should not match the data", async () => {
        const data = {};
        const req = { params: { series_id: 1396 } };;

        const res = {
            json: jest.fn(),
        };
        mock.onGet(baseUrl + `netflix/tv/${req.params.series_id}`);
        // Calling the getShowById function
        await getShowById(req, res);

        // Assertions
        expect(res.json).not.toEqual(data);
    });
});

describe("getMovieReviewsById", () => {
    let mock = new MockAdapter(axios);
    it("should get data and match the data", async () => {
        const data = {
            "urlPrefix": "https://image.tmdb.org/t/p/w500/",
            "data": {
                "id": 157336,
                "page": 1,
                "results": [
                    {
                        "author": "Reno",
                        "author_details": {
                            "name": "Reno",
                            "username": "Rangan",
                            "avatar_path": "/6ZpVUJzqXMzH35VprEtnX0sNI3.jpg",
                            "rating": 9
                        },
                        "content": "Well, one off from two of this year's most expected movies alongside 'The Battle of Five Armies'. Like all the Chris Nolan fans, I was equally excited to see the movie on the opening day opening show. But I slightly disappointed that it was not a digital 3D film. I agree, this science-fiction was more dramatized than usual space travel stories does with an adventure-thriller. Almost a 3 hour long stretch movie did not waste much time to take us to the core of the story. Get prepared for this extremely rare voyage into the space with a logical explanation for everything you see on the screen. Well done research for the most matured and intelligent writing. All the credit must go to Nolan brothers. A good sign from Jonathan Nolan, who can make big in the entertainment industry in a future like his brother.\r\n\r\nAs we know many had liked 'Inception', to me that was a simple multi-layered action movie, that's all. But the same stuffs that used in this film makes sense. In fact, you have to have a little knowledge over how the universe works, so then it will be easy to catch the scene and situations while watching the movie. Totally like a documentary style concept, but with the additional stuffs like characters and its emotions add flavor that gives a movie look. An educational movie, though it also can work for those who wants just entertainment. Only the slow movie pace would test their patience.\r\n\r\nIt all begins like Shyamalan's 'Signs' movie with a family living surrounded by corn field. Then switches to 'The Astronaut Farmer' and going through 'Gravity', finally meets the 'Inception'. It was just a reference to call the movie setting that brings constant change for every half an hour. Like the opening scene and the end scene had over a 100 years difference.\r\n\r\nAs I earlier said it was the story of a family alongside the future of humankind and decoding universal mysteries through travelling in space and time. This movie would a reasonable for those who thought '2001: A Space Odyssey' is a boring piece, Cleverly written cinematic piece especially for science geeks. I don't know how perfect the movie to the actual present astrophysics, but will justify for the common people's capacity of understanding with an encourageable amount of commercial elements in it to entertain as well.\r\n\r\nThe first three quarters of the movie was well made. It puts me in a unblinkable position like a story was narrated by Brian Cox in a television series. Like I said, lots of astrophysics involved in it, but strangely human emotions were also exhibited equally that I never expected one from Nolan film. It was not an ordinary sentiment, but was strong enough to make a man cry for happy and sad situations in the movie. I liked science and emotion coming together. In fact, it saved the movie, otherwise it would have been a science documentary straight from NASA production through Nolan direction.\r\n\r\nThere are many surprise elements in the movie and of course there is a twist at the end. We can call it a series of twists like the layers. Compared to last quarter of the movie to the rest, it completely detaches which opens broadly to the different directions. And that happens so fast rushing towards the other end. Which give an impression of the movie 'Inception'. In a perfect way to say the first 75% was 'The Tree of Life' and the remains are 'Inception'.\r\n\r\n‘‘This world's a treasure,\r\nbut it's been telling us to leave for a while now.’’\r\n\r\nAll the actors were so good. Matthew McConaughey steals the show as he dominates the majority of the screen space in the story presentation. There's no ruling out the fine performance executions from Anne Hathaway and the young star from the Twilight movie, Mackenzie Foy. The remaining cast was having less scope which were like the guest appearances that was widened a little broader, but was perfectly fitted for the story. Especially Matt Damon's was the crucial one.\r\n\r\nRemember the movie 'Contact', a lovely movie, which was ruined by its fictional ending. Something like that happened in this film as well. The story was initiated with a realistic approach with actual scientific contents as per the present understanding about the universe. But the end was let me down with the layered contents that kind of impossible to agree with it. As a cinematic theme it worked, yeah, a good solution for this wonderfully written story. We know that the time can't run backwards, so that's the trouble.\r\n\r\nAnyway, this movie defines in a new way, I mean scientifically the existence of ghost. It was not a horror movie, but I liked supernatural force that merged with this science fiction theme. That explains and gives vast ideas to expand our physics beyond something and somewhere yet to reach. Hats off to the director, because he was not thinking of making money here. His idea was to implement what the humans are understood so far about the cosmos. And he very nicely transformed those into the silver screen with the blend of human emotions. In my opinion, this will replace '2001: A Space Odyssey' for sometime till another one make this way.\r\n\r\nI could have not asked a better space travel drama than this, especially when I heard Nolan doing a science-fiction I believed he gonna rock it. He was so true to the science and the human feelings in this film. If you had seen enough movies before like this one, you can recall your memories like the Tom Hanks parts from 'Cloud Atlas'. But still independently stands strong and falls in a never seen before category.\r\n\r\n‘‘Maybe we've spent too long\r\ntrying to figure all this out with theory.’’\r\n\r\nThe end scene leaves a hint of a possible sequel. I would be happy if that happen in a near future, but definitely that would be a completely different cinema as per how this one ended. I know his fans want that to happen and so am I.\r\n\r\nThe visuals were not that great, but simply very good. To see those in digital 3D would have given us a different experience, sadly Nolan was not in favor of that technology. Hoping this movie would get as many as the Oscars nod. Especially not getting into the best motion picture shortlist would be a shame. Like I said I'm no one fan, I just love watching everyone's every movie. I would have went to see it again if it was converted into digital 3D, since I'm modern tech geek when it comes to the films.\r\n\r\nIt will become a talk of the week, perhaps month all over the world, so don't leave behind when your friends talk about it. What I gonna say is it is a must see asap if you are a movie fanatic like me otherwise Nolan movies does not need anyone's recommendation because his movies usually sell itself like the hot samosa.",
                        "created_at": "2014-11-12T16:06:04.927Z",
                        "id": "5463856c0e0a267815002598",
                        "updated_at": "2021-06-23T15:57:30.674Z",
                        "url": "https://www.themoviedb.org/review/5463856c0e0a267815002598"
                    },
                    {
                        "author": "decovision",
                        "author_details": {
                            "name": "",
                            "username": "decovision",
                            "avatar_path": null,
                            "rating": 9.5
                        },
                        "content": "People seem to think that if you enjoy a Christopher Nolan movie, you are a fanboy and the film couldn't really be that good. That is not true. He has never made a bad movie, Insomnia is probably his worst and it is still an excellent movie. \r\nInterstellar is up there in his top 3, with The Dark Knight being number 1 and Inception in number 2. I don't think he will ever make a better movie than The Dark Knight, it is without a doubt a masterpiece of cinema in my opinion. It can be enjoyed on so many levels.\r\nI remember seeing Interstellar in the movie theater and being on the edge of my seat the whole time. It was breathtaking but the end left me confused so i walked out disappointed. \r\nSince then i have watched it many times but it only took a second viewing to realize what a great ending it is and here is why. How many people discuss the end, was the wormhole open or closed for him to make it to Brand, what happens next, is there a sequel. I discuss this with people who hate the movie and the debate will still last a good 30 minutes if not more without getting heated. It is a wonderful story told through the eyes of a genius film maker who deserves more than he receives, an oscar would be nice start.\r\nI read hat his next movie is to be released in July 2017, I can't wait to find out everything about it like i have since he began.\r\nIf you're unsure about Christopher Nolan, watch his career from the beginning starting with Doodlebug.",
                        "created_at": "2015-09-12T14:49:33.669Z",
                        "id": "55f43b7dc3a3686d03003292",
                        "updated_at": "2021-06-23T15:57:37.019Z",
                        "url": "https://www.themoviedb.org/review/55f43b7dc3a3686d03003292"
                    },
                    {
                        "author": "Andres Gomez",
                        "author_details": {
                            "name": "Andres Gomez",
                            "username": "tanty",
                            "avatar_path": null,
                            "rating": 7
                        },
                        "content": "Another grandiloquent movie from Christoper Nolan.\r\n\r\nThe cast is good, and McConaughey performs a role made for himself. The photography is very nice but the movie commits all the same mistakes than previous Nolan's movies. I think mistakes but it may be that they are the points Nolan fans enjoy the most ...\r\n\r\n* The story makes you believe it is a realy deeply thought plot but, in the end, it has so basic mistakes and stupidities that make it nonsensical.\r\n* There is a general ambience of every moment being epic; deep, solemn and smart dialogues but, at some point our highly trained engineer and pilot behaves really stupidly.\r\n* To keep the mentioned constant feeling of being in an epic moment, Nolan uses a thumping and insistent soundtrack. As it is not a moment, but a 3h movie, it is really tiresome.\r\n\r\nAll in all, the movie is OK but you can only think this is a great movie if you are a real Nolan fan.",
                        "created_at": "2015-10-31T12:07:03.650Z",
                        "id": "5634aee792514129fe009d2c",
                        "updated_at": "2021-06-23T15:57:38.241Z",
                        "url": "https://www.themoviedb.org/review/5634aee792514129fe009d2c"
                    },
                    {
                        "author": "Asadullah Khan",
                        "author_details": {
                            "name": "Asadullah Khan",
                            "username": "Spartan117",
                            "avatar_path": null,
                            "rating": 10
                        },
                        "content": "\"Man kind was born on earth, it was never meant to die here.\"\r\n\r\nIT has been two days since I watched it and I still can't get it out of my head. I can safely say that it has been a long LONG time since a movie had this much effect on me after watching it. And the only thing I can think of now is to somehow Re-Watch it again.\r\n\r\nThis movie was surprisingly different from Christopher Nolan's recent works because they had been great cinematic entertainment pieces catered to a wider audience with a blockbuster approach, this certainly didn't felt like that and hence the polarizing response it got. It is an ambitious project that is not meant to merely entertain, walk into it knowing that. I'll say this though, If it works for you, you'll be in heaven.\r\n\r\nThe premise of the movie is that Earth is no longer capable of supporting humans on it, we must find a new home to avoid extinction. This scenario is told from a very personal perspective and not from a Global scale like some sort of apocalyptic catastrophe disaster film. At the core of the movie is the Father-Daughter relationship. The movie takes its sweet time to develop it too.\r\n\r\nMathew McConaughey, not surprisingly, gives an amazing performance as the main lead. He really carries the film, some scenes were very emotional due to his great performance. The rest of the cast does a great job as well, especially the Daughter played by Meckenzie Foy. The One character that I never expected to be great was the robot TARS. He also acted as the source of the humor in the movie, well executed, timely and grounded.\r\n\r\nInterstellar tackles a lot of themes, Survival, Humankind, Love, Time etc, out of which 'Time' had the biggest impact on me. With relativity being a big part in the film, the whole sequence about it just struck me very deeply and I found new respect for Time. I'm actually at a loss of words to describe it. Also, there is a lot science in it so it can be confusing for many and in Nolan's tradition, it also has twists and mind numbing ending, where the more you think about it, the more numbing it gets.\r\n\r\nThe visuals of this movie are breathtaking. Great cinematography and CGI. The depiction of wormholes and blackholes and other space entities were the best I have ever seen. They just suck you into the movie. Along with that, you get to listen to one of Hans Zimmer's best scores. The score not only felt personal, going perfectly with the movie, but also different from his recent works. There were times where combination of epic photography and soundtrack made the scenes timeless, like I was completely sucked into it and didn't had a clue about my surroundings. I didn't want those scenes to end.\r\n\r\nAlas, the movie was not perfect. My biggest gripe with it is that the pacing and editing was off at times. Some scenes dragged on while others were cut far shorter. The beautiful views of space could have definitely benefited from a few seconds longer onscreen time. Also, I wished there was more space exploration in it.\r\n\r\nWith all the remakes, rehashes, reboots and sequels we are getting in these times, it is great to see original gems like these. This movie is definitely one of this year's best, one of Nolan's best work and one of the best movie I have seen in recent years.\r\n\r\n9.5/10",
                        "created_at": "2016-10-19T20:49:49.259Z",
                        "id": "5807dc6dc3a3680f2d00319f",
                        "updated_at": "2021-06-23T15:57:51.694Z",
                        "url": "https://www.themoviedb.org/review/5807dc6dc3a3680f2d00319f"
                    },
                    {
                        "author": "shaunfrombklyn",
                        "author_details": {
                            "name": "",
                            "username": "shaunfrombklyn",
                            "avatar_path": "/y898c19QvGWWvEGzEvx4h71lS26.jpg",
                            "rating": 10
                        },
                        "content": "This was my most anticipated film of 2014, and I was not disappointed. \r\n\r\nThe story was slightly difficult to follow on the first watch, but that was to be expected in a film dealing with complicated fields such as astrophysics and time dilation. Many didn't find its overall message - that love is the most powerful force in the universe which transcends space and time - to be very appealing, but I thought it was an interesting take on special relativity and how two people can be bound by a common feeling, even when they're in different parts of the universe at different times. I also thought the acting was believable, for the most part, and I didn't think anyone was miscast. I enjoyed the surprise appearance from a certain famous actor about halfway through.\r\n\r\nBut what really blew me away were the visuals and the soundtrack. I believe it was Quentin Tarantino who once said movies and music go hand in hand; that a moving image complimented by the right piece of music can create art. Well, the visuals in this film, which took my breath away, and the score, which perfectly captured the 'feel' of the cosmos and all its wonder, proved him right. I think this was Hans Zimmer's best work yet, and although I'm not Christopher Nolan's biggest fan, I will continue to follow his work if he can pull off more movies like this. \r\n\r\nMy only regret was not seeing this film in IMAX.\r\n\r\n10/10",
                        "created_at": "2017-02-15T14:34:47.716Z",
                        "id": "58a46707c3a3686cc200458c",
                        "updated_at": "2021-06-23T15:57:54.211Z",
                        "url": "https://www.themoviedb.org/review/58a46707c3a3686cc200458c"
                    },
                    {
                        "author": "Per Gunnar Jonsson",
                        "author_details": {
                            "name": "Per Gunnar Jonsson",
                            "username": "Dark Jedi",
                            "avatar_path": null,
                            "rating": 4
                        },
                        "content": "That this movie, at the time of writing this, holds an 8.8 rating at IMDb is simply beyond my understanding. Needless to say I did not really like this movie. The story is not very good, the science is ludicrous and the visuals not all that impressive. Maybe the latter would be better in a big theater (I watched this on my home cinema system which has a relatively large screen by European standards) but I am not really sure about that either.\r\n\r\nBe warned that the rest of this review might contain a spoiler or two.\r\n\r\nThe movie starts of with the usual “I told you so” wet dream of the green fanatics on a dying Earth so it is off to a depressing start right away. That is an overused concept today as far as I am concerned. Then they pour it on with a school official claiming that he Apollo missions and moon landings never happened. What the f…? If they wanted to depress the audience right from the start they succeeded, at least with this audience.\r\n\r\nThe story proceeds with our heroes finding these gravity waves in the sand and by a huge stretch of imagination decrypts them to mean coordinates which leads them to the secret NASA base. Once there Cooper is told that he is their best choice of pilot for a “save the human race” mission through a wormhole. Yeah, right! This guy was former NASA. His whereabouts could hardly been unknown to them. If he was their best choice why would they entrust a mission to save the human race to someone else until he stumbled onto their door? Typical Hollywood nonsense!\r\n\r\nThe movie is full of this kind of rubbish. Romilly wastes 23 years of his life doing pretty much nothing except deciding not to go into the sleep capsule. The supposedly highly trained and vetted professor that they do find turns out to be a psychopath as well as and idiot almost blowing up the ship when trying to proceed with a docking that all the systems tells him have not succeeded. Then they proceed to dock with the main ship and stop its spin as well as bring it out of orbit around a planet with the shuttles engines. That is one hell of a powerful shuttle not to mention the strength of the docking mechanism! This just goes on. When someone is not doing something illogical or stupid (or both) they sit around talking, philosophizing and dragging the movie forward at snails pace. 169 minutes is way too much for this movie.\r\n\r\nThe movie ends up in one big time travel mess (okay they do not travel in time, just sends messages through time but still…) during a bunch of psychedelic scenes while traveling through the back hole. Science? Not so much. And what about this totally ludicrous massively illogical and inefficient robot design?\r\n\r\nThe one good thing I can say about this movie is that the performance of most of the actors, especially Matthew McConaughey, are quite good. For the rest, not my cup of tea.",
                        "created_at": "2017-12-21T17:11:31.469Z",
                        "id": "5a3beb430e0a264cbc23212a",
                        "updated_at": "2021-06-23T15:58:03.524Z",
                        "url": "https://www.themoviedb.org/review/5a3beb430e0a264cbc23212a"
                    },
                    {
                        "author": "akashmahajan",
                        "author_details": {
                            "name": "",
                            "username": "akashmahajan",
                            "avatar_path": null,
                            "rating": null
                        },
                        "content": "Again hit produced by christopher nolan after batman.\r\nStoryline is great and also the science theory is perfectly showcased.",
                        "created_at": "2018-11-01T17:58:15.939Z",
                        "id": "5bdb3eb7c3a3680785012584",
                        "updated_at": "2021-06-23T15:58:14.175Z",
                        "url": "https://www.themoviedb.org/review/5bdb3eb7c3a3680785012584"
                    },
                    {
                        "author": "sybddlatfu",
                        "author_details": {
                            "name": "",
                            "username": "sybddlatfu",
                            "avatar_path": null,
                            "rating": null
                        },
                        "content": "This might contain spoilers!\r\n---\r\nInterstellar is my favorite movie. I'm really into space and everything about it, so this movie was my cup of tea. \r\nThe soundtrack is the best of the movie. It points out flow of time, which is the most discussed issue in the movie. Special effects are breathtaking. Even with some small mistakes, it is pretty accurate and expectable. There is some visually pleasing cinematography too, including Saturn, the curvature of spacetime or majestic black hole, which is really satisfying. Some scenes are loud and thrilling, but some moments are so quiet, that you actually think, you are in space!\r\nThe movie is long but gripping. The plot, although it's complicated, is told easily and understandably. But the end of the movie is difficult to understand, since it contains time loop and time travel at the same time, but if you listen carefully, you will get it. I watched the movie 7 times and I still enjoy it!",
                        "created_at": "2020-01-20T18:22:37.679Z",
                        "id": "5e25efed5294e70015637fe2",
                        "updated_at": "2021-06-23T15:58:33.072Z",
                        "url": "https://www.themoviedb.org/review/5e25efed5294e70015637fe2"
                    },
                    {
                        "author": "Matthew Brady",
                        "author_details": {
                            "name": "Matthew Brady",
                            "username": "MatthewL.Brady",
                            "avatar_path": "/k5J0l25FXOCw4TcX6iWaJmYpCZ4.jpg",
                            "rating": 9
                        },
                        "content": "\"Do not go gentle into that good night; Old age should burn and rave at close of day. Rage, rage against the dying of the light\".\r\n\r\nThe story is about a team of explorers undertakes the most important mission in human history; traveling beyond this galaxy to discover whether mankind has a future among the stars.\r\n\r\nChristopher Nolan once said that 2001: A Space Odyssey was his all time favorite film and how he wanted to do a small tribute to he's next film. And then comes a movie called \"Interstellar\" that will put a smile on Kubrick face if he was alive today, because Interstellar is one of the best movie of 2014 and the best movie experience I've had at the cinema.\r\n\r\nI saw this movie in IMAX and all through out this film I felt like I was in space floating around with Mconaughey and Anne Hathaway. I had that feeling that I was going deep into space just like are main character's, going deep into space just like the viewing auditions and me.\r\n\r\nThe visual effect's in this movie are some of the most stunning, beautiful and Jaw dropping effect's I've seen since 2001: A Space Odyssey. The performances were brilliant, The cinematography was breathtaking and hard to look away. The directing by Christopher Nolan and let me get this out there, this man is a true director; he knows cinema and knows how to interested people into seeing he's films and I'm still shocked that he hasn't won an Oscar yet.\r\n\r\nNow most people or critics have said that last third of this movie ruined the movie for them, but I actually like the ending to the movie. It's new for Nolan because he always ends on a deep and cold note, but this movie didn't and I didn't mind it.\r\n\r\nMy only nick pick with the movie is some of the character's in this movie wasn't all that interesting. Matthew McConaughey, Anne Hathaway and Jessica Chastain are the only character's that to me were interesting and I cared for them, but the rest of the character's I didn't really care for.\r\n\r\nOverall Interstellar is a mind-blowing movie with fantastic visual's, interesting story line and the movie will keep you interested till the end.",
                        "created_at": "2020-01-27T18:22:32.008Z",
                        "id": "5e2f2a6898f1f1000ffd19cc",
                        "updated_at": "2021-06-23T15:58:33.522Z",
                        "url": "https://www.themoviedb.org/review/5e2f2a6898f1f1000ffd19cc"
                    },
                    {
                        "author": "Peter McGinn",
                        "author_details": {
                            "name": "Peter McGinn",
                            "username": "narrator56",
                            "avatar_path": "/tVbrLJzA2RwRlE7dJLJG54UsAkq.jpg",
                            "rating": 9
                        },
                        "content": "I will not add another in depth review to the several I see here on this movie. Nor will I try to evaluate the accuracy of the science behind the plot. Apparently a physicist was involved who had veto power if the script wandered out of the realm of what is at least theoretically true or possible.\r\n\r\nBut I have never let inaccuracies get in the way of enjoying science fiction movies anyway, as long as the movie is entertaining and otherwise doesn’t insult my intelligence. In the movie Monsters, for example, I read that giant the aliens looking like octopuses could not have walked upright. Fair enough, but it is entertainment, not a documentary.\r\n\r\nSo the human story of Interstellar held my attention in spite of the length of the film, and despite the elaborate special effects, that story drove the movie and my appreciation of it. I have always liked good time travel movies as well, and theories of space and time come into play in Interstellar as well.\r\n\r\nOh, and I say it is entertainment rather than a documentary, but it is not light entertainment. If you want to give this movie a fair chance, give it your full attention. It is not Mars Attacks, where you can watch it while distracted by life and still pick up on  plot details.",
                        "created_at": "2021-11-02T07:34:59.885Z",
                        "id": "6180ea233e2ec8008d18ddfb",
                        "updated_at": "2021-11-02T07:34:59.885Z",
                        "url": "https://www.themoviedb.org/review/6180ea233e2ec8008d18ddfb"
                    },
                    {
                        "author": "kheirnandez",
                        "author_details": {
                            "name": "",
                            "username": "kheirnandez",
                            "avatar_path": "/aEEqFa3ADd4aoVfCAqOqiuXY87D.jpg",
                            "rating": 10
                        },
                        "content": "I've got to say I have been wanting to watch this film for a while now and well it's 2021 and it's a Saturday morning and damn, safe to say this is one of the best films I have ever watched in my life. loved everything about It. The creativity and intelligence put into this film is just mind-blowing considering the fact it is a 2014 film. This clearly shows that mankind will one day achieve the most unexpected and unthought discoveries.\r\nLove and respect to the director Christopher Nolan you are a legend.",
                        "created_at": "2021-11-06T13:48:57.037Z",
                        "id": "618687c91fd36f008fb1f8cb",
                        "updated_at": "2021-11-29T15:54:34.619Z",
                        "url": "https://www.themoviedb.org/review/618687c91fd36f008fb1f8cb"
                    },
                    {
                        "author": "lowkimhoe",
                        "author_details": {
                            "name": "",
                            "username": "lowkimhoe",
                            "avatar_path": null,
                            "rating": 9
                        },
                        "content": "It opens my mind after I watched this movie. I have watched it twice to figure out everything on the movie. Basically, this is the movie talking about earth is not a good place to stay anymore. People have to go to space to find another homeland. It reminds me that we will be like them if we didn't care much on environment",
                        "created_at": "2022-06-26T07:22:45.679Z",
                        "id": "62b809457352050c23f46af1",
                        "updated_at": "2022-07-15T14:35:45.168Z",
                        "url": "https://www.themoviedb.org/review/62b809457352050c23f46af1"
                    },
                    {
                        "author": "CinemaSerf",
                        "author_details": {
                            "name": "CinemaSerf",
                            "username": "Geronimo1967",
                            "avatar_path": "/1kks3YnVkpyQxzw36CObFPvhL5f.jpg",
                            "rating": 7
                        },
                        "content": "As humanity faces an existential crisis, farmer \"Cooper\" (Matthew McConaughey) and his family are fighting a losing battle against an environment determined to destroy what is left of their corn crop. Mystery arrives after a sand storm leaves some magnetic clues to a secret location inhabited by NASA scientists led by \"Brand\" (Sir Michael Caine) who manage to convince former pilot \"Coop\" to join a mission to go into space and, using a recently detected wormhole that he believes may have been deliberately sent to help mankind rescue itself, set off to find another home for us all. Leaving a seriously narked daughter behind, he accepts the mission and together with the daughter of \"Brand\" (Anne Hathaway) their perilous trek begins. This is a more solid sci-fi adventure from Christopher Nolan. Though it features doses of his usual time bending scenarios, for the most part it is an exciting action film with mishaps a-plenty as their mission sees danger at just about every junction. There is a decent chemistry between Hathaway and McConaughey allowing the characters to develop with some depth that helps to draw us into to their efforts. The visual effects are superb, it has TARS - a rather clunkily designed robot that proves a whizz when running and rescuing, and the ending has something of the Escher drawing to it. The narrative can be thought provoking offering quite an interesting series of choices, especially when Matt Damon (\"Mann\") joins the story and begins to challenge their approach to just what \"humanity\" might actually be! A host of celebrated co-stars prop it up well. John Lithgow is effective as the patriarch of the family and Casey Affleck and Wes Bentley help diffuse the intensity of the principal relationship as the space-bound menace gradually accumulates. It's all but three hours long, and there is no denying that it hits a barren spell at times during the middle hour, but for my money this is a Nolan film that does not over-complicate itself and is as good a science fiction thriller as I've seen in many a year.",
                        "created_at": "2022-07-29T06:55:09.512Z",
                        "id": "62e3844dc8a5ac005fb6633c",
                        "updated_at": "2022-07-29T06:55:09.565Z",
                        "url": "https://www.themoviedb.org/review/62e3844dc8a5ac005fb6633c"
                    },
                    {
                        "author": "tropicalicecedar",
                        "author_details": {
                            "name": "",
                            "username": "tropicalicecedar",
                            "avatar_path": null,
                            "rating": null
                        },
                        "content": "This mind-bending sci-fi masterpiece took me on an unforgettable journey through space and time. From its breathtaking visuals to the captivating performances, the film had me hooked from start to finish. I couldn't help but be inspired by its thought-provoking themes about love, sacrifice, and the boundless nature of human exploration. \"Interstellar\" truly left me in awe and is an absolute must-watch for any movie enthusiast.",
                        "created_at": "2023-07-26T17:58:09.794Z",
                        "id": "64c15eb12f1be0010c81e134",
                        "updated_at": "2023-07-27T15:34:30.597Z",
                        "url": "https://www.themoviedb.org/review/64c15eb12f1be0010c81e134"
                    },
                    {
                        "author": "r96sk",
                        "author_details": {
                            "name": "",
                            "username": "r96sk",
                            "avatar_path": "/mwR7rFHoDcobAx1i61I3skzMW3U.jpg",
                            "rating": 10
                        },
                        "content": "What a cracker!\r\n\r\nSo glad to finally tick <em>'Interstellar'</em> off my theoretical list, took me far too long to get around to it but boy am I glad I finally have done - sensational film! The most obvious sign of that being the case is how the ~2hr30min run time goes by in an absolute flash... <em>*insert joke about it like being aboard Endurance here*</em>\r\n\r\nI'm obviously not able to add anything new to what many, many others have already said gushingly about this 2014 flick, so I can only say I'm sure I agree with the vast majority of whatever praise this has received. As one would expect from Christopher Nolan & Co., it's incredibly well made, sounds amazing and looks out-of-this-world (ha!) stunning.\r\n\r\nMatthew McConaughey puts in an incredible performance as lead, most notably nailing all of the emotion-filled scenes - not that I care about these things personally, but I'm shocked to see the lack of high accolades that came his way from this... he merited more! Aside from him, there are very good showings from the likes of Jessica Chastain, Mackenzie Foy and Anne Hathaway.\r\n\r\nI will note one 'but', mind. I didn't love the bits at the end involving the dimensional tesseract, don't get me wrong at all it's still superb viewing... just a noticeable drop from all that preceeds it, which honestly simply says more about how outstanding everything else prior is really. I thought similarly about (the equally magnificent) <em>'<a href=\"https://letterboxd.com/film/everything-everywhere-all-at-once/\" rel=\"nofollow\">Everything Everywhere All at Once</a>'</em>, for example. In short: just a nit-pick, tbh.\r\n\r\nAll in all, phenomenal!",
                        "created_at": "2024-01-02T02:06:00.945Z",
                        "id": "65936f88d5191f02410f3bf3",
                        "updated_at": "2024-01-02T02:08:03.480Z",
                        "url": "https://www.themoviedb.org/review/65936f88d5191f02410f3bf3"
                    }
                ],
                "total_pages": 1,
                "total_results": 15
            }
        }
        const req = { params: { movie_id: 157336 } };

        const res = {
            json: jest.fn(),
        };

        mock.onGet(baseUrl + `netflix/movie/${req.params.movie_id}/reviews&language=en-US`);

        // Calling the getMovieReviewsById function
        await getMovieReviewsById(req, res);

        // Assertions
        expect(res.json).toHaveBeenCalledWith(data);

    });

    it("should not match the data", async () => {
        const data = {};
        const req = { params: { movie_id: 157336 } };;

        const res = {
            json: jest.fn(),
        };
        mock.onGet(baseUrl + `netflix/movie/${req.params.movie_id}/reviews&language=en-US`);
        // Calling the getMovieReviewsById function
        await getMovieReviewsById(req, res);

        // Assertions
        expect(res.json).not.toEqual(data);
    });
});

describe("getShowReviewsById", () => {
    let mock = new MockAdapter(axios);
    it("should get data and match the data", async () => {
        const data = {
            "urlPrefix": "https://image.tmdb.org/t/p/w500/",
            "data": {
                "id": 1396,
                "page": 1,
                "results": [
                    {
                        "author": "slyone10001",
                        "author_details": {
                            "name": "",
                            "username": "slyone10001",
                            "avatar_path": null,
                            "rating": 10
                        },
                        "content": "Wow....where to start. Not really into \"DRUG\" inspired shows. But this one had me from the start. The only bad about this show was the split seasons when it was a first run show. But now you can go right through to the next episode with out having to wait.....MUST WATCH ! !",
                        "created_at": "2018-04-10T15:44:38.134Z",
                        "id": "5accdbe6c3a3687e2702d058",
                        "updated_at": "2021-06-23T15:58:07.601Z",
                        "url": "https://www.themoviedb.org/review/5accdbe6c3a3687e2702d058"
                    },
                    {
                        "author": "Dean",
                        "author_details": {
                            "name": "Dean",
                            "username": "Ditendra",
                            "avatar_path": null,
                            "rating": 10
                        },
                        "content": "I'll be honest, at first when I started this TV show and finished first season, I didn't like it. It felt boring for me and I stopped watching, but after few years, I decided to give it a chance and continue. I'm so happy because of my decision, because after finishing this TV show, I can definitely tell that it was a masterpiece! 5th season is a bomb and 14th season was shocking! It left me with sad, euphoric shock feeling. It was mind blowing! I'm not gonna spoil you what happened, but if you started first season and you don't like it, for goodness sake, give it a chance and continue watching. I promise you won't regret.\r\n\r\nCharacters are very well developed. Acting is superb! Plot is very interesting. Whole TV show is tense, especially the last season. The only downside I can think about is camera. Sometimes it's shaking on some certain scenes. I don't know why they didn't pay attention to this, but this is nothing, just a very minor minus. Everything else is great about this TV show.",
                        "created_at": "2019-09-30T09:02:26.890Z",
                        "id": "5d91c4a2172d7f001759ca0a",
                        "updated_at": "2021-06-23T15:58:27.439Z",
                        "url": "https://www.themoviedb.org/review/5d91c4a2172d7f001759ca0a"
                    },
                    {
                        "author": "l33t5p34k3r",
                        "author_details": {
                            "name": "",
                            "username": "l33t5p34k3r",
                            "avatar_path": null,
                            "rating": 9
                        },
                        "content": "Started out really good, but dropped quality after the second to last season",
                        "created_at": "2020-06-10T07:29:33.686Z",
                        "id": "5ee08bdd90dde0001fa67192",
                        "updated_at": "2021-06-23T15:58:39.055Z",
                        "url": "https://www.themoviedb.org/review/5ee08bdd90dde0001fa67192"
                    },
                    {
                        "author": "drystyx",
                        "author_details": {
                            "name": "",
                            "username": "drystyx",
                            "avatar_path": "/hLLsAvAnVT0cFU7JuuaaItTWXv8.jpg",
                            "rating": 3
                        },
                        "content": "This is the kind of TV show for the \"formula lovers\" who want to feel superior.\r\nThere is an air of the superiority complex of the \"drug knowledgeable\" crowd in this series about a \"smart guy\" breaking into the drug trade.\r\nHis \"talent\" makes him the important cog in the machine. He can call his shots.\r\nStill, the ruffians give him a rough way to go, because criminals really are stupid.\r\nOnce they learn that they are nothing without him, he gets his way.\r\nMuch like a Western town blacksmith, he's the needed ingredient.\r\nHowever, things get very formula early on in the show. And there's always this sense of a superiority complex from the sort of people who push shows like this onto their friends and acquaintances. The directing writing team tap into the control freak crowd very well.\r\nBut it is a dull show about dull people.",
                        "created_at": "2023-04-02T17:02:14.125Z",
                        "id": "6429b5168de0ae00978d836a",
                        "updated_at": "2023-04-03T16:45:23.650Z",
                        "url": "https://www.themoviedb.org/review/6429b5168de0ae00978d836a"
                    }
                ],
                "total_pages": 1,
                "total_results": 4
            }
        }
        const req = { params: { series_id: 1396 } };

        const res = {
            json: jest.fn(),
        };

        mock.onGet(baseUrl + `netflix/tv/${req.params.series_id}/reviews&language=en-US`);

        // Calling the getShowReviewsById function
        await getShowReviewsById(req, res);

        // Assertions
        expect(res.json).toHaveBeenCalledWith(data);

    });

    it("should not match the data", async () => {
        const data = {};
        const req = { params: { series_id: 1396 } };;

        const res = {
            json: jest.fn(),
        };
        mock.onGet(baseUrl + `netflix/tv/${req.params.series_id}/reviews&language=en-US`);
        // Calling the getShowReviewsById function
        await getShowReviewsById(req, res);

        // Assertions
        expect(res.json).not.toEqual(data);
    });
});


