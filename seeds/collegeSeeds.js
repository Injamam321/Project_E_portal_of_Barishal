const mongoose = require('mongoose');
const { MONGO_URI } = require('../constants');

// Replace 'your_database_uri' with your actual MongoDB URI
const uri = MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const collegeDetailSchema = new mongoose.Schema({
    type: { type: String, required: false },
    name: { type: String, required: false },
    address: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: false },
    website: { type: String, required: false },
    campus: { type: String, required: false },
    founded: { type: Number, required: false },
    students: { type: Number, required: false },
    image: { type: String, required: false }
});

const collegeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    slug: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: false },
    result: [collegeDetailSchema]
});

const College = mongoose.model('College', collegeSchema);

const collegeData = {
    name: "Colleges in Barisal",
    type: "Education",
    slug: "college",
    image: "", // Add the URL for the main image if available
    description: "Description goes here",
    result: [
        { type: 'General', name: 'Brojomohun College', address: 'BM College Rd, Barishal 8200', phone: '1711131927', email: 'principalbmcollege@gmail.com', website: 'https://www.bmcollege.gov.bd/', image: '' },
        { type: 'General', name: 'Government Syed Hatem Ali College', address: 'Barisal Nobogram Road, Barisal', phone: '2478864984', email: 'hatemalicollegebarisal@yahoo.com', website: 'http://www.gshac.gov.bd/', image: '' },
        { type: 'General', name: 'Amrita Lal Dey College', address: 'Amrta Lal Dey Rd, Hospital Rd, Barishal 8200', phone: '1718121784', email: 'amritacbsl@gmail.com', website: 'http://aldm.edu.bd/', image: '' },
        { type: 'General', name: 'Barisal Government Women\'s College', address: 'Agarpur Road, Barisal Sadar', phone: '43164992', email: 'bgwcinfo@yahoo.com', website: 'https://bwc.gov.bd/', image: '' },
        { type: 'General', name: 'Barisal College', address: 'Kali Bari Rd, Barisal 8200', phone: '43164409', email: 'reg@orca.org.bd', website: 'http://gbc.gov.bd/', image: '' },
        { type: 'General', name: 'Government Suhrawardi College', address: 'Pirojpur Sadar, Pirojpur', phone: '1715916699', email: 'gscpirojpur@gmail.com', website: 'https://www.gsc.edu.bd/', image: '' },
        { type: 'General', name: 'Bhola Government College', address: 'Char Jangala, Bhola Sadar, Bhola', phone: '49161822', email: 'bholagovtcollege@yahoo.com', website: 'https://bholagovtcollege.edu.bd/', image: '' },
        { type: 'General', name: 'Sheikh Hasina Cantonment Public School & College', address: 'Sheikh Hasina Cantonment, Barishal', phone: '1769073171', email: 'shcpsc10@gmail.com', website: 'https://shcpsc.edu.bd/', image: '' },
        { type: 'General', name: 'Shaheed Abdur Rab Serniabat Degree College', address: 'BARISAL AGAILJHARA – 8240', phone: '1717557261', email: 'aabdurrobserniabatdegreecolle@yahoo.com', website: 'Shaheed Abdur Rab Degree College', image: '' },
        { type: 'General', name: 'Barisal Cadet College', address: 'Protappur, PO- Barishal Cadet College, Upazilla- Babuganj, Dist- Barishal, Bangladesh', phone: '2478869802', email: 'bcc.adjt@army.mil.bd', website: 'https://bcc.army.mil.bd/', image: '' },
        { type: 'Medical', name: 'Sher-e-Bangla Medical College', address: 'Band Road, Barisal', phone: '8804312173783', image: '' },
        { type: 'Medical', name: 'Sher-e-Bangla Medical College Dental Unit', address: 'Band Road, Barisal', phone: '880431', image: '' },
        { type: 'Medical', name: 'Apex Homeopathic Medical College', address: 'P928+H5X, Gora Chand Das Rd, Barishal', phone: '1757818726', image: '' },
        { type: 'Medical', name: 'Barisal Nursing College', address: 'M9P5+PGG, Barishal', phone: '1793521234', image: '' },
        { type: 'Medical', name: 'Institute of Health Technology, Barisal', address: 'Baptist Mission Rd, Barishal', phone: '1775801820', image: '' },
        { type: 'Engineering', name: 'Shaheed Abdur Rab Serniabat Textile Engineering College', address: 'Babuganj, Barishal, Bangladesh', image: '' },
        { type: 'Engineering', name: 'Barisal Engineering College', address: 'PC39+394, Barishal-Bhola Hwy', phone: '88029103956', image: '' },
        { type: 'Engineering', name: 'Shaheed Abdur Rab Serniabat Textile Institute, Gournadi', address: 'P942+8JV, C and B Rd, Barishal 8200', image: '' },
        { type: 'Polytechnic', name: 'Barisal Polytechnic Institute', address: 'Alekandra, 33No word BCC, Barisal 8300, Bangladesh', phone: '88043164684', image: '' },
        { type: 'Polytechnic', name: 'Infra Polytechnic Institute', address: 'Bhanga-Barisal Hwy, Barishal', phone: '1877774000', image: '' },
        { type: 'Polytechnic', name: 'Barisal Ideal Polytechnic Institute', address: 'M8GV+WGX, Barishal', phone: '1712728055', image: '' },
        { type: 'Polytechnic', name: 'Barishal Information Technology College', address: 'C&B Road (Hatem Ali College Chowmatha), Barisal', phone: '88043163496', image: '' },
        { type: 'Polytechnic', name: 'United Polytechnic Institute', address: 'House no: 943, C & B Road, Near 1no C&B Bridge, Barishal', phone: '1755507146', image: '' },
        { type: 'Training', name: 'Shaheed Abdur Rob Serniabat Teacher Training College', address: 'Notullaha Bad,Kashipur, Barisal City, Barisal,Bangladesh', phone: '88043164417', image: '' },
        { type: 'Training', name: 'Higher Secondary Teacher Training Institute', address: 'P8JM+8GP, Gonopara, Barishal', phone: '4312175563', image: '' },
        { type: 'Training', name: 'Sagardi Primary Teacher Training Institute', address: 'Bazar, Road, Barishal', phone: '1912561083', image: '' },
        { type: 'Training', name: 'Agriculture Training Institute, Rahmatpur', address: 'Rahmatpur, Babuganj, Barisal, Bangladesh', image: '' },
        { type: 'Research', name: 'Bangladesh Rice Research Institute, Barisal', address: 'Rahmatpur, Barisal', phone: '88029261661', image: '' },
        { type: 'Research', name: 'Bangladesh Agricultural Research Institute, Barisal', address: 'P95J+GV2, Barishal', phone: '1303365518', image: '' },
        { type: 'Higher Secondary', name: 'Brojomohun College', address: 'BM College Rd, Barishal 8200', phone: '1711131927', image: '' },
        { type: 'Higher Secondary', name: 'Barisal Government Women\'s College', address: 'Agarpur Road, Barisal Sadar', phone: '43164992', image: '' },
        { type: 'Higher Secondary', name: 'Government Syed Hatem Ali College', address: 'Barisal Nobogram Road, Barisal', phone: '2478864984', image: '' },
        { type: 'Higher Secondary', name: 'Barisal Cadet College', address: 'Protappur, PO- Barishal Cadet College, Upazilla- Babuganj, Dist- Barishal', phone: 2478869802, image: '' },
        { type: 'Higher Secondary', name: 'Government Barisal College', address: 'Kali Bari Rd, Barisal 8200', phone: '43164409', image: '' },
        { type: 'Higher Secondary', name: 'Amrita Lal Dey College', address: 'Amrta Lal Dey Rd, Hospital Rd, Barishal 8200', phone: '1718121784', image: '' },
        { type: 'Higher Secondary', name: 'Barishal Government Model School And College', address: 'M9V9+MJ, Raja Bahadur Rd, Barishal 8200', phone: '1710353877', image: '' },
        { type: 'Higher Secondary', name: 'Alekanda Government College', address: 'M9X7+FXW, Polytechnical College Rd, Barishal 8200', phone: '43162966', image: '' },
        { type: 'Higher Secondary', name: 'Shahid Abdur Rab Serniabat College, Kawnia', address: 'P942+8JV, C and B Rd, Barishal 8200', image: '' },
        { type: 'Higher Secondary', name: 'Jagadish Saraswat Girls School & College', address: 'Kali Bari Rd, Barishal', phone: '1531215136', image: '' },
        { type: 'Higher Secondary', name: 'A Karim Ideal College, Palashpur', address: 'Notullaha Bad,Kashipur, Barisal City, Barisal,Bangladesh', phone: '88043164417', image: '' },
        { type: 'Higher Secondary', name: 'Barisal Metropolitan College', address: 'Opsite of BADC, hatem ali Choumatha park, C and B Rd, Barishal', phone: '1703976434', image: '' },
        { type: 'Higher Secondary', name: 'Barisal City College (Day & Night)', address: 'P949+3X5, Fokir Bari Rd, Barishal 8200', image: '' },
        { type: 'Higher Secondary', name: 'Royal Central College', address: 'M9X3+6CQ, Bhanga-Barisal Hwy, Barishal', image: '' },
        { type: 'Higher Secondary', name: 'Rupatoli Jagua College', address: 'M89M+RW8, Barisal - Pirojpur Hwy, Barishal', image: '' },
        { type: 'Higher Secondary', name: 'Kashipur High School and College', address: 'P8GP+XGF, Barishal', phone: '1911145645', image: '' },
        { type: 'Higher Secondary', name: 'Kashipur Girls High School and College', address: 'P8MJ+2G3, Dhaka - Barisal Hwy, Barishal', phone: '1997845261', image: '' },
        { type: 'Higher Secondary', name: 'Mahanagar Day & Night College', address: 'Notullaha Bad,Kashipur, Barisal City', phone: '88043164417', image: '' },
        { type: 'Higher Secondary', name: 'Jahanara Israil School & College (English version)', address: 'P955+VHF, 999 College Row, Barishal 8200', phone: '1751505090', image: '' }
    ]
};

College.create(collegeData)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
