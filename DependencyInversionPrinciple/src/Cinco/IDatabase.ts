export interface IDatabase {
    connect(): void;
    disconnect(): void;
    query(sql: string): any[];
}
