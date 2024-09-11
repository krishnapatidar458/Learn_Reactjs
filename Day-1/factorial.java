class factorial{
    public static void main(String args[]){
        long fact = 0,n=200;
        for(long i=5;i<=n;i*=5){
            fact+=n/i;
        }
        System.out.println(fact);
        // System.out.println()
    }
}