package com.anuragmittal;

public class Main {

    public static void main(String[] args) {

        int myVault = 10000;
        // 32 bits
        int myMinIntValue = Integer.MIN_VALUE;
        int myMaxIntValue = Integer.MAX_VALUE;
        System.out.println("Integer Minimum Value = " + myMinIntValue);
        System.out.println("Integer Maximum Value = " + myMaxIntValue);
        System.out.println("Busted(Overflow) Maximum Value = " + (myMaxIntValue + 1));
        System.out.println("Busted(Underflow) Minimum Value = " + (myMinIntValue - 1));
        int myUnderScoreMaxIntValue = 2_147_483_647;

        // 8 bits
        byte myMinByteValue = Byte.MIN_VALUE;
        byte myMaxByteValue = Byte.MAX_VALUE;
        System.out.println("Byte Minimum Value = " + myMinByteValue);
        System.out.println("Byte Maximum Value = " + myMaxByteValue);

        // 16 bits
        short myMinShortValue = Short.MIN_VALUE;
        short myMaxShortValue = Short.MAX_VALUE;
        System.out.println("Short Minimum Value = " + myMinShortValue);
        System.out.println("Short Maximum Value = " + myMaxShortValue);

        // 64 bytes
        long myLongNumber = 100L; // without L its treated as integer. We need to put in L to make sure JAVA treats it as long.
        long myMinLongValue = Long.MIN_VALUE;
        long myMaxLongValue = Long.MAX_VALUE;
        System.out.println("long Minimum Value = " + myMinLongValue);
        System.out.println("long Maximum Value = " + myMaxLongValue);

        int myTotal = (myMaxIntValue / 2);
        byte myNewByteValue = (byte) (myMaxByteValue / 2);

        byte myChallengeByte = 100;
        short myChallengeShort = 1000;
        int myChallengeInt = 100000;
        long myChallengeRequest = 50000L + (10L * (myChallengeByte + myChallengeShort + myChallengeInt));
        System.out.println("Challenge Result = " + myChallengeRequest);

        // Single precision 32 bits
        float myMinFloatValue = Float.MIN_VALUE;
        float myMaxFloatValue = Float.MAX_VALUE;
        System.out.println("Float Minimum Value = " + myMinFloatValue);
        System.out.println("Float Maximum Value = " + myMaxFloatValue);

        // Double precision 64 bits
        double myMinDoubleValue = Double.MIN_VALUE;
        double myMaxDoubleValue = Double.MAX_VALUE;
        System.out.println("Double Minimum Value = " + myMinDoubleValue);
        System.out.println("Double Maximum Value = " + myMaxDoubleValue);

        float myFloatValue = (float) 05.25; //default is long
//        float myFloatValue2 = 5.25f;
//        double myDoubleValue = 5.25d;
//        float myFloatValue2 = 5;
//        double myDoubleValue = 5;
        float myFloatValue2 = 5f;
        double myDoubleValue = 5d;
        // double is faster on many modern computers
        // Java libraries return results as a double and not float.
        double kilo = 75.6;
        double resultInPounds = (1d / 0.45359237d) * kilo;
        System.out.println("Result in Pounds = " + resultInPounds);

        //16 bits cuz it has unicode as well (65535 characters)
        char myChar = 'D';
        char myUnicodeChar = '\u01A3';
        System.out.println("unicode number = " + myUnicodeChar);
        System.out.println("char = " + myChar);

        boolean myTrueBooleanValue = true;
        boolean myFalseBooleanValue = false;

        boolean isCustomerOverTwentyOne = true;

        // limited by heap size / memory or the MAX_VALUE of int which was 2.14 billion.
        String myString = "This is a string";

        System.out.println("Operator Challenge: ");
        double operatorVariableOne = 20.00d;
        double operatorVariableTwo = 80.00d;
        double operatorChallengeResult = ((operatorVariableOne + operatorVariableTwo) * 100.00d) % 40.00d;
        boolean isRemainderZero = operatorChallengeResult == 0 ? true : false;
        System.out.println("The output of the challenge is: " + isRemainderZero);
        if (!isRemainderZero) {
            System.out.println("Got some remainder: " + operatorChallengeResult);
        }

    }
}
