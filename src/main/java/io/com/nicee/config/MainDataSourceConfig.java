package io.com.nicee.config;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration(proxyBeanMethods = false)
public class MainDataSourceConfig {

    @Value("${spring.datasource.main.master.driver-class-name}")
    String driverClassName;

    @Value("${spring.datasource.main.master.url}")
    String jdbcUrl;

    @Value("${spring.datasource.main.master.username}")
    String userName;

    @Value("${spring.datasource.main.master.password}")
    String password;

    @Bean("mainDataSource")
    public DataSource mainDataSource() {
        HikariDataSource mainDataSource = new HikariDataSource();
        mainDataSource.setUsername(userName);
        mainDataSource.setPassword(password);
        mainDataSource.setJdbcUrl(jdbcUrl);
        mainDataSource.setPoolName("Main-Master");
        mainDataSource.setDriverClassName(driverClassName);
        mainDataSource.setMinimumIdle(1);
        mainDataSource.setMaxLifetime(300000);
        return mainDataSource;
    }
}
