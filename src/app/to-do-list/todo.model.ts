// 資料模型定義
export class Todo {
    private id: number;
    private title: string;
    private completed: boolean;
    private editMode: boolean;
    constructor(title: string) {
        this.id = new Date().getTime()
        this.title = title || "";
        this.completed = false;
        this.editMode = false;
    }
    get getId() {
        return this.id;
    }
    get getTitle() {
        return this.title;
    }
    set setTitle(txt: string) {
        this.title = txt;
    }
    get getStatus() {
        return this.completed;
    }
    toggleCompletion(): void {
        this.completed = !this.completed;
    }
    get getEditMode() {
        return this.editMode;
    }
    set setEditMode(isEdit: boolean){
        this.editMode = isEdit;
    }
}
