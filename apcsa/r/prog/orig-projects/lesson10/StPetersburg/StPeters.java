import java.util.Random;

public class StPeters
{
    private Random r = new Random();
    private double entryFee;
    private int pot = 1;
    
    public StPeters(double entryFee)
    {
        this.entryFee = entryFee;
    }

	public void tester(int howMany){
		int counter = 0;
		int countBreakEvenOrWin=0;
		while(counter < howMany)
		{
			if(runGame())
				countBreakEvenOrWin++;
			counter++;
		}
		System.out.println(countBreakEvenOrWin + " broke even or won out of " + howMany + " tries. Chance of winning: " + countBreakEvenOrWin * 1.0 / howMany); 
    }
    
    private boolean runGame(){
        //1) keep flipping until flip() doesn't return heads
        //2) If flip() returns heads double the pot
        //3) If it returns tails, test to see if user broke even or made money compared to what they 
        //   paid to enter the contest
		
    }
    
    
    private int flip(){
		//code to return a 0 or 1 simulating a flip
		
    }
   
            
    
    
}
