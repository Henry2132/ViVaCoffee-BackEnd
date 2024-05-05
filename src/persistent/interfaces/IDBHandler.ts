export default interface IDBHandler<T>{
    getAll() : Promise<T[]>; //tra ra mag
    getByFilter(filter: any) : Promise<T[]>;
    insert(target: T) : Promise<void>
    update(target: T) : Promise<void>  // T là tham số, có thẻ sử dụng interface nay voi bat ky kieu du liẹu
    delete(filter: any) : Promise<void>
}
//filter là lọc ra mang, any la bat ky
//target là thực hiện các thao tác