var faker = require('faker')
var config = require('./config/config')
var glob = require('glob')
var mongoose = require('mongoose')

var grade = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F']

mongoose.connect(config.db)

var models = glob.sync(config.root + '/app/models/*.js')
models.forEach(function (model) {
  require(model)
})
var Student = mongoose.model('Student')
// first year
for (var i = 0; i < 10; i++) {
  var newStudent = new Student({
    FirstName: faker.name.firstName(),
    LastName: faker.name.lastName(),
    UCID: faker.random.number(),
    Major: 'Elementary',
    BeganEduProg: new Date(faker.date.recent()).toISOString(),
    HighschoolName: faker.company.companyName(),
    isSDA: faker.random.boolean(),
    BackgroundCheck: new Date(faker.date.recent()).toISOString(),
    GPA: [faker.random.number() % 4],
    Provisional: {
      Autobiography: faker.random.boolean(),
      EDUC125: faker.random.arrayElement(grade),
      ProvisionalApplication: faker.random.boolean(),
      ObservationHours: faker.random.number() % 20,
      SpeechAndHearing: faker.random.boolean(),
      MyersBriggs: faker.random.boolean(),
      R1PastorOrDean: faker.random.boolean(),
      R2WorkSupervisor: faker.random.boolean(),
      R3Teacher: faker.random.boolean(),
      FirstFelonStatement: new Date(faker.date.recent()).toISOString(),
      TPCApproval: new Date(faker.date.recent()).toISOString(),
      Comments: faker.lorem.sentences()
    }
  })
  newStudent.save()
    .then(function (v) {
      return
    })
    .catch(function (err) {
      console.log(err)
    })
}

// second years
for (i = 0; i < 10; i++) {
  newStudent = new Student({
    FirstName: faker.name.firstName(),
    LastName: faker.name.lastName(),
    UCID: faker.random.number(),
    Major: 'Elementary',
    BeganEduProg: new Date(faker.date.recent()).toISOString(),
    HighschoolName: faker.company.companyName(),
    isSDA: faker.random.boolean(),
    BackgroundCheck: new Date(faker.date.recent()).toISOString(),
    GPA: [faker.random.number() % 4, faker.random.number() % 4],
    Provisional: {
      Autobiography: true,
      EDUC125: 'A',
      ProvisionalApplication: true,
      ObservationHours: 20,
      SpeechAndHearing: true,
      MyersBriggs: true,
      R1PastorOrDean: true,
      R2WorkSupervisor: true,
      R3Teacher: true,
      FirstFelonStatement: new Date(faker.date.recent()).toISOString(),
      TPCApproval: new Date(faker.date.recent()).toISOString(),
      Comments: faker.lorem.sentences()
    },
    Candidacy: {
      DiversityOBHRS: faker.random.boolean(),
      CandidancyApplication: faker.random.boolean(),
      CandidacyInterview: faker.random.boolean(),
      SophmorePortfolio: faker.random.boolean(),
      Recommendation: new Date(faker.date.recent()).toISOString(),
      FelonyStatement: new Date(faker.date.recent()).toISOString(),
      TCPApproval: new Date(faker.date.recent()).toISOString(),
      PhilosophyOBHRS: faker.random.number() % 20,
      Educ218: faker.random.arrayElement(grade),
      Educ225: faker.random.arrayElement(grade),
      Comments: faker.lorem.sentences(),
      COREReading: [{ DateTaken: new Date(faker.date.recent()).toISOString(), Score: faker.random.number() }],
      COREWriting: [{ DateTaken: new Date(faker.date.recent()).toISOString(), Score: faker.random.number() }],
      COREMathematics: [{ DateTaken: new Date(faker.date.recent()).toISOString(), Score: faker.random.number() }]
    }
  })
  newStudent.save()
    .then(function (v) {
      return
    })
    .catch(function (err) {
      console.log(err)
    })
}

// third years
for (i = 0; i < 10; i++) {
  newStudent = new Student({
    FirstName: faker.name.firstName(),
    LastName: faker.name.lastName(),
    UCID: faker.random.number(),
    Major: 'Elementary',
    BeganEduProg: new Date(faker.date.recent()).toISOString(),
    HighschoolName: faker.company.companyName(),
    isSDA: faker.random.boolean(),
    BackgroundCheck: new Date(faker.date.recent()).toISOString(),
    GPA: [faker.random.number() % 4, faker.random.number() % 4],
    Provisional: {
      Autobiography: true,
      EDUC125: 'A',
      ProvisionalApplication: true,
      ObservationHours: 20,
      SpeechAndHearing: true,
      MyersBriggs: true,
      R1PastorOrDean: true,
      R2WorkSupervisor: true,
      R3Teacher: true,
      FirstFelonStatement: new Date(faker.date.recent()).toISOString(),
      TPCApproval: new Date(faker.date.recent()).toISOString(),
      Comments: faker.lorem.sentences()
    },
    Candidacy: {
      DiversityOBHRS: true,
      CandidancyApplication: true,
      CandidacyInterview: true,
      SophmorePortfolio: true,
      Recommendation: new Date(faker.date.recent()).toISOString(),
      FelonyStatement: new Date(faker.date.recent()).toISOString(),
      TCPApproval: new Date(faker.date.recent()).toISOString(),
      PhilosophyOBHRS: 20,
      Educ218: 'A',
      Educ225: 'A',
      Comments: faker.lorem.sentences(),
      COREReading: [{ DateTaken: new Date(faker.date.recent()).toISOString(), Score: faker.random.number() }],
      COREWriting: [{ DateTaken: new Date(faker.date.recent()).toISOString(), Score: faker.random.number() }],
      COREMathematics: [{ DateTaken: new Date(faker.date.recent()).toISOString(), Score: faker.random.number() }]
    },
    PreTeaching: {
      StudentTeachingAP: faker.random.boolean(),
      Recommendation: faker.random.boolean(),
      BackgroundCheckAP: faker.random.boolean(),
      OneSourceSubmission: faker.random.boolean(),
      WorkRequest: faker.random.boolean(),
      PhysicalTBTest: faker.random.boolean(),
      JRPortfolio: faker.random.boolean(),
      PreSessionST: faker.random.boolean(),
      LearingTheory: faker.random.boolean(),
      GenSecMethOB: faker.random.boolean(),
      FelonyStatement: new Date(faker.date.recent()).toISOString(),
      DateStudentTeaching: new Date(faker.date.recent()).toISOString(),
      TCPApprovalToST: new Date(faker.date.recent()).toISOString(),
      SPEDOBSHRS: faker.random.number() % 20,
      EDUC345: faker.random.arrayElement(grade),
      EDUC346: faker.random.arrayElement(grade),
      EDUC356: faker.random.arrayElement(grade),
      Comments: faker.lorem.sentences()
    }
  })
  newStudent.save()
    .then(function (v) {
      return
    })
    .catch(function (err) {
      console.log(err)
    })
}

// fourth years
for (i = 0; i < 10; i++) {
  newStudent = new Student({
    FirstName: faker.name.firstName(),
    LastName: faker.name.lastName(),
    UCID: faker.random.number(),
    Major: 'Elementary',
    BeganEduProg: new Date(faker.date.recent()).toISOString(),
    HighschoolName: faker.company.companyName(),
    isSDA: faker.random.boolean(),
    BackgroundCheck: new Date(faker.date.recent()).toISOString(),
    GPA: [faker.random.number() % 4, faker.random.number() % 4],
    Provisional: {
      Autobiography: true,
      EDUC125: 'A',
      ProvisionalApplication: true,
      ObservationHours: 20,
      SpeechAndHearing: true,
      MyersBriggs: true,
      R1PastorOrDean: true,
      R2WorkSupervisor: true,
      R3Teacher: true,
      FirstFelonStatement: new Date(faker.date.recent()).toISOString(),
      TPCApproval: new Date(faker.date.recent()).toISOString(),
      Comments: faker.lorem.sentences()
    },
    Candidacy: {
      DiversityOBHRS: true,
      CandidancyApplication: true,
      CandidacyInterview: true,
      SophmorePortfolio: true,
      Recommendation: new Date(faker.date.recent()).toISOString(),
      FelonyStatement: new Date(faker.date.recent()).toISOString(),
      TCPApproval: new Date(faker.date.recent()).toISOString(),
      PhilosophyOBHRS: 20,
      Educ218: 'A',
      Educ225: 'A',
      Comments: faker.lorem.sentences(),
      COREReading: [{ DateTaken: new Date(faker.date.recent()).toISOString(), Score: faker.random.number() }],
      COREWriting: [{ DateTaken: new Date(faker.date.recent()).toISOString(), Score: faker.random.number() }],
      COREMathematics: [{ DateTaken: new Date(faker.date.recent()).toISOString(), Score: faker.random.number() }]
    },
    PreTeaching: {
      StudentTeachingAP: true,
      Recommendation: true,
      BackgroundCheckAP: true,
      OneSourceSubmission: true,
      WorkRequest: true,
      PhysicalTBTest: true,
      JRPortfolio: true,
      PreSessionST: true,
      LearingTheory: true,
      GenSecMethOB: true,
      FelonyStatement: new Date(faker.date.recent()).toISOString(),
      DateStudentTeaching: new Date(faker.date.recent()).toISOString(),
      TCPApprovalToST: new Date(faker.date.recent()).toISOString(),
      SPEDOBSHRS: 20,
      EDUC345: 'A',
      EDUC346: 'A',
      EDUC356: 'A',
      Comments: faker.lorem.sentences()
    },
    StudentTeaching: {
      SeniorPortfolio: faker.random.boolean(),
      Resume: faker.random.boolean(),
      FelonyStatement: new Date(faker.date.recent()).toISOString(),
      StudentTeachingStartDate: new Date(faker.date.recent()).toISOString(),
      GradDate: new Date(faker.date.recent()).toISOString(),
      InitialCertificationDate: new Date(faker.date.recent()).toISOString(),
      CertificationApp: faker.random.boolean(),
      PraxisII: {
        TestName: 'Test1',
        DateTaken: new Date(faker.date.recent()).toISOString(),
        Score: faker.random.number()
      },
      FirstSemester: {
        SchoolName: faker.company.companyName(),
        TeacherName: faker.name.firstName() + ' ' + faker.name.lastName(),
        Dates: new Date(faker.date.recent()).toISOString(),
        Contract: faker.random.boolean(),
        StudentTeacherPracticum: faker.random.boolean(),
        CTEval: faker.random.boolean(),
        CTReflectiveQuestions: faker.random.boolean()
      },
      SecondSemester: {
        SchoolName: faker.company.companyName(),
        TeacherName: faker.name.firstName() + ' ' + faker.name.lastName(),
        Dates: new Date(faker.date.recent()).toISOString(),
        Contract: faker.random.boolean(),
        StudentTeacherPracticum: faker.random.boolean(),
        CTEval: faker.random.boolean(),
        CTReflectiveQuestions: faker.random.boolean()
      }
    }
  })
  newStudent.save()
    .then(function (v) {
      return
    })
    .catch(function (err) {
      console.log(err)
    })
}
