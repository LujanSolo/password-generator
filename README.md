# JavaScript Password Generator

## An 8-128 alphanumeric (including special characters) password generator

WEBSITE LINK: https://lujansolo.github.io/password-generator/

GITHUB REPO LINK: https://github.com/LujanSolo/password-generator

In an effort to better understand JavaScript's functionality, the software developer has refined the existing code related to the given password generator. For the user, the new pasword generator will provide a randomly generated password based on a few selections of input from the user, negating the need to come up with complicated passwords on one's own.

For the developer, some discoveries were made whilst making this code funtional, including:

 -NaN option used to force user to choose an actual number in regards to number of characters in password string.

 -discovered a probability irregularity that resulted in the user getting more characters than desired (see notes on js for fix)

 -addressed the issue of missing character selections in user's password, effectively forcing the program to guarantee a character from each of the user's selections

## Usage

Upon launching the site, user will be prompted with a series of questions to determine the parameters of their password. User will be redirected to the start of the program if their answers are invalid.

Users must choose the number of characters desired in their password (between 8 and 128 characters), and then must chose at least ONE option as to which characters they would like to include as options.

Upon completion of the pop-up questionnaire, the user will be given a randomly generated password based upon their criteria.

## Screenshots
1. Webpage at start with opening prompt:

![alt text](/Assets/images/password-site2.png "Photo of website at start.")

2. Webpage at selection option:

![alt text](/Assets/images/password-site3.png "Website at first prompt.")

3. Webpage with resulting password displayed:

![alt text](/Assets/images/password-site.png "Website with final password result.")

## License

MIT License

Copyright (c) 2022 Jamie Lujan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.