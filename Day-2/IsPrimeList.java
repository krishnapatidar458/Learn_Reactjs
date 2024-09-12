import java.util.Arrays;

class IsPrimeList{
    public static void main(String args[]){
        boolean[] prime = isPrime(221);
        for(int i=0;i<=prime.length;i++){
            System.out.println(i+" : "+prime[i]);
        }
    }
    static boolean[] isPrime(int n){
        boolean[] prime = new boolean[n+1];
        Arrays.fill(prime,true);
        prime[0] = false;
        prime[1] = false;

        for(int i=2;i*i <=n ; i++){
            if(prime[i]){
                for(int j=2*i;j<=n;j+=i){
                    prime[j] = false;
                }
            }
        }
        return prime;
    }
}