var mongoose = require('mongoose')
var Schema = mongoose.Schema

var validateGrade = function (v) {
  return /A|A-|B+|B|B-|C+|C|C-|D+|D|D-|F|^$/i.test(v)
}

var validateMajor = function (v) {
  return /Elementary|Secondary|^$/i.test(v)
}

var studentSchema = new Schema({
  BeganEduProg: { type: Date, default: null },
  UCID: { type: Number, default: 0 },
  LastName: { type: String, default: '' },
  FirstName: { type: String, default: '' },
  Major: { type: String, default: 0, validate: { validator: validateMajor } },
  Ethnicity: { type: String, default: '' },
  HighschoolName: { type: String, default: '' },
  isSDA: { type: Boolean, default: true },
  BackgroundCheck: { type: Date, default: null },
  GPA: [Number],
  Provisional: {
    Autobiography: { type: Boolean, default: false },
    EDUC125: { type: String, default: '' },
    ProvisionalApplication: { type: Boolean, default: false },
    ObservationHours: { type: Number, default: 0 },
    SpeechAndHearing: { type: Boolean, default: false },
    MyersBriggs: { type: Boolean, default: false },
    R1PastorOrDean: { type: Boolean, default: false },
    R2WorkSupervisor: { type: Boolean, default: false },
    R3Teacher: { type: Boolean, default: false },
    FirstFelonStatement: { type: Date, default: null },
    TPCApproval: { type: Date, default: null },
    Comments: { type: String, default: '' }
  },
  Candidacy: {
    DiversityOBHRS: { type: Boolean, default: false },
    CandidancyApplication: { type: Boolean, default: false },
    CandidacyInterview: { type: Boolean, default: false },
    SophmorePortfolio: { type: Boolean, default: false },
    Recommendation: { type: Date, default: null },
    FelonyStatement: { type: Date, default: null },
    TCPApproval: { type: Date, default: null },
    PhilosophyOBHRS: { type: Number, default: 0 },
    Educ218: { type: String, default: '', validate: { validator: validateGrade } },
    Educ225: { type: String, default: '' },
    Comments: { type: String, default: '' },
    PPSTReading: [{ DateTaken: { type: Date, default: null }, Score: { type: Number, default: 0 } }],
    PPSTWriting: [{ DateTaken: { type: Date, default: null }, Score: { type: Number, default: 0 } }],
    PPSTMathematics: [{ DateTaken: { type: Date, default: null }, Score: { type: Number, default: 0 } }],
    COREReading: [{ DateTaken: { type: Date, default: null }, Score: { type: Number, default: 0 } }],
    COREWriting: [{ DateTaken: { type: Date, default: null }, Score: { type: Number, default: 0 } }],
    COREMathematics: [{ DateTaken: { type: Date, default: null }, Score: { type: Number, default: 0 } }]
  },
  PreTeaching: {
    StudentTeachingAP: { type: Boolean, default: false },
    Recommendation: { type: Boolean, default: false },
    BackgroundCheckAP: { type: Boolean, default: false },
    OneSourceSubmission: { type: Boolean, default: false },
    WorkRequest: { type: Boolean, default: false },
    PhysicalTBTest: { type: Boolean, default: false },
    JRPortfolio: { type: Boolean, default: false },
    PreSessionST: { type: Boolean, default: false },
    LearingTheory: { type: Boolean, default: false },
    GenSecMethOB: { type: Boolean, default: false },
    FelonyStatement: { type: Date, default: null },
    DateStudentTeaching: { type: Date, default: null },
    TCPApprovalToST: { type: Date, default: null },
    SPEDOBSHRS: { type: Number, default: 0 },
    EDUC345: { type: String, default: '' },
    EDUC346: { type: String, default: '' },
    EDUC356: { type: String, default: '' },
    Comments: { type: String, default: '' }
  },
  StudentTeaching: {
    SeniorPortfolio: { type: Boolean, default: false },
    Resume: { type: Boolean, default: false },
    FelonyStatement: { type: Date, default: null },
    StudentTeachingStartDate: { type: Date, default: null },
    GradDate: { type: Date, default: null },
    InitialCertificationDate: { type: Date, default: null },
    CertificationApp: { type: Boolean, default: false },
    PraxisII: {
      TestName: { type: String, default: '' },
      DateTaken: { type: Date, default: null },
      Score: { type: Number, default: 0 }
    },
    FirstSemester: {
      SchoolName: { type: String, default: '' },
      TeacherName: { type: String, default: '' },
      Dates: { type: Date, default: null },
      Contract: { type: Boolean, default: false },
      StudentTeacherPracticum: { type: Boolean, default: false },
      CTEval: { type: Boolean, default: false },
      CTReflectiveQuestions: { type: Boolean, default: false }
    },
    SecondSemester: {
      SchoolName: { type: String, default: '' },
      TeacherName: { type: String, default: '' },
      Dates: { type: Date, default: null },
      Contract: { type: Boolean, default: false },
      StudentTeacherPracticum: { type: Boolean, default: false },
      CTEval: { type: Boolean, default: false },
      CTReflectiveQuestions: { type: Boolean, default: false }
    }
  }
})

mongoose.model('Student', studentSchema)
