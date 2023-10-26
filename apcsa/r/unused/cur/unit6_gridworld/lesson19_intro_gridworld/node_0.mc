{
   "assessmentItem": {
      "adaptive": false,
      "identifier": "MultipleChoice",
      "interaction": {
         "choices": [
            {
               "feedback": "No, try again.",
               "fixed": true,
               "identifier": "choice 1",
               "text": "when <tt>getGrid</tt> returns <tt>null</tt>"
            },
            {
               "feedback": "Correct.",
               "fixed": true,
               "identifier": "choice 2",
               "text": "when the next location contains a rock <!-- correct answer -->"
            },
            {
               "feedback": "Nope, a flower won't cause a difference.",
               "fixed": true,
               "identifier": "choice 3",
               "text": "when the next location contains a flower"
            },
            {
               "feedback": "Yes.",
               "fixed": true,
               "identifier": "choice 4",
               "text": "when the next location is off the grid"
            }
         ],
         "hasInlineFeedback": true,
         "maxChoices": "2",
         "prompt": "\n<span audio=\"1\">Under what circumstances will a call to the <tt>act</tt> method behave differently from a direct call to <tt>move</tt>?</span> <br/><br/>\n<p audio=\"2\" style=\"font-weight:normal;\">Hint:  there are 2 correct answers.  Find them both.</p>",
         "responseIdentifier": "MultipleChoice",
         "shuffle": true
      },
      "responseDeclaration": {
         "correctResponse": [
            "choice 2",
            "choice 4"
         ],
         "identifier": "MultipleChoice"
      },
      "timeDependent": false
   },
   "type": "MultipleChoice"
}