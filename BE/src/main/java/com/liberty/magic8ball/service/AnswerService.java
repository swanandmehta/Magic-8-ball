package com.liberty.magic8ball.service;

import com.liberty.magic8ball.enums.Answer;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class AnswerService implements IAnswerService {

    private static final Random random = new Random();

    @Override
    public Answer generateAnswer() {
        int result = random.nextInt(Answer.values().length - 1) + 1;
        return Answer.values()[result];
    }
}
