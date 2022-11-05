package com.liberty.magic8ball.config;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Getter
@Configuration
@PropertySource("classpath:datetime.properties")
public class DateTimeConfig {

    @Value("${system.default.timezoneId}")
    private String timeZoneId;
}
