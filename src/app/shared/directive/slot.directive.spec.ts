import { ComponentFactory, ComponentRef, ElementRef, EmbeddedViewRef, EnvironmentInjector, InjectionToken, Injector, NgModuleRef, TemplateRef, Type, ViewContainerRef, ViewRef } from '@angular/core';
import { SlotDirective } from './slot.directive';
import { TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared.module';

class ViewContainerRefTest extends ViewContainerRef {
  override get element(): ElementRef<string> {
    throw new Error('Method not implemented.');
  }
  override get injector(): Injector {
    throw new Error('Method not implemented.');
  }
  override get parentInjector(): Injector {
    throw new Error('Method not implemented.');
  }
  override clear(): void {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  override get(index: number): ViewRef | null {
    throw new Error('Method not implemented.' + index);
  }
  override get length(): number {
    throw new Error('Method not implemented.');
  }

  override createEmbeddedView<C>(templateRef: TemplateRef<C>, context?: C | undefined, options?: { index?: number | undefined; injector?: Injector | undefined; } | undefined): EmbeddedViewRef<C>;
  override createEmbeddedView<C>(templateRef: TemplateRef<C>, context?: C | undefined, index?: number | undefined): EmbeddedViewRef<C>;
 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  override createEmbeddedView(templateRef: unknown, context?: unknown, index?: unknown): import("@angular/core").EmbeddedViewRef<string> | import("@angular/core").EmbeddedViewRef<string> {
    throw new Error('Method not implemented.' + index,);
  }
  override createComponent<C>(componentType: Type<C>, options?: { index?: number | undefined; injector?: Injector | undefined; ngModuleRef?: NgModuleRef<unknown> | undefined; environmentInjector?: NgModuleRef<unknown> | EnvironmentInjector | undefined; projectableNodes?: Node[][] | undefined; } | undefined): ComponentRef<C>;
  override createComponent<C>(componentFactory: ComponentFactory<C>, index?: number | undefined, injector?: Injector | undefined, projectableNodes?: string[][] | undefined, environmentInjector?: EnvironmentInjector | NgModuleRef<string> | undefined): ComponentRef<C>;
  override createComponent(componentFactory: unknown, index?: unknown, injector?: unknown, projectableNodes?: unknown, environmentInjector?: unknown): import("@angular/core").ComponentRef<string> | import("@angular/core").ComponentRef<string> {
    throw new Error('Method not implemented.'+index+InjectionToken+injector+projectableNodes+environmentInjector+componentFactory);
  }
  override insert(viewRef: ViewRef, index?: number | undefined): ViewRef {
    throw new Error('Method not implemented.'+viewRef+index);
  }
  override move(viewRef: ViewRef, currentIndex: number): ViewRef {
    throw new Error('Method not implemented.'+viewRef+currentIndex);
  }
  override indexOf(viewRef: ViewRef): number {
    throw new Error('Method not implemented.'+viewRef);
  }
  override remove(index?: number | undefined): void {
    throw new Error('Method not implemented.'+index);
  }
  override detach(index?: number | undefined): ViewRef | null {
    throw new Error('Method not implemented.'+index);
  }

}

describe('SlotDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ViewContainerRef,
        SharedModule
      ],
      declarations: [
      ],
    }).compileComponents();
  });
  it('should create an instance', () => {
    const directive = new SlotDirective(new ViewContainerRefTest);
    expect(directive).toBeTruthy();
  });
});
