import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { IConfirmDialog } from '../interface';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent implements OnInit, AfterViewInit {
    @Input() contents: IConfirmDialog;
    @ViewChild('iconDiv') iconDiv: ElementRef;
    @Output() actionEvent = new EventEmitter<boolean>();

    constructor(
        private confirmationService: ConfirmationService,
        private renderer: Renderer2
    ) {}

    ngOnInit(): void {
        this.confirmationService.confirm({
            accept: () => {
                this.actionEvent.emit(true);
            },
            reject: () => {
                this.actionEvent.emit(false);
            },
        });
    }

    ngAfterViewInit(): void {
        this.renderer.setStyle(this.iconDiv.nativeElement, 'color', this.contents.icon.color);
    }
}
