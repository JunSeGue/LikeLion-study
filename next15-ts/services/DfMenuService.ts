import { Menu } from "@/entities/Menu";
import { MenuListModel } from "@/models/MenuListModel";
import { SbMenuRepository } from "@/repositories/SMenuRepository";

export class DfMenuService {
    

    constructor(private repository: SbMenuRepository = new SbMenuRepository()) {
        //변수 선언과 객체 초기화 자동 설정
    }
    async getList(): Promise<MenuListModel[]> {
        const menus: Menu[]  = await this.repository.fetchAll(); // fetchAll() 메서드 호출
       
        return menus.map((menu) => {
            const model : MenuListModel = {
                ...menu,
                img: "default.svg"
            }
            return model;
        });
        
    }
}