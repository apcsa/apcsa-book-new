The Monty Hall simulation.
 * To run it, instantiate a Monty object; a window will appear.
 * Before clicking on the window, run the Monty playGame method.

There are three things in the code that are beyond what you have seen in the course: 
 * Thread.sleep,
 * exceptions (needed to run Thread.sleep)
 * a thread to handle mouse clicks.  

The communication between clicks and processing is that of a producer and consumer.  When the mouse is
clicked, the corresponding door number is saved in a one-value buffer.  When the program wants to read a
door number, it just looks in the buffer.  If the buffer is empty, the reading code waits; if the buffer
isn't empty, the reading code removes the buffer value, thereby emptying the buffer.  In a non-GUI version,
the reading code will just do a read from the keyboard. 

Flaws: 

The Contestant strategy is hard-coded, which it perhaps ought not to be.  

Redefining the Controller constructor and methods "say" and "picture" should be almost all of what
needs to change to produce a text-IO-driven version and a batch version.

