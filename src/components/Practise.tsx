
function Practise() {
        // type User = {
        //     name: string;
        //     age: number;
        //     address?: string;
        // }
        
        // const user: User = {
        //     name: 'mridul',
        //     age: 12,
        // }
        // function login(userData: User): User {
        //     return userData;
        // }

        // console.log(login(user))

        // custome type

        // type ID = number | string;

        // const userId:ID = 'KDJS';

        // interface type

        // interface Transection {
        //   payerAccountNumber: number;
        //   payeeAccountNumber: number;
        // }

        // interface BankAccount {
        //   accountNumber: number;
        //   balance: number;
        //   transactions: Transection[];
        //   accountHolder: string;
        //   isActive: boolean;
        // }
        // const transection1: Transection = {
        //   payerAccountNumber: 123,
        //   payeeAccountNumber: 456,
        // };
        // const transection2: Transection = {
        //   payerAccountNumber: 1233,
        //   payeeAccountNumber: 4563,
        // };

        // const bankAccount: BankAccount = {
        //   accountNumber: 123,
        //   balance: 1000,
        //   transactions: [transection1, transection2],
        //   accountHolder: 'abc',
        //   isActive: true, 
        // };


        // interface Book {
        //   name: string;
        //   price: number;
        // }

        // interface EBook extends Book {
        //   // name: string;
        //   // price: number;
        //   fileSize: number;
        //   format: string;
        // }
        // interface AudioBook extends EBook {
        //   duration: number;
        // };
        // const book: AudioBook = {
        //   name: 'book1',
        //   price: 100, 
        //   fileSize: 1000,
        //   format: 'pdf',
        //   duration: 10,
        // };

        // interface marge
        // interface Book {
        //   name: string;
        //   price: number;
        // }

        // interface Book {
        //   size: number;
        // }
        // const book: Book = {
        //   name: 'book1',
        //   price: 100, 
        //   size: 1000,
        // };

        // unions

        // type ID = number | string;

        // function printId(id : ID) {
        //   if(typeof id == 'string') {

        //     console.log(id.toUpperCase());
        //   } else {
        //     console.log(id);
        //   }
        // }
        // printId(2);

        // function getFirstThree(x: string | number[]) {
        //   return x.slice(0, 3); 
        // }
        // console.log(getFirstThree('hdshdj'));

        // Generics

        // function logString(arg: string) {
        //   console.log(arg);
        //   return arg; 
        // }

        // function logNumber(arg: number) {
        //   console.log(arg);
        //   return arg; 
        // }

        // function logArray(arg: any[]) {
        //   console.log(arg);
        //   return arg; 
        // }

        // function logAnything<T>(arg: T): T {
        //   console.log(arg);
        //   return arg;
        // }

        // logAnything('djsd');

        // interface Student {
        //   class: number;
        // }
        // const studentList: Student[] = [{class: 33}, {class: 34}, {class: 35}];

        // interface Teacher {
        //   name: string;
        //   age: number;
        // }
        // const teacherList: Teacher[] = [{name: 'kamal', age: 33}, {name: 'jamal', age: 34}, {name: 'tomal', age: 35}];

        
        // function getOldest<T extends Student >(studentList: T[]): T {
        //   return studentList.sort((a, b) => b.class - a.class)[0];
        // }
        // const findStudent = getOldest(teacherList);
        // findStudent



        // interface HasAge {
        //   age: number;
        // }
        // const people: HasAge[] = [{age: 34}, {age: 44}, {age: 24}];
        
        // interface Player {
        //   name: string;
        //   age: number; 
        // }
        // const players: Player[] = [{name: 'john', age: 34},{name: 'tom', age: 24},{name: 'lath', age: 44}];

        // function getOldests<T extends HasAge >(people: T[]): T{
        //   return people.sort((a,b) => b.age - a.age)[0];
        // }

        // Assertion
        // const person = getOldests(players) as Player;

        // Generic
        // const person = getOldests(players);
        // person.

        // interface IPost {
        //   title: string;
        //   id: number;
        //   description: string;
        // }
        // interface IUser {
        //   id: number;
        //   name: string;
        //   age: number;
        // }

        // const fetchPostData = async (path: string): Promise<IPost[]> => {
        //   const response = await fetch(`www.example.com${path}`);
        //   return response.json();
        // };
        // const fetchUserData = async (path: string): Promise<IUser[]> => {
        //   const response = await fetch(`www.example.com${path}`);
        //   return response.json();
        // };

        // const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
        //   const response = await fetch(`www.example.com${path}`);
        //   return response.json();
        // };

        // (async() => {
        //   // const posts = await fetchPostData('/posts');
        //   // const users = await fetchUserData('/users');
        //   const users = await fetchData<IUser[]>('/users');
        // })();

        // interface ICredential {
        //   username: string;
        //   password: string; 
        // }

        // function login(credentials: ICredential): boolean {
        //   console.log(credentials);
        //   return true;
        // }

        // const user = {
        //   username: 'kamal',
        //   password: '123456',
        //   isAdmin: true,
        // }

        // login(user);

        // interface IAuth {
        //   username: string;
        //   password: string;
        //   login(username: string, password: string): void;
        // }

        // const auth = {
        //   username: 'kamal',
        //   password: '12345678',
        //   login(username: string, password: string) {

        //   }
        // }

        


        
  return (
    <div>Practise</div>
  )
}

export default Practise