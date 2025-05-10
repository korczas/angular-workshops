import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForVisaComponent } from './apply-for-visa.component';

describe('ApplyForVisaComponent', () => {
    let component: ApplyForVisaComponent;
    let fixture: ComponentFixture<ApplyForVisaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ApplyForVisaComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ApplyForVisaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
