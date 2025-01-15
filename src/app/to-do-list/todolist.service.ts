import { Injectable } from '@angular/core';
import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root'
})

export class TodolistService {
  constructor() { }
  private todoList: Todo[] = [];
  /*
  Angular 的服務（service）中，通常會放置以下幾類邏輯：
  1. 業務邏輯：任何與應用程序業務相關的邏輯，例如數據處理、計算等。
  2. 數據存取：與後端 API 的交互邏輯，包括發送 HTTP 請求、處理響應、錯誤處理等。
  3. 狀態管理：如果你的應用需要共享狀態，服務可以用來管理應用的狀態，並提供方法來更新和獲取狀態。
  4. 輔助功能：一些通用的輔助功能，例如格式化日期、處理字符串等。
  */
  // 取得待辦事項清單
  get getList(): Todo[] {
    return this.todoList;
  }
  // 取得未完成/完成列表
  getTodosByStatus(completed: boolean): Todo[]{
    return this.todoList.filter(todo => todo.getStatus === completed);
  }
  add(val: string): void {
    this.todoList.push(new Todo(val));
  }
  remove(id: number): void {
    this.todoList = this.todoList.filter(todo => todo.getId !== id);
  }
  removeCompleted(): void {
    /*
      原本寫這樣
      this.todoList = this.todoList.filter(todo => todo.getStatus !== true);
    */ 
    this.todoList = this.getTodosByStatus(false);
  }
}
