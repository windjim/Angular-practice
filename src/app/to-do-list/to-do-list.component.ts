import { Component, OnInit } from '@angular/core';
import { TodolistService } from './todolist.service';
import { Todo } from './todo.model';
import { TodoStatusType } from './todo-status-enum';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {

  constructor(public todoService: TodolistService) { }
  ngOnInit(): void {
  }
  /*
  原本想說要放在 service 裡面
  在 Angular 中，直接在模板中使用服務（service）是可以的，但通常不建議這樣做，原因如下：
  1. 可測試性：將服務邏輯直接放在模板中會使得單元測試變得更加複雜，因為你需要模擬服務的行為。
  2. 可維護性：如果服務的邏輯變得複雜，直接在模板中使用可能會導致模板變得難以理解和維護。
  3. 分離關注點：將業務邏輯放在組件中而不是模板中，可以更好地遵循分離關注點的原則，使得代碼更清晰。
  */
  todoStatusType = TodoStatusType;
   status = TodoStatusType.All;

  // 設定顯示狀態
  setStatus(num: number) {
    this.status = num;
  }

  // 讀取清單列表
  getTodoList(): Todo[] {
    let todoList: Todo[] = [];
    switch(this.status) {
      case TodoStatusType.Finished:
        todoList = this.completed;
        break;
      case TodoStatusType.Unfinished:
        todoList = this.unCompleted;
        break;
      default:
        todoList = this.todoService.getList;
        break;
    }
    return todoList;
  }
  // 取得未完成列表
  get unCompleted(): Todo[] {
    return this.todoService.getTodosByStatus(false);
  }
  // 取得完成列表
  get completed(): Todo[] {
    return this.todoService.getTodosByStatus(true);
  }
  // 新增待辦事項
  addTodo(event: Event):void {
    const inputRef = event.target as HTMLInputElement;
    if(inputRef.value.trim()) {
      this.todoService.add(inputRef.value);
      inputRef.value = ''; 
    }
  }
  // 刪除待辦事項
  remove(id: number): void {
    this.todoService.remove(id);
  }
  // 編輯代辦清單
  edit(todo: Todo): void {
    todo.setEditMode = true;
  }
  // 更新待辦事項
  update(todo: Todo, val: string): void{
    if(val.trim()) {
      todo.setTitle = val;
      todo.setEditMode = false;
    }
  }
  // 取消更新
  cancelUpdate(todo: Todo): void{
    todo.setEditMode = false;
  }
  // 清除已完成事項
  clearCompleted(): void {
    this.todoService.removeCompleted();
  }
}
