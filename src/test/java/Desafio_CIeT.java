
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

    void ValidateField(String fieldName, String value, String assertValue) {
        WebDriver driver = new ChromeDriver();
        driver.get(WEBSITE_URL);
        driver.findElement(By.id(fieldName)).sendKeys(value);
        driver.findElement(By.xpath("//*[@id='page-top']/div[1]/form/div/button")).click();
        assertEquals(driver.findElement(By.xpath("//*[@id='page-top']/div[2]/div")).getText(), assertValue);
        driver.close();
    }

    @BeforeEach
    void Setup() {
        File file = new File(WEBDRIVER_PATH);
        System.setProperty("webdriver.chrome.driver", file.getAbsolutePath());
    }

    @Test
    void PrimeiraParte() {
        ValidateField("query", "Science: Computers", "No questions found.");
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
  
}
