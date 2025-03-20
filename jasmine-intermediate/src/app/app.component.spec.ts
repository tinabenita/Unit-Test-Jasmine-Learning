import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  xit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  xit(`should have the 'jasmine-intermediate' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('jasmine-intermediate');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, jasmine-intermediate'
    );
  });

  describe('this test', () => {
    it(
      'looks async but is synchronous',
      <any>fakeAsync((): void => {
        let flag = false;
        setTimeout(() => {
          flag = true;
        }, 100);
        expect(flag).toBe(false);
        tick(50);
        expect(flag).toBe(false);
        tick(50);
        expect(flag).toBe(true);
      })
    );
  });

  describe('this test is a flush demo', () => {
    it(
      'looks async but is synchronous',
      <any>fakeAsync((): void => {
        let flag = false;
        setTimeout(() => {
          flag = true;
        }, 100);
        expect(flag).toBe(false);
        flush();
        /*
        The tick calls are replaced with a single flush call.
        The flush function advances the virtual clock and executes all pending timers, ensuring that the setTimeout callback is executed.
        */
        expect(flag).toBe(true);
      })
    );
  });
});
