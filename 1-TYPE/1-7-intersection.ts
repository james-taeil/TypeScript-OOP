{
    // TODO intersection type
    // * union type은 or 같은 느낌었다면, intersection type은 and 같은 느낌이다.

    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }

    internWork({
        name: 'abc',
        score: 100,
        employeeId: 1,
        work: () => { console.log('Work!') }
    });
}