const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');

const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const schoolDetailSchema = new mongoose.Schema({
    type: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    founded: {
        type: Number,
        required: false
    },
    campus: {
        type: String,
        required: false
    },
    students: {
        type: Number,
        required: false
    }
});

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    result: [schoolDetailSchema]
});

const School = mongoose.model('School', schoolSchema);

const schoolsData = {
    name: "Schools in Barisal",
    type: "Education",
    slug: "school",
    image: "", // Add the URL for the main image if available
    description: "Description goes here",
    result: [
        // High schools
        {
            name: 'Agailjhara Bhegai Halder Public Academy',
            type: 'High',
            image: '',
            address: 'X594+G79, Agailjhara',
            phone: '01919-464245'
        },
        {
            name: 'A Wahed Secondary Girls School',
            type: 'High',
            image: '',
            address: 'M8JX+JVV, Barishal',
            phone: '01724-916106'
        },
        {
            name: 'A.B.R. High School',
            type: 'High',
            image: '',
            address: 'Notullaha Bad,Kashipur, Barisal City, Barisal,Bangladesh.',
            phone: '+88 0431-64417'
        },
        {
            name: 'A.R.S. Secondary Girls\' School',
            type: 'High',
            image: '',
            address: '272',
            phone: '01724890947'
        },
        {
            name: 'Alekanda Girls\' High School',
            type: 'High',
            image: '',
            address: 'HAZRAT KALUSHA SHARAK',
            phone: '01712798l278'
        },
        {
            name: 'Asmat Ali Khan (A.K.) Institution',
            type: 'High',
            image: '',
            address: 'BAND ROAD',
            phone: '01757691644'
        },
        {
            name: 'Baptist Mission Boys\' High School',
            type: 'High',
            image: '',
            address: 'BANDRODE',
            phone: '01710539627'
        },
        {
            name: 'Baptist Mission Girls\' High School',
            type: 'High',
            image: '',
            address: 'BAND ROAD',
            phone: '01710539627'
        },
        {
            name: 'Barisal Government Girls High School',
            type: 'High',
            image: '',
            address: 'Mallik Rd, Barishal 8200',
            phone: '01315-947945'
        },
        {
            name: 'Barisal Residential School and College, Rupatoli',
            type: 'High',
            image: '',
            address: 'A-3/3 Rupatali Housing, Barisal',
            phone: '+880 431 2176543'
        },
        {
            name: 'Barishal Government Model School and College',
            type: 'High',
            image: '',
            address: 'M9V9+MJ, Raja Bahadur Rd, Barishal 8200',
            phone: '01710-353877'
        },
        {
            name: 'Barishal International School',
            type: 'High',
            image: '',
            address: 'P933+22H, C and B Rd, Barishal',
            phone: '01771-177777'
        },
        {
            name: 'Barishal Zilla School',
            type: 'High',
            image: '',
            address: 'Sadar Rd, Barisal',
            phone: '+880 431 2173456'
        },
        {
            name: 'Brojomohun School',
            type: 'High',
            image: '',
            address: 'KALI BARI ROAD',
            phone: '01715586825'
        },
        {
            name: 'Collegiate Secondary School',
            type: 'High',
            image: '',
            address: '82/76 ,COLLEGE ROAD',
            phone: '01719834661'
        },
        {
            name: 'Fazlul Huq Residential School and College',
            type: 'High',
            image: '',
            address: '1161, C & B ROAD',
            phone: '01713957971'
        },
        {
            name: 'Halima Khatun Girls\' Secondary School',
            type: 'High',
            image: '',
            address: 'Major M A Jalil Rd, Barisal',
            phone: '01930-257446'
        },
        {
            name: 'Jagadish Saraswat Girls School &',
            type: 'High',
            image: '',
            address: 'Natun Bazar, Barisal, Bangladesh',
            phone: '+880 431 2172345'
        },
        {
            name: 'Jahanara Israil School & College (English version)',
            type: 'High',
            image: '',
            address: 'Notun Bazar, Barisal, Bangladesh',
            phone: '+880 431 2170987'
        },
        {
            name: 'Kashipur Girls\' High School and College',
            type: 'High',
            image: '',
            address: 'Kashipur, Barisal, Bangladesh',
            phone: '+880 431 2170765'
        },
        {
            name: 'Kashipur High School and College',
            type: 'High',
            image: '',
            address: 'Kashipur, Barisal, Bangladesh',
            phone: '+880 431 2173210'
        },
        {
            name: 'Kaunia Girls\' High',
            type: 'High',
            image: '',
            address: 'KAUNIA',
            phone: '01725438384'
        },
        {
            name: 'Mamtaz Majidunnesa Girls Secondary',
            type: 'High',
            image: '',
            address: '39/39, 40/42',
            phone: '01728389754'
        },
        {
            name: 'Mathuranath Public School',
            type: 'High',
            image: '',
            address: '62/64 NOTUN BAJAR',
            phone: '01712939513'
        },
        {
            name: 'Oxford Mission High',
            type: 'High',
            image: '',
            address: 'BAGURA ROAD',
            phone: '01716505277'
        },
        {
            name: 'Royal Central School and College',
            type: 'High',
            image: '',
            address: 'Kashipur, Barisal, Bangladesh',
            phone: '+880 431 2170456'
        },
        {
            name: 'S.C.G.M. Secondary School (Chaitanya School)',
            type: 'High',
            image: '',
            address: 'Chawkbazar, Barisal, Bangladesh',
            phone: '+880 431 2170563'
        },
        {
            name: 'Sabera Khatun Girls\' Secondary School',
            type: 'High',
            image: '',
            address: 'Nobogram Road, Barisal, Bangladesh',
            phone: '+880 431 2173742'
        },
        {
            name: 'Shahid Abdur Rab Serniabat Government High School',
            type: 'High',
            image: '',
            address: 'Sadar Road, Barisal, Bangladesh',
            phone: '+880 431 2171851'
        },
        {
            name: 'Shahid Altaf Smrity Secondary Girls School',
            type: 'High',
            image: '',
            address: 'DOKHIN ALAKANDA',
            phone: '01712308171'
        },
        {
            name: 'Shahid Arjumoni Government High School',
            type: 'High',
            image: '',
            address: 'P9C8+R7H, Barisal',
            phone: ''
        },
        {
            name: 'Sher-e-Bangla Girls Secondary School',
            type: 'High',
            image: '',
            address: 'COLLEGE DROA',
            phone: '01714702031'
        },
        {
            name: 'Town High School',
            type: 'High',
            image: '',
            address: 'SOW ROAD',
            phone: '01715940081'
        },
        {
            name: 'Udayan Secondary School',
            type: 'High',
            image: '',
            address: '32 Fazlul Haque Ave, Barishal',
            phone: '01749943202'
        },
        {
            name: 'Nuria Secondary High School',
            type: 'High',
            image: '',
            address: 'DAKSIN ALEKANDA',
            phone: '01715081950'
        },
        // English medium schools
        {
            name: 'Jahanara Israil School & College (English Version)',
            type: 'English Medium',
            image: '',
            address: '999 College Row, Barishal 8200',
            phone: '+880 1751-505090'
        },
        {
            name: 'Adventist International Mission School (English Version)',
            type: 'English Medium',
            image: '',
            address: 'Major M. A. Jalil Road, Karim Kutir, Barisal',
            phone: '01715-605650'
        },
        // Religious schools
        {
            name: 'Charmonai Madrasah',
            type: 'Religious',
            image: '',
            address: 'Barisal Sadar (Kotwali), Barisal',
            phone: '01918543182'
        },
        {
            name: 'Jamia Islamia Mahmudia',
            type: 'Religious',
            image: '',
            address: 'Barisal, Bangladesh',
            phone: '01712-527069'
        },
        {
            name: 'Jamia Islamia Hosainia Madrasah',
            type: 'Religious',
            image: '',
            address: 'Barishal 8200',
            phone: '0431-64780'
        },
        {
            name: 'Lutfur Rahman Cadet Madrasah',
            type: 'Religious',
            image: '',
            address: '2164 Lutfur Rahman Sarak, Barisal, Barisal Sadar',
            phone: '01712-951422'
        },
        {
            name: 'Sagardi Kamil Madrasah',
            type: 'Religious',
            image: '',
            address: 'Sagardi, Barisal Sadar, Barisal',
            phone: '+880 1712-081106'
        },
        // Technical schools
        {
            name: 'Technical Training Center (T.T.C.), Barisal',
            type: 'Technical',
            image: '',
            address: 'Band Road, Barisal',
            phone: '0431-2171759'
        },
        {
            name: 'Barisal Mohila Technical Training Center',
            type: 'Technical',
            image: '',
            address: 'Chandmari Road, Barisal',
            phone: '01711-217113'
        },
        {
            name: 'Barisal Govt. Technical School & College',
            type: 'Technical',
            image: '',
            address: 'C&B Road, Barisal',
            phone: '0431-2171294'
        },
        {
            name: 'UCEP Training School',
            type: 'Technical',
            image: '',
            address: 'Koruna Bhaban, Kawnia, Barisal',
            phone: '01711-585760'
        },
        {
            name: 'Trust College of Skill Development',
            type: 'Technical',
            image: '',
            address: 'Rupatali Housing, Barisal',
            phone: '01712981491'
        },
        {
            name: 'Yhout Development Academy',
            type: 'Technical',
            image: '',
            address: '"Neer" 1011 Kazi Para, C&B Road (Opposite TTC), Barisal',
            phone: '0431-63632'
        },
        {
            name: 'Govt. Physical Education College, Barisal',
            type: 'Technical',
            image: '',
            address: 'C&B Road, Barisal',
            phone: '0431-64422'
        },
        {
            name: 'Bilkis Jahan Technical School & BM College',
            type: 'Technical',
            image: '',
            address: 'G9WG+2QW, Gobindapur Road, Garuria Union',
            phone: '01711-000393'
        },
        // Drama schools
        {
            name: 'Kheyali Group Theater',
            type: 'Drama',
            image: '',
            address: 'Ray Road, Barisal',
            phone: ''
        },
        {
            name: 'Shabdaboli Group Theater',
            type: 'Drama',
            image: '',
            address: 'Lucas Building, Sader Road (One Way), Barisal, Barisal 8200, Bangladesh',
            phone: '880 1913-863808'
        },
        {
            name: 'Barisal Natok',
            type: 'Drama',
            image: '',
            address: '',
            phone: ''
        },
        {
            name: 'Barisal Theatre',
            type: 'Drama',
            image: '',
            address: '',
            phone: ''
        },
        {
            name: 'Ponchosiri Group Theatre',
            type: 'Drama',
            image: '',
            address: 'P929+WV3, Lucas Building, Sader Road (One Way), Barisal',
            phone: '01913-863808'
        },
        {
            name: 'Natyam Barisal',
            type: 'Drama',
            image: '',
            address: 'P927+HVW Bottola, Barishal',
            phone: ''
        },
        {
            name: 'Kirtonkhola Group Theatre',
            type: 'Drama',
            image: '',
            address: 'P929+4XW, Barishal',
            phone: '01778-786954'
        },
        {
            name: 'Brojomohon Theatre',
            type: 'Drama',
            image: '',
            address: '18 KB Hemayetuddin Road, Barisal',
            phone: '+880 96 12820820'
        },
        {
            name: 'Barisal Shilpomoncho',
            type: 'Drama',
            image: '',
            address: '',
            phone: ''
        },
        // Art schools
        {
            name: 'Barisal Charukola School',
            type: 'Art',
            image: '',
            address: 'P93C+X5P, Barisal 8200',
            phone: ''
        },
        {
            name: 'Barisal Shishu Academy',
            type: 'Art',
            image: '',
            address: 'M9H2+J6H, Bhanga-Barisal Hwy, Barisal',
            phone: ''
        },
        {
            name: 'Barisal Shilpakola Academy',
            type: 'Art',
            image: '',
            address: 'Band Rd, Barishal',
            phone: '01774-645032'
        },
        {
            name: 'Mir Mujtaba Ali Art School (Kheyali Group Theatre)',
            type: 'Art',
            image: '',
            address: '',
            phone: ''
        },
        {
            name: 'Shahid Altaf Mahmud Music School',
            type: 'Art',
            image: '',
            address: 'P958+MXG, Hospital Rd, Barishal',
            phone: '01913471951'
        },
        {
            name: 'Khelaghar Barisal',
            type: 'Art',
            image: '',
            address: '',
            phone: ''
        },
        {
            name: 'Udichi Barisal',
            type: 'Art',
            image: '',
            address: '',
            phone: ''
        },
        {
            name: 'Chader Hat',
            type: 'Art',
            image: '',
            address: '',
            phone: ''
        },
        {
            name: 'Akshar Shahittya',
            type: 'Art',
            image: '',
            address: '13, Mauli Chembers, Sadar Bazar Satara, Satara - 415001 (Ajinkya Colony,)',
            phone: '07947121856'
        },
        {
            name: 'Tansen Music School',
            type: 'Art',
            image: '',
            address: '',
            phone: ''
        },
        {
            name: 'Prantik Music & Dance School',
            type: 'Art',
            image: '',
            address: 'P928+PJ7 Bottola, Barishal',
            phone: '01709-154277'
        },
        // Special schools
        {
            name: 'Barisal Night High School',
            type: 'Special',
            image: '',
            address: 'P959+H69, Hospital Rd, Barishal',
            phone: ''
        },
        {
            name: 'Barisal Intellectually disabled School',
            type: 'Special',
            image: '',
            address: 'P958+WQM, 2nd Lane, Barisal',
            phone: ''
        }
    ]
};

School.create(schoolsData)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
