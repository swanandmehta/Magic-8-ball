package com.liberty.magic8ball.service;

import com.liberty.magic8ball.dto.QuestionRequestDto;
import com.liberty.magic8ball.dto.QuestionResponseDto;
import com.liberty.magic8ball.entity.Question;
import com.liberty.magic8ball.factory.QuestionFactory;
import com.liberty.magic8ball.factory.QuestionResponseFactory;
import com.liberty.magic8ball.repository.QuestionRepository;
import org.springframework.stereotype.Service;

@Service
public class QuestionService implements IQuestionService {

    private final QuestionFactory questionFactory;
    private final QuestionResponseFactory responseFactory;
    private final IAnswerService answerService;
    private final QuestionRepository repository;

    public QuestionService(QuestionFactory questionFactory, QuestionResponseFactory responseFactory, IAnswerService answerService, QuestionRepository repository) {
        this.questionFactory = questionFactory;
        this.responseFactory = responseFactory;
        this.answerService = answerService;
        this.repository = repository;
    }

    @Override
    public QuestionResponseDto answerQuestion(QuestionRequestDto request) {
        Question question = questionFactory.createFromQuestionRequest(request);

        question.setAns(answerService.generateAnswer());

        question = repository.save(question);

        return responseFactory.createFromQuestion(question);
    }
}
