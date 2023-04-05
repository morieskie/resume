import { ComponentFactory, ComponentRef, ElementRef, EmbeddedViewRef, EnvironmentInjector, Injector, NgModuleRef, TemplateRef, Type, ViewContainerRef, ViewRef } from '@angular/core';
import { SlotDirective } from './slot.directive';
import { TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared.module';

class ViewContainerRefTest extends ViewContainerRef {
  override get element(): ElementRef<any> {
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
  override get(index: number): ViewRef | null {
    throw new Error('Method not implemented.');
  }
  override get length(): number {
    throw new Error('Method not implemented.');
  }

  override createEmbeddedView<C>(templateRef: TemplateRef<C>, context?: C | undefined, options?: { index?: number | undefined; injector?: Injector | undefined; } | undefined): EmbeddedViewRef<C>;
  override createEmbeddedView<C>(templateRef: TemplateRef<C>, context?: C | undefined, index?: number | undefined): EmbeddedViewRef<C>;
  override createEmbeddedView(templateRef: unknown, context?: unknown, index?: unknown): import("@angular/core").EmbeddedViewRef<any> | import("@angular/core").EmbeddedViewRef<any> {
    throw new Error('Method not implemented.');
  }
  override createComponent<C>(componentType: Type<C>, options?: { index?: number | undefined; injector?: Injector | undefined; ngModuleRef?: NgModuleRef<unknown> | undefined; environmentInjector?: NgModuleRef<unknown> | EnvironmentInjector | undefined; projectableNodes?: Node[][] | undefined; } | undefined): ComponentRef<C>;
  override createComponent<C>(componentFactory: ComponentFactory<C>, index?: number | undefined, injector?: Injector | undefined, projectableNodes?: any[][] | undefined, environmentInjector?: EnvironmentInjector | NgModuleRef<any> | undefined): ComponentRef<C>;
  override createComponent(componentFactory: unknown, index?: unknown, injector?: unknown, projectableNodes?: unknown, environmentInjector?: unknown): import("@angular/core").ComponentRef<any> | import("@angular/core").ComponentRef<any> {
    throw new Error('Method not implemented.');
  }
  override insert(viewRef: ViewRef, index?: number | undefined): ViewRef {
    throw new Error('Method not implemented.');
  }
  override move(viewRef: ViewRef, currentIndex: number): ViewRef {
    throw new Error('Method not implemented.');
  }
  override indexOf(viewRef: ViewRef): number {
    throw new Error('Method not implemented.');
  }
  override remove(index?: number | undefined): void {
    throw new Error('Method not implemented.');
  }
  override detach(index?: number | undefined): ViewRef | null {
    throw new Error('Method not implemented.');
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
