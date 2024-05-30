import {Builder, By, Key} from "selenium-webdriver"

async function toDoList() {
    const tarefas = [
        'Acordar Esther',
        'Preparar para a escola',
        'Servir pequeno-almoço',
        'Levar para escola',
        'Voltar para casa',
        'Estudar',
        'Buscar Esther na escola',
        'Servir o lanche',
        'Dar banho na Esther',
        'Colocar a Esther para dormir'
    ];

    let driver = await new Builder().forBrowser('firefox').build();

    try{
        for (let elemento of tarefas) {

            await driver.get('https://herziopinto.github.io/lista-de-tarefas/');

            let inputElement = await driver.findElement(By.id('inputTask'));

            await inputElement.sendKeys(elemento);

            await inputElement.sendKeys(Key.RETURN);

            for (let elemento of listaElementos) {
                let textoElemento = await elemento.findElement(By.tagName('label')).getText();
                
                textoElemento.should.equal(elemento);
        
        }
    }}finally {
        await driver.quit();
    }}
toDoList()

 // Espera até que a tarefa apareça na lista
 await driver.wait(driver.findElement(By.xpath(`//label[text()='${tarefa}']`)));