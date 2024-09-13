class GCD{
    public static void main(String args[]){
        System.out.println(findGCD(36, 60));
    }
    static int findGCD(int a,int b){
        if(b==0) return a;

        return findGCD(b,a%b);
    }
}