import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListComponent } from './order-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StarRatingComponent } from 'modules/shared/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingService } from '../services/rating/rating.service';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;
  let ratingService: RatingService;

  // Antes de cada teste, configure o módulo de teste e prepare o ambiente
  beforeEach(async () => {
    // Configurando o módulo de teste para o componente 'OrderListComponent'
    await TestBed.configureTestingModule({
      declarations: [OrderListComponent],
      imports: [StarRatingComponent, ReactiveFormsModule],
    }).compileComponents();

    ratingService = TestBed.inject(RatingService);
    // Criando o componente dentro do ambiente de teste
    fixture = TestBed.createComponent(OrderListComponent);
    // Obtendo a instância do componente
    component = fixture.componentInstance;
    // Detectando as mudanças iniciais (por exemplo, ngOnInit)
    fixture.detectChanges();
  });

  // Um teste simples para verificar se o componente foi criado corretamente
  it('should create', () => {
    // Esperamos que o componente tenha sido instanciado corretamente
    expect(component).toBeTruthy();
  });

  it('should enable the submit button when the form is valid', () => {
    // Obtendo o botão de envio do formulário
    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );
    // Esperamos que o botão esteja desabilitado inicialmente
    expect(submitButton.disabled).toBeTruthy();
    // Preenchendo os campos do formulário
    // component.form.controls.rating.setValue(4);

    // Obtendo as estrelas do componente
    const [firstStar, secondStar]: HTMLSpanElement[] =
      fixture.nativeElement.querySelectorAll('[role=radio]');
    // Clicando na quarta estrela
    secondStar.click();
    // Detectando as mudanças no componente
    fixture.detectChanges();
    // Esperamos que o botão esteja habilitado
    expect(submitButton.disabled).toBe(false);
  });

  it('should call "onSubmit" function when button is clicked', () => {
    jest.spyOn(component, 'onSubmit');
    // Obtendo o botão de envio do formulário
    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );
    // Obtendo as estrelas do componente
    const [firstStar, secondStar]: HTMLSpanElement[] =
      fixture.nativeElement.querySelectorAll('[role=radio]');
    // Clicando na quarta estrela
    firstStar.click();
    // Detectando as mudanças no componente
    fixture.detectChanges();

    // Clicando no botão de envio
    submitButton.click();

    // Esperamos que a função "onSubmit" tenha sido chamada
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call "setRating" function when button is clicked', () => {
    jest.spyOn(ratingService, 'setRating');
    // Obtendo o botão de envio do formulário
    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector(
      'button[type="submit"]'
    );
    // Obtendo as estrelas do componente
    const [firstStar, secondStar]: HTMLSpanElement[] =
      fixture.nativeElement.querySelectorAll('[role=radio]');
    // Clicando na quarta estrela
    firstStar.click();
    // Detectando as mudanças no componente
    fixture.detectChanges();

    // Clicando no botão de envio
    submitButton.click();

    // Esperamos que a função "onSubmit" tenha sido chamada
    expect(ratingService.setRating).toHaveBeenCalledWith({
      rating: 1,
      comment: ""
    });
  });

  it('should input text into the comment field', () => {
    // Obtendo o campo de comentário
    const commentInput: HTMLInputElement = fixture.nativeElement.querySelector(
      'input[type="text"]'
    );
    // Preenchendo o campo de comentário
    commentInput.value = 'This is a test comment';
    // Emitindo o evento de mudança no campo de comentário
    commentInput.dispatchEvent(new Event('input'));
    // Detectando as mudanças no componente
    fixture.detectChanges();
    // Esperamos que o campo de comentário tenha sido preenchido
    expect(commentInput.value).toBe('This is a test comment');
  });
});
