const students = [{
	name: "Tanya",
	course: 3,
	subjects: {
	   math: [4, 4, 3, 4],
	   algorithms: [3, 3, 3, 4, 4, 4],
	   data_science: [5, 5, 3, 4]
	}
 }, {
	name: "Victor",
	course: 4,
	subjects: {
	   physics: [5, 5, 5, 3],
	   economics: [2, 3, 3, 3, 3, 5],
	   geometry: [5, 5, 2, 3, 5]
	}
 }, {
	name: "Anton",
	course: 2,
	subjects: {
	   statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
	   english: [5, 3],
	   cosmology: [5, 5, 5, 5]
	}
	}]
 
 const allSubjects = Object.keys(students[2].subjects).map((el) => el.slice(0, 1).toUpperCase() + (el.slice(1).toLowerCase()).replace('_', " "))
 console.log(allSubjects)
 
 //2
 function getAverageMark(student) {
 const Mark = Object.values(student.subjects)
 const allMark = Mark[0].concat(Mark[1]).concat(Mark[2])
 const result= allMark.reduce((acum, marks) => {
	return acum+marks
 })
 return + (result / allMark.length).toFixed(2)
 }
 console.log(getAverageMark(students[0]))
 
 //3
 function getStudentInfo(student) {
	return {
	   "course": student.course,
	   "name": student.name,
	   "averageMark":getAverageMark(student)
	}
 }
 console.log(getStudentInfo(students[2]))
 
 //4
 function getStudentsNames(students) {
	return students.map((student) => {
	   return student.name
	}).sort()
 }
 console.log(getStudentsNames(students))
 
 //5 
 function getBestStudent(students) {
	studentMark = []
	students.forEach((nam) => studentMark.push({ [nam.name]: getAverageMark(nam) }) )
	studentMark.sort((a, b) =>Object.values(b) - Object.values(a) )
	return Object.keys(studentMark[0])
 }
 console.log(getBestStudent(students))
 
 //6
 function calculateWordLetters (text) {
 const substitute = text.replace(/\s/g, '')
 let newText =substitute.toLowerCase().split('')
	let object = {}
	newText.forEach((item) => {
	   object[item] != undefined ? ++object[item]:object[item] = 1
	})
	return object
 }
	console.log(calculateWordLetters ("calculateWordLetters"))