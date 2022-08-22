import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SizingPageComponent} from './sizing-page.component';

describe('SizingPageComponent', () => {
    let component: SizingPageComponent;
    let fixture: ComponentFixture<SizingPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SizingPageComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SizingPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
