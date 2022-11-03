import bandPics from '../assets/img/bands_img';
import judasAlbums from '../assets/img/bands_img/judas';
import grimnerAlbums from '../assets/img/bands_img/grimner';


export const judasData = [
    {
        id: 'j1',
        name: "Angel of Retribution",
        img: judasAlbums.angelOfRetribution,
        price: 9,
        release: 2005,
    },
    {
        id: 'j2',
        name: "British steel",
        img: judasAlbums.britishSteel,
        price: 10,
        release: 1980,
    },
    {
        id: 'j3',
        name: "Defenders of the faith",
        img: judasAlbums.defendersOfTheFaith,
        price: 10,
        release: 1984,
    },
    {
        id: 'j4',
        name: "Demolition",
        img: judasAlbums.demolition,
        price: 5,
        release: 2001,
    },
    {
        id: 'j5',
        name: "Firepower",
        img: judasAlbums.firepower,
        price: 12,
        release: 2018,
    },
    {
        id: 'j6',
        name: "Jugulator",
        img: judasAlbums.jugulator,
        price: 5,
        release: 1997,
    },
    {
        id: 'j7',
        name: "Killing machine",
        img: judasAlbums.killingMachine,
        price: 7,
        release: 1978,
    },
    {
        id: 'j8',
        name: "Nostradamus",
        img: judasAlbums.nostradamus,
        price: 6,
        release: 2008,
    },
    {
        id: 'j9',
        name: "PainKiller",
        img: judasAlbums.painKiller,
        price: 10,
        release: 1990,
    },
    {
        id: 'j10',
        name: "Point of entry",
        img: judasAlbums.pointOfEntry,
        price: 9,
        release: 1981,
    },
    {
        id: 'j11',
        name: "Ram it down",
        img: judasAlbums.ramItDown,
        price: 6,
        release: 1988,
    },
    {
        id: 'j12',
        name: "Redeemer of souls",
        img: judasAlbums.redeemerOfSouls,
        price: 10,
        release: 2014,
    },
    {
        id: 'j13',
        name: "RockaRolla",
        img: judasAlbums.rockaRolla,
        price: 5,
        release: 1974,
    },
    {
        id: 'j14',
        name: "Sad wings of destiny",
        img: judasAlbums.sadWingsOfDestiny,
        price: 10,
        release: 1976,
    },
    {
        id: 'j15',
        name: "Screaming for vengeance",
        img: judasAlbums.screamingForVengeance,
        price: 8,
        release: 1982,
    },
    {
        id: 'j16',
        name: "Sin after sin",
        img: judasAlbums.sinAfterSin,
        price: 7,
        release: 1977,
    },
    {
        id: 'j17',
        name: "Stained class",
        img: judasAlbums.stainedClass,
        price: 8,
        release: 1978,
    },
    {
        id: 'j18',
        name: "Turbo",
        img: judasAlbums.turbo,
        price: 8,
        release: 1986,
    },
]

export const grimnerData = [
    {
        id: 'g1',
        name: "Blodshymner",
        img: grimnerAlbums.blodshymner,
        price: 7,
        release: 2014,
    },
    {
        id: 'g2',
        name: "Färd",
        img: grimnerAlbums.fard,
        price: 6,
        release: 2012,
    },
    {
        id: 'g3',
        name: "Frost Mot Eld",
        img: grimnerAlbums.frostmoteld,
        price: 8,
        release: 1016,
    },
    {
        id: 'g4',
        name: "Vanadrottning",
        img: grimnerAlbums.vanadrottning,
        price: 8,
        release: 2018,
    },
    {
        id: 'g5',
        name: "Urfader",
        img: grimnerAlbums.urfader,
        price: 9,
        release: 2022,
    },
]

export const bandsData = [
    {
        id: 1,
        name: "Judas Priest",
        img: bandPics.judasPriest,
        data: judasData,
    },
    {
        id: 2,
        name: "Grimner",
        img: bandPics.grimner,
        data: grimnerData,
    },
    {
        id: 3,
        name: "Finntroll",
        img: bandPics.finntroll,
        data: "finntrollData"
    },
    {
        id: 4,
        name: "Amon Amarth",
        img: bandPics.amonAmarth,
        data: "amonAmarthData"
    },
]