class palindromeNumber{
    public static void main(String args[]){
        int n = 153;
        int temp = n,result=0;
        while(n>0){ 
            result = result*10+ n%10;
            n/=10;
        }
        System.out.println(result==temp);
    }
}