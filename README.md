# Lab 8 - Starter
Tiancheng Ma
1. Within a Github action that runs whenever code is pushed:
    we wish to test our code automatically at anytime, therefore we should not do the testing manually nor test it after all development is completed
2. no
3. I will not use unit testing for "message" testing. Since "message" feature includes many functions like write and send, which must include interaction between functions, while unit testing is not designed for functions' interaction, we should not use it.
4. I will use unit testing for "max message length" testing since it only includes one function and unit testing is designed for single function testing. 