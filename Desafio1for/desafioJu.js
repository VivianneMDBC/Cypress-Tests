import{ Builder, By, Key } from "selenium-webdriver"
import { should } from "chai";
should()

//Bloco Describe- agrupa IT (Testes individuais)
describe('Segundo teste', function(){
//IT ( Teste Individual)
it('Segundo teste', async function(){
        //Abrir no Navegador
        let driver = new Builder().forBrowser("firefox").build()
    
    
    
        // Navegar até o site
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/")
    
        //Encontrar o input e digitar uma nova tarefa - Adicionar uma tarefa
        await driver.findElement(By.id('inputTask')).sendKeys("00 Aprender Selenium", Key.RETURN)
        
    
        // Assertion - Verificação no texto da tarefa
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]")).getText().then(function(value) {
            return value
        });
    
        //Tarefa de casa:
        await driver.findElement(By.id("inputTask")).sendKeys("01 Acordar as 4h da manhã", Key.RETURN)
       
        let seleniumText1 = await driver. findElement(By.xpath('/html/body/div/section/ul/li[2]')).getText().then(function(value) { 
            return value
         });
         
    
         await driver.findElement(By.id("inputTask")).sendKeys("02 Orar e Meditar", Key.RETURN)
        let seleniumText2 = await driver. findElement(By.xpath('/html/body/div/section/ul/li[3]')).getText().then(function(value) { 
            return value
         });
         
         await driver.findElement(By.id("inputTask")).sendKeys("03 Correr até a divisa", Key.RETURN)
         let seleniumText3 = await driver. findElement(By.xpath('/html/body/div/section/ul/li[4]')).getText().then(function(value) { 
             return value
          });
         
          
          await driver.findElement(By.id("inputTask")).sendKeys("04 Acordar e arrumar a Lisie", Key.RETURN)
          let seleniumText4 = await driver. findElement(By.xpath('/html/body/div/section/ul/li[5]')).getText().then(function(value) { 
              return value
           });
         
           await driver.findElement(By.id("inputTask")).sendKeys("05 Levar Lisie para a escola", Key.RETURN)
           let seleniumText5 = await driver. findElement(By.xpath('/html/body/div/section/ul/li[6]')).getText().then(function(value) { 
               return value
            });
    
            await driver.findElement(By.id("inputTask")).sendKeys("06 Fazer Compras e Pagamentos", Key.RETURN)
            let seleniumText6 = await driver. findElement(By.xpath('/html/body/div/section/ul/li[7]')).getText().then(function(value) { 
                return value
             });
    
             await driver.findElement(By.id("inputTask")).sendKeys("07 Assistir aula de Inglês", Key.RETURN)
             let seleniumText7 = await driver. findElement(By.xpath('/html/body/div/section/ul/li[8]')).getText().then(function(value) { 
                 return value
              });
              
              await driver.findElement(By.id("inputTask")).sendKeys("08 Fazer o almoço", Key.RETURN)
              let seleniumText8 = await driver. findElement(By.xpath('/html/body/div/section/ul/li[9]')).getText().then(function(value) { 
                  return value
               });
    
               await driver.findElement(By.id("inputTask")).sendKeys("09 Montar Planejamento Contábil", Key.RETURN)
               let seleniumText9 = await driver. findElement(By.xpath('/html/body/div/section/ul/li[10]')).getText().then(function(value) { 
                   return value
                });
                
                await driver.findElement(By.id("inputTask")).sendKeys("10 Verificar NF e CNDs da empresa XXX", Key.RETURN)
                let seleniumText10 = await driver. findElement(By.xpath('/html/body/div/section/ul/li[11]')).getText().then(function(value) { 
                    return value
                 });
                await driver.quit()
    
        //assertion usando Node puro - Vanilla JS
        //assert.strictEqual("Aprender Selenium").
    
        //Assertion com o Chai
        seleniumText.should.equal("00 Aprender Selenium")
        seleniumText1.should.equal("01 Acordar as 4h da manhã")
        seleniumText2.should.equal("02 Orar e Meditar")
        seleniumText3.should.equal("03 Correr até a divisa")
        seleniumText4.should.equal("04 Acordar e arrumar a Lisie")
        seleniumText5.should.equal("05 Levar Lisie para a escola")
        seleniumText6.should.equal("06 Fazer Compras e Pagamentos")
        seleniumText7.should.equal("07 Assistir aula de Inglês")
        seleniumText8.should.equal("08 Fazer o almoço")
        seleniumText9.should.equal("09 Montar Planejamento Contábil")
        seleniumText10.should.equal("10 Verificar NF e CNDs da empresa XXX")
    
       
            //for(i = seleniumText;i <= seleniumText10; i++){
                //pritf("%d", i);}
          
            //for(let i= 11; i>= 11; i++){
              //seleniumText("/html/body/div/section/ul/li[1]")//
            //}
        //Fechar o navegador
        //await driver.quit()
    
    })


})