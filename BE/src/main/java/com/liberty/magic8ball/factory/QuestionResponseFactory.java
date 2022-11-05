package com.liberty.magic8ball.factory;

import com.liberty.magic8ball.dto.QuestionRequestDto;
import com.liberty.magic8ball.dto.QuestionResponseDto;
import com.liberty.magic8ball.entity.Question;
import org.springframework.stereotype.Service;

@Service
public class QuestionResponseFactory {
    public QuestionResponseDto createFromQuestion(Question question) {
        QuestionResponseDto dto = new QuestionResponseDto();

        dto.setAns(question.getAns().getValue());

        return dto;
    }
}
