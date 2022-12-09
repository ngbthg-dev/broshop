import {MysqlDataSource} from "../../config"
import {Category} from "../model"
import {Repository} from "typeorm"

class CategoryRepository {
    private readonly self: Repository<Category>

    constructor() {
        this.self = MysqlDataSource.manager.getRepository(Category)
    }

    getAll() {
        return this.self.find()
    }
}

export {CategoryRepository}