
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.io.File;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.openqa.selenium.WebElement;

public class Desafio_CIeT {

    private final String WEBDRIVER_PATH = "C:\\Users\\apfer\\Downloads\\chromedriver.exe";
    private final String WEBSITE_URL = "https://opentdb.com/browse.php";

    
    @BeforeEach
    void Setup() {
        File file = new File(WEBDRIVER_PATH);
        System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
    }

    @Test
    void PrimeiraParte() {
        WebDriver driver = new ChromeDriver();
        driver.get(WEBSITE_URL);
        driver.findElement(By.id("query")).sendKeys("Science: Computers");
        driver.findElement(By.xpath("//*[@id='page-top']/div[1]/form/div/button")).click();
        assertEquals(driver.findElement(By.xpath("//*[@id='page-top']/div[2]/div")).getText(), "No questions found.");
                
        driver.close();
    }


    @Test
    void SegundaParte() {
        WebDriver driver = new ChromeDriver();
        driver.get(WEBSITE_URL);
        driver.findElement(By.id("query")).sendKeys("Science: Computers");
        driver.findElement(By.xpath("//*[@id=\"type\"]/option[3]")).click();
        driver.findElement(By.xpath("//*[@id='page-top']/div[1]/form/div/button")).click();
        assertEquals(driver.findElements(By.xpath("//*[@id=\"page-top\"]/div[2]/table/tbody/tr")).size(), 25);
        assertEquals (driver.findElement(By.xpath("//*[@id='page-top']/div[2]/center/ul")).isEnabled(), true);
        
       driver.close();
    }
  
    
    @Test
    void TerceiraParte() {
        WebDriver driver = new ChromeDriver();
        driver.get(WEBSITE_URL);
        driver.findElement(By.id("query")).sendKeys("Print744");
        driver.findElement(By.xpath("//*[@id=\"type\"]/option[2]")).click();
        driver.findElement(By.xpath("//*[@id='page-top']/div[1]/form/div/button")).click();
        driver.findElement(By.xpath("//a[@href='user_profile.php?user=2668']")).click();
        assertEquals(driver.findElement(By.xpath("//*[@id=\"page-top\"]/div[2]/table[1]/tbody/tr/td[3]")).getText(),"Standard User");
      
        driver.close();
    }
}
