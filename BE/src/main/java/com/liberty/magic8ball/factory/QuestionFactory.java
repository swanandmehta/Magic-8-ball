package com.liberty.magic8ball.factory;

import com.liberty.magic8ball.config.DateTimeConfig;
import com.liberty.magic8ball.dto.QuestionRequestDto;
import com.liberty.magic8ball.entity.Question;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.UUID;

@Service
public class QuestionFactory {

    private final DateTimeConfig dateTimeConfig;

    public QuestionFactory(DateTimeConfig dateTimeConfig) {
        this.dateTimeConfig = dateTimeConfig;
    }

    public Question createFromQuestionRequest(QuestionRequestDto request) {
        Question question = new Question();

        question.setId(UUID.randomUUID().toString());
        question.setQuestion(request.getQuestion());
        question.setBrowser(request.getBrowser());
        question.setCreatedTime(LocalDateTime.now(ZoneId.of(dateTimeConfig.getTimeZoneId())));
        question.setBrowserLang(request.getLang());

        return question;
    }
}
