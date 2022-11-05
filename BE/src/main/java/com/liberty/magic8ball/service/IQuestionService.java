package com.liberty.magic8ball.service;

import com.liberty.magic8ball.dto.QuestionRequestDto;
import com.liberty.magic8ball.dto.QuestionResponseDto;

public interface IQuestionService {
    QuestionResponseDto answerQuestion(QuestionRequestDto request);
}
