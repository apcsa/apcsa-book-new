{
   "assessmentItem": {
      "adaptive": false,
      "identifier": "MultipleChoice",
      "interaction": {
         "choices": [
            {
               "feedback": "No, check the orientation of the <tt>CrabCritter</tt> again.",
               "fixed": true,
               "identifier": "choice 1",
               "text": "(2,3)"
            },
            {
               "feedback": "Incorrect. This would be correct if the <tt>CrabCritter</tt> was facing north.",
               "fixed": true,
               "identifier": "choice 2",
               "text": "(2,4)"
            },
            {
               "feedback": "Incorrect. Check the orientation of the <tt>CrabCritter</tt> again.",
               "fixed": true,
               "identifier": "choice 3",
               "text": "(2,5)"
            },
            {
               "feedback": "Incorrect. This would be correct if the <tt>CrabCritter</tt> was facing west.",
               "fixed": true,
               "identifier": "choice 4",
               "text": "(3,3)"
            },
            {
               "feedback": "Incorrect.  This would be correct if the <tt>CrabCritter</tt> was facing east.",
               "fixed": true,
               "identifier": "choice 5",
               "text": "(3,5)"
            },
            {
               "feedback": "Right.",
                "fixed": true,
               "identifier": "choice 6",
               "text": "(4,3)"
            },
            {
                "feedback": "Correct.",
               "fixed": true,
               "identifier": "choice 7",
               "text": "(4,4)"
            },
            {
               "feedback": "Yes.",
               "fixed": true,
               "identifier": "choice 8",
               "text": "(4,5)"
            }
         ],
         "hasInlineFeedback": false,
         "maxChoices": "0",
         "prompt": "If a <tt>CrabCritter</tt> has location (3,4) and faces south, what are the possible locations for actors that are returned by a call to the <tt>getActors</tt> method?",
         "responseIdentifier": "MultipleChoice",
         "shuffle": true
      },
      "responseDeclaration": {
         "correctResponse": [
            "choice 6",
            "choice 7",
            "choice 8"
         ],
         "identifier": "MultipleChoice"
      },
      "timeDependent": false
   },
   "type": "MultipleChoice"
}