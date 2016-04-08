var app = angular.module('examApp', []);


app.controller('ExamController', ['studentFactory', function (studentFactory) {
        var self = this;
        self.studentsInfo = studentFactory.studentsInfo;
    }]);

app.filter('myArrayFilter', [function () {

        return function (inputList) {
            var output = 0;
            angular.forEach(inputList, function (inputItem) {

                if (inputItem.hasOwnProperty('grade')) {
                    output += (+inputItem.grade);
                }
                ;

            });
            return (output / 2);
        };
    }]);

app.directive('studentGrades', [function () {
        var output = {
            templateUrl: 'views/studentDirective.html'
        };
        return output;
    }]);

app.factory('studentFactory', [function () {
        
        var studentsInfo = {};

        studentsInfo.allCourses = [
            {courseId: 1000, courseName: "Basic Programming"},
            {courseId: 1001, courseName: "Advanced Programming"},
            {courseId: 1003, courseName: "DataBase Intro"}];
        studentsInfo.students = [];
        studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
        studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
        studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
        studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});
        
        return {
            studentsInfo : studentsInfo
        };
        
    }]);