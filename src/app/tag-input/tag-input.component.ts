import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent {
  tags: string[] = [];
  tagInput: string = '';
  allowedKeywords: string[] = ['angular', 'tailwind', 'javascript', 'typescript', 'css', 'html'];

  addTag() {
    if (this.tagInput && !this.tags.includes(this.tagInput ) && this.allowedKeywords.includes(this.tagInput)) {
      this.tags.push(this.tagInput);
      this.tagInput = '';
    }
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.addTag();
    }
  }
}
