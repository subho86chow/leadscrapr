import Header from "@/sections/dashboard/Header"
import { ResData, columns } from "./columns"
import { DataTable } from "./data-table"
import { ThemeProvider } from "@/components/theme-provider"


export const data: ResData[] = [
  {
    "id": "8807cb4c-3486-4670-80b4-a18c33e3061d",
    "name": "Sweet Cakes",
    "reviews": 273,
    "address": "29053 Main Street, Fairview, CA 78498",
    "actions": {
      "website": "https://sweetcakes.com",
      "phone": "+15803029332",
      "map": "https://maps.google.com/?q=29053+Main+Street,+Fairview,+CA+78498",
      "info": "Specializing in wedding cakes since 2010."
    }
  },
  {
    "id": "fa453bfb-8853-4d35-914c-fdd5147d7beb",
    "name": "Tasty Delights",
    "reviews": 117,
    "address": "67071 Main Street, Fairview, CA 94687",
    "actions": {
      "website": "https://tastydelights.com",
      "phone": "+13059522508",
      "map": "https://maps.google.com/?q=67071+Main+Street,+Fairview,+CA+94687",
      "info": "Specializing in cupcakes since 2020."
    }
  },
  {
    "id": "de8ea56a-beb4-4a86-aea9-162529770264",
    "name": "Tasty Bakes",
    "reviews": 252,
    "address": "93553 Pine Street, Fairview, IL 70290",
    "actions": {
      "website": null,
      "phone": "+16147226136",
      "map": "https://maps.google.com/?q=93553+Pine+Street,+Fairview,+IL+70290",
      "info": "Specializing in birthday cakes since 2012."
    }
  },
  {
    "id": "bbd33f8b-8920-470a-9d74-dc88e0fd4b52",
    "name": "Delicious Delights",
    "reviews": 23,
    "address": "73115 Main Street, Lincoln, CA 34220",
    "actions": {
      "website": "https://deliciousdelights.com",
      "phone": "+13458003402",
      "map": "https://maps.google.com/?q=73115+Main+Street,+Lincoln,+CA+34220",
      "info": "Specializing in cupcakes since 1991."
    }
  },
  {
    "id": "e05ad824-4034-482a-a98f-8560178001b1",
    "name": "Sweet Bakes",
    "reviews": 21,
    "address": "31479 Pine Street, Springfield, TX 26850",
    "actions": {
      "website": "https://sweetbakes.com",
      "phone": "+19312439068",
      "map": "https://maps.google.com/?q=31479+Pine+Street,+Springfield,+TX+26850",
      "info": "Specializing in birthday cakes since 2020."
    }
  },
  {
    "id": "b8e9224c-6f7f-44a7-badd-5e8567281b6b",
    "name": "Sweet Bakes",
    "reviews": 369,
    "address": "95252 Oak Drive, Fairview, CA 16173",
    "actions": {
      "website": null,
      "phone": "+13055630321",
      "map": "https://maps.google.com/?q=95252+Oak+Drive,+Fairview,+CA+16173",
      "info": "Specializing in cupcakes since 1987."
    }
  },
  {
    "id": "8082b7d5-724c-4b51-bf9e-9c23a60c9290",
    "name": "Happy Cakes",
    "reviews": 500,
    "address": "57227 Main Street, Fairview, NY 92672",
    "actions": {
      "website": "https://happycakes.com",
      "phone": "+12572846393",
      "map": "https://maps.google.com/?q=57227+Main+Street,+Fairview,+NY+92672",
      "info": "Specializing in wedding cakes since 1995."
    }
  },
  {
    "id": "3503bb01-1e23-4df4-9f8b-f23df9900066",
    "name": "Delicious Bakes",
    "reviews": 236,
    "address": "25093 Pine Street, Springfield, IL 45786",
    "actions": {
      "website": "https://deliciousbakes.com",
      "phone": "+15823845540",
      "map": "https://maps.google.com/?q=25093+Pine+Street,+Springfield,+IL+45786",
      "info": "Specializing in birthday cakes since 1995."
    }
  },
  {
    "id": "8300ca4a-1fe6-461e-8070-3ad749db1e7e",
    "name": "Sweet Treats",
    "reviews": 216,
    "address": "75730 Elm Street, Fairview, TX 44048",
    "actions": {
      "website": null,
      "phone": "+13931629189",
      "map": "https://maps.google.com/?q=75730+Elm+Street,+Fairview,+TX+44048",
      "info": "Specializing in birthday cakes since 1983."
    }
  },
  {
    "id": "6612f446-b3ad-4b44-9290-f3ed2c5e6836",
    "name": "Sweet Cakes",
    "reviews": 317,
    "address": "86894 Maple Avenue, Lincoln, TX 62458",
    "actions": {
      "website": null,
      "phone": "+19857511871",
      "map": "https://maps.google.com/?q=86894+Maple+Avenue,+Lincoln,+TX+62458",
      "info": "Specializing in wedding cakes since 1988."
    }
  },
  {
    "id": "f1ea234c-249f-44ee-aded-7ecc31442c01",
    "name": "Tasty Cakes",
    "reviews": 135,
    "address": "82096 Maple Avenue, Fairview, NY 45764",
    "actions": {
      "website": "https://tastycakes.com",
      "phone": "+14463381637",
      "map": "https://maps.google.com/?q=82096+Maple+Avenue,+Fairview,+NY+45764",
      "info": "Specializing in wedding cakes since 1997."
    }
  },
  {
    "id": "357950be-bd22-4370-b172-4c85bd8b021c",
    "name": "Sweet Cakes",
    "reviews": 19,
    "address": "72400 Maple Avenue, Fairview, TX 19710",
    "actions": {
      "website": "https://sweetcakes.com",
      "phone": "+13324822740",
      "map": "https://maps.google.com/?q=72400+Maple+Avenue,+Fairview,+TX+19710",
      "info": "Specializing in custom cakes since 1995."
    }
  },
  {
    "id": "ad799b61-c010-4d9d-a352-c7d397084fe4",
    "name": "Delicious Treats",
    "reviews": 354,
    "address": "3559 Oak Drive, Riverside, TX 73499",
    "actions": {
      "website": "https://delicioustreats.com",
      "phone": "+17632504934",
      "map": "https://maps.google.com/?q=3559+Oak+Drive,+Riverside,+TX+73499",
      "info": "Specializing in wedding cakes since 2011."
    }
  },
  {
    "id": "9a478b20-9506-458f-8c1c-3530eb9f80f5",
    "name": "Sweet Treats",
    "reviews": 74,
    "address": "75898 Main Street, Fairview, FL 18472",
    "actions": {
      "website": "https://sweettreats.com",
      "phone": "+12393349086",
      "map": "https://maps.google.com/?q=75898+Main+Street,+Fairview,+FL+18472",
      "info": "Specializing in wedding cakes since 2015."
    }
  },
  {
    "id": "7da2283f-9671-442b-81eb-14c92460a15b",
    "name": "Tasty Delights",
    "reviews": 497,
    "address": "81529 Main Street, Riverside, FL 39585",
    "actions": {
      "website": null,
      "phone": "+14495027263",
      "map": "https://maps.google.com/?q=81529+Main+Street,+Riverside,+FL+39585",
      "info": "Specializing in cupcakes since 1992."
    }
  },
  {
    "id": "aea9ea6d-d3aa-4dcd-8a0e-51ac2f381e2d",
    "name": "Delicious Delights",
    "reviews": 452,
    "address": "34941 Oak Drive, Lincoln, NY 70118",
    "actions": {
      "website": "https://deliciousdelights.com",
      "phone": "+15525817257",
      "map": "https://maps.google.com/?q=34941+Oak+Drive,+Lincoln,+NY+70118",
      "info": "Specializing in wedding cakes since 1989."
    }
  },
  {
    "id": "396ec8d0-d58d-4e87-92ff-f37f3cb61b9e",
    "name": "Happy Delights",
    "reviews": 347,
    "address": "55333 Main Street, Fairview, TX 86177",
    "actions": {
      "website": null,
      "phone": "+12358679280",
      "map": "https://maps.google.com/?q=55333+Main+Street,+Fairview,+TX+86177",
      "info": "Specializing in cupcakes since 1998."
    }
  },
  {
    "id": "b469bb9d-8eb7-4d44-9384-57681b0eb19a",
    "name": "Sweet Delights",
    "reviews": 83,
    "address": "52433 Pine Street, Springfield, IL 98925",
    "actions": {
      "website": null,
      "phone": "+18515048101",
      "map": "https://maps.google.com/?q=52433+Pine+Street,+Springfield,+IL+98925",
      "info": "Specializing in birthday cakes since 2013."
    }
  },
  {
    "id": "dcb92dc1-106b-491e-9f6e-d8ce3054a99b",
    "name": "Happy Bakes",
    "reviews": 291,
    "address": "83836 Maple Avenue, Springfield, CA 48909",
    "actions": {
      "website": "https://happybakes.com",
      "phone": "+19947099626",
      "map": "https://maps.google.com/?q=83836+Maple+Avenue,+Springfield,+CA+48909",
      "info": "Specializing in birthday cakes since 1982."
    }
  },
  {
    "id": "da7bff6f-1d6e-40db-9faf-8ceff9d75048",
    "name": "Sweet Delights",
    "reviews": 231,
    "address": "74231 Pine Street, Greenville, NY 23753",
    "actions": {
      "website": null,
      "phone": "+19721291125",
      "map": "https://maps.google.com/?q=74231+Pine+Street,+Greenville,+NY+23753",
      "info": "Specializing in cupcakes since 1998."
    }
  },
  {
    "id": "a4c1468f-5547-494e-9478-5d4d49590ede",
    "name": "Sweet Treats",
    "reviews": 348,
    "address": "7900 Elm Street, Springfield, FL 18341",
    "actions": {
      "website": "https://sweettreats.com",
      "phone": "+19012967248",
      "map": "https://maps.google.com/?q=7900+Elm+Street,+Springfield,+FL+18341",
      "info": "Specializing in wedding cakes since 2009."
    }
  },
  {
    "id": "26782c63-1cdc-481d-a308-bd56abd4be5b",
    "name": "Delicious Bakes",
    "reviews": 355,
    "address": "45204 Pine Street, Riverside, FL 70709",
    "actions": {
      "website": "https://deliciousbakes.com",
      "phone": "+14263191433",
      "map": "https://maps.google.com/?q=45204+Pine+Street,+Riverside,+FL+70709",
      "info": "Specializing in wedding cakes since 1993."
    }
  },
  {
    "id": "0ae442e8-ace2-41d6-acf9-f4c14851a572",
    "name": "Happy Cakes",
    "reviews": 380,
    "address": "33278 Maple Avenue, Riverside, CA 49594",
    "actions": {
      "website": null,
      "phone": "+16805335155",
      "map": "https://maps.google.com/?q=33278+Maple+Avenue,+Riverside,+CA+49594",
      "info": "Specializing in custom cakes since 2016."
    }
  },
  {
    "id": "63fc9f3e-01ca-4018-82ff-6599779310d0",
    "name": "Delicious Bakes",
    "reviews": 128,
    "address": "44261 Elm Street, Fairview, FL 43820",
    "actions": {
      "website": "https://deliciousbakes.com",
      "phone": "+18748594093",
      "map": "https://maps.google.com/?q=44261+Elm+Street,+Fairview,+FL+43820",
      "info": "Specializing in wedding cakes since 2002."
    }
  },
  {
    "id": "c5cefd41-70ec-478a-a67e-b101833c8c70",
    "name": "Happy Cakes",
    "reviews": 365,
    "address": "60603 Oak Drive, Lincoln, CA 84933",
    "actions": {
      "website": "https://happycakes.com",
      "phone": "+16424311282",
      "map": "https://maps.google.com/?q=60603+Oak+Drive,+Lincoln,+CA+84933",
      "info": "Specializing in wedding cakes since 1987."
    }
  },
  {
    "id": "32bd3944-bf93-42d5-859f-93a1964e8e95",
    "name": "Happy Delights",
    "reviews": 172,
    "address": "29630 Pine Street, Fairview, NY 28200",
    "actions": {
      "website": null,
      "phone": "+12857142977",
      "map": "https://maps.google.com/?q=29630+Pine+Street,+Fairview,+NY+28200",
      "info": "Specializing in custom cakes since 2008."
    }
  },
  {
    "id": "bdb6e7c0-6c20-4c70-a50b-ea22bb9d27a3",
    "name": "Tasty Delights",
    "reviews": 392,
    "address": "79738 Oak Drive, Greenville, CA 74865",
    "actions": {
      "website": "https://tastydelights.com",
      "phone": "+12788780933",
      "map": "https://maps.google.com/?q=79738+Oak+Drive,+Greenville,+CA+74865",
      "info": "Specializing in cupcakes since 2014."
    }
  },
  {
    "id": "4d68ccbc-63e0-46bd-ac20-9d1ab71d2042",
    "name": "Sweet Bakes",
    "reviews": 153,
    "address": "29963 Maple Avenue, Riverside, FL 53067",
    "actions": {
      "website": null,
      "phone": "+17535100504",
      "map": "https://maps.google.com/?q=29963+Maple+Avenue,+Riverside,+FL+53067",
      "info": "Specializing in cupcakes since 2015."
    }
  },
  {
    "id": "7624cf13-ae67-46ad-8760-ea75fa9f9d6b",
    "name": "Delicious Bakes",
    "reviews": 217,
    "address": "17138 Maple Avenue, Riverside, FL 47130",
    "actions": {
      "website": null,
      "phone": "+16982181682",
      "map": "https://maps.google.com/?q=17138+Maple+Avenue,+Riverside,+FL+47130",
      "info": "Specializing in cupcakes since 1993."
    }
  },
  {
    "id": "6abe68f7-5a26-4c9d-b238-f7bff303a758",
    "name": "Tasty Treats",
    "reviews": 13,
    "address": "41714 Pine Street, Springfield, TX 51272",
    "actions": {
      "website": null,
      "phone": "+18342647616",
      "map": "https://maps.google.com/?q=41714+Pine+Street,+Springfield,+TX+51272",
      "info": "Specializing in cupcakes since 2001."
    }
  },
  {
    "id": "ec781cc7-8507-4b3e-8150-e71a927a0c0d",
    "name": "Delicious Bakes",
    "reviews": 66,
    "address": "80489 Maple Avenue, Fairview, CA 50385",
    "actions": {
      "website": "https://deliciousbakes.com",
      "phone": "+18499136746",
      "map": "https://maps.google.com/?q=80489+Maple+Avenue,+Fairview,+CA+50385",
      "info": "Specializing in custom cakes since 1993."
    }
  },
  {
    "id": "44a5f8be-ebca-45ea-b61f-e949b04ae4cc",
    "name": "Sweet Treats",
    "reviews": 432,
    "address": "73976 Maple Avenue, Lincoln, TX 41241",
    "actions": {
      "website": null,
      "phone": "+13395239540",
      "map": "https://maps.google.com/?q=73976+Maple+Avenue,+Lincoln,+TX+41241",
      "info": "Specializing in birthday cakes since 1993."
    }
  },
  {
    "id": "cb7fa1c2-0e51-488d-bf34-142fa9369b56",
    "name": "Sweet Delights",
    "reviews": 481,
    "address": "8835 Maple Avenue, Greenville, FL 72014",
    "actions": {
      "website": null,
      "phone": "+12308083514",
      "map": "https://maps.google.com/?q=8835+Maple+Avenue,+Greenville,+FL+72014",
      "info": "Specializing in custom cakes since 1988."
    }
  },
  {
    "id": "15f815e7-f77c-419b-8c24-c8e633c15e8e",
    "name": "Tasty Treats",
    "reviews": 238,
    "address": "92020 Elm Street, Riverside, FL 82227",
    "actions": {
      "website": "https://tastytreats.com",
      "phone": "+15528875539",
      "map": "https://maps.google.com/?q=92020+Elm+Street,+Riverside,+FL+82227",
      "info": "Specializing in custom cakes since 2000."
    }
  },
  {
    "id": "fb56b9e9-32c2-4104-836c-d4409ed8f8e4",
    "name": "Delicious Delights",
    "reviews": 309,
    "address": "42839 Main Street, Springfield, CA 82421",
    "actions": {
      "website": null,
      "phone": "+15131409736",
      "map": "https://maps.google.com/?q=42839+Main+Street,+Springfield,+CA+82421",
      "info": "Specializing in custom cakes since 1990."
    }
  },
  {
    "id": "ba5cc2f5-b3d8-44e3-98a7-c8f252621960",
    "name": "Sweet Delights",
    "reviews": 99,
    "address": "42172 Maple Avenue, Fairview, FL 37454",
    "actions": {
      "website": null,
      "phone": "+18562714516",
      "map": "https://maps.google.com/?q=42172+Maple+Avenue,+Fairview,+FL+37454",
      "info": "Specializing in custom cakes since 2008."
    }
  },
  {
    "id": "cd78a1f4-18ff-425d-bfa4-ba556cf6ea9c",
    "name": "Sweet Cakes",
    "reviews": 5,
    "address": "55364 Maple Avenue, Lincoln, NY 29877",
    "actions": {
      "website": "https://sweetcakes.com",
      "phone": "+12871501161",
      "map": "https://maps.google.com/?q=55364+Maple+Avenue,+Lincoln,+NY+29877",
      "info": "Specializing in custom cakes since 1982."
    }
  },
  {
    "id": "422c382e-f445-467b-86c1-cb1de217f398",
    "name": "Happy Bakes",
    "reviews": 125,
    "address": "56531 Oak Drive, Springfield, CA 43639",
    "actions": {
      "website": null,
      "phone": "+12114171994",
      "map": "https://maps.google.com/?q=56531+Oak+Drive,+Springfield,+CA+43639",
      "info": "Specializing in custom cakes since 2016."
    }
  },
  {
    "id": "5b4fd254-007e-4811-aec3-6824dc6d06ea",
    "name": "Sweet Bakes",
    "reviews": 347,
    "address": "95984 Elm Street, Greenville, TX 79571",
    "actions": {
      "website": "https://sweetbakes.com",
      "phone": "+16789062539",
      "map": "https://maps.google.com/?q=95984+Elm+Street,+Greenville,+TX+79571",
      "info": "Specializing in wedding cakes since 1993."
    }
  },
  {
    "id": "8c32579e-2fe6-42d5-a65b-9187605193ea",
    "name": "Sweet Delights",
    "reviews": 201,
    "address": "92015 Elm Street, Fairview, TX 15328",
    "actions": {
      "website": null,
      "phone": "+12226448139",
      "map": "https://maps.google.com/?q=92015+Elm+Street,+Fairview,+TX+15328",
      "info": "Specializing in wedding cakes since 2020."
    }
  },
  {
    "id": "a21d35aa-2656-4c98-9bf8-517d581322ed",
    "name": "Delicious Delights",
    "reviews": 189,
    "address": "82416 Pine Street, Fairview, TX 89673",
    "actions": {
      "website": "https://deliciousdelights.com",
      "phone": "+16451557800",
      "map": "https://maps.google.com/?q=82416+Pine+Street,+Fairview,+TX+89673",
      "info": "Specializing in wedding cakes since 2010."
    }
  },
  {
    "id": "2b5906cc-a4ad-48bd-a48b-86b55756aa7e",
    "name": "Tasty Treats",
    "reviews": 238,
    "address": "35762 Pine Street, Springfield, TX 53747",
    "actions": {
      "website": null,
      "phone": "+18643199258",
      "map": "https://maps.google.com/?q=35762+Pine+Street,+Springfield,+TX+53747",
      "info": "Specializing in cupcakes since 1998."
    }
  },
  {
    "id": "ecaf7c44-38b6-4a7d-896b-108268f8eb21",
    "name": "Sweet Bakes",
    "reviews": 288,
    "address": "2216 Oak Drive, Lincoln, IL 47900",
    "actions": {
      "website": "https://sweetbakes.com",
      "phone": "+19353796066",
      "map": "https://maps.google.com/?q=2216+Oak+Drive,+Lincoln,+IL+47900",
      "info": "Specializing in cupcakes since 2017."
    }
  },
  {
    "id": "a64706c4-3c4d-49db-890f-1771a66e84c8",
    "name": "Happy Treats",
    "reviews": 210,
    "address": "6115 Maple Avenue, Fairview, FL 11714",
    "actions": {
      "website": null,
      "phone": "+18426489213",
      "map": "https://maps.google.com/?q=6115+Maple+Avenue,+Fairview,+FL+11714",
      "info": "Specializing in cupcakes since 2017."
    }
  },
  {
    "id": "6b1d00d2-958c-40e0-8ae3-c563aa46749c",
    "name": "Sweet Bakes",
    "reviews": 223,
    "address": "99427 Elm Street, Greenville, CA 20399",
    "actions": {
      "website": null,
      "phone": "+12308976341",
      "map": "https://maps.google.com/?q=99427+Elm+Street,+Greenville,+CA+20399",
      "info": "Specializing in birthday cakes since 1985."
    }
  },
  {
    "id": "f4eea66f-b8ca-4ce6-8a9f-14922cbb5d76",
    "name": "Happy Bakes",
    "reviews": 192,
    "address": "427 Oak Drive, Greenville, FL 39165",
    "actions": {
      "website": "https://happybakes.com",
      "phone": "+12342963979",
      "map": "https://maps.google.com/?q=427+Oak+Drive,+Greenville,+FL+39165",
      "info": "Specializing in wedding cakes since 2010."
    }
  },
  {
    "id": "82f63f22-8a4e-4ff2-bb09-eed5ebc82cf7",
    "name": "Sweet Delights",
    "reviews": 29,
    "address": "99604 Maple Avenue, Riverside, NY 92134",
    "actions": {
      "website": "https://sweetdelights.com",
      "phone": "+14111401365",
      "map": "https://maps.google.com/?q=99604+Maple+Avenue,+Riverside,+NY+92134",
      "info": "Specializing in birthday cakes since 2018."
    }
  },
  {
    "id": "6bd60d6a-3737-4da9-a173-49c5afaba6e1",
    "name": "Sweet Cakes",
    "reviews": 218,
    "address": "25935 Elm Street, Fairview, TX 99608",
    "actions": {
      "website": "https://sweetcakes.com",
      "phone": "+12449583115",
      "map": "https://maps.google.com/?q=25935+Elm+Street,+Fairview,+TX+99608",
      "info": "Specializing in cupcakes since 1995."
    }
  },
  {
    "id": "d3bdeb31-7376-4752-8218-4b84e7a851a8",
    "name": "Delicious Delights",
    "reviews": 296,
    "address": "13374 Pine Street, Riverside, FL 53642",
    "actions": {
      "website": "https://deliciousdelights.com",
      "phone": "+12291331629",
      "map": "https://maps.google.com/?q=13374+Pine+Street,+Riverside,+FL+53642",
      "info": "Specializing in cupcakes since 2009."
    }
  },
  {
    "id": "ff4a0b75-cb48-41e1-9732-2740ff01b30d",
    "name": "Sweet Cakes",
    "reviews": 315,
    "address": "28093 Main Street, Fairview, NY 67734",
    "actions": {
      "website": null,
      "phone": "+15856745639",
      "map": "https://maps.google.com/?q=28093+Main+Street,+Fairview,+NY+67734",
      "info": "Specializing in custom cakes since 1983."
    }
  }
]

export default function Page() {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <div className="bg-white dark:bg-black min-h-screen">
      <Header/>
      <div className="p-5 sm:p-5 md:py-10 md:px-28">
        <div className="mx-auto">
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold dark:text-white text-slate-900/90 pb-6">Dashboard</h2>
          <div className="bg-white dark:bg-black rounded-md">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}