package com.liberty.magic8ball.enums;

public enum Answer {

    PATH_1("It is certain."),
    PATH_2("It is decidedly so."),
    PATH_3("Without a doubt."),
    PATH_4("Yes definitely."),
    PATH_5("You may rely on it."),
    PATH_6("As I see it, yes."),
    PATH_7("Most likely."),
    PATH_8("Outlook good."),
    PATH_9("Yes."),
    PATH_10("Signs point to yes."),
    PATH_11("Reply hazy, try again."),
    PATH_12("Ask again later."),
    PATH_13("Better not tell you now."),
    PATH_14("Cannot predict now."),
    PATH_15("Concentrate and ask again."),
    PATH_16("Don't count on it."),
    PATH_17("My reply is no."),
    PATH_18("My sources say no."),
    PATH_19("Outlook not so good."),
    PATH_20("Very doubtful.");

    private String value;

    Answer(String ans) {
        this.value = ans;
    }

    public String getValue() {
        return value;
    }
}
