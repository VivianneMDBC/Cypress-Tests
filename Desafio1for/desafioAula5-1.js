import { Builder, By, Key } from "selenium-webdriver";
import { should } from "chai";
should();

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

    await driver.get('https://herziopinto.github.io/lista-de-tarefas/');

    try {
        for (var x = 0; x < tarefas.length; x++) {
            let inputElement = await driver.findElement(By.id('inputTask'));
            await inputElement.sendKeys(tarefas[x]);
            await inputElement.sendKeys(Key.RETURN);
         
        }

        // Coleta todos os textos dos elementos da lista
        let listaElementos = await driver.findElements(By.xpath('/html/body/div/section/ul/li'));
        let textosElementos = await Promise.all(listaElementos.map(async (elemento) => {
            return await elemento.findElement(By.tagName('label')).getText();
        }));

        // Compara os textos coletados com as tarefas
        for (var i = 0; i < tarefas.length; i++) {
            textosElementos[i].should.equal(tarefas[i]);
        }
    } finally {
        await driver.quit();
    }
}

toDoList();