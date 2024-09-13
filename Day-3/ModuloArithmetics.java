class ModuloArithmetics{
    public static void main(String args[]){
        System.out.println(findModulo(246346745323L, 1015765353L, 435000005L));
    }

    static long findModulo(long a, long b, long n){
        long res = 1;
        while(b > 0){
            if((b & 1) == 1){
                res = (res * a % n) % n;
            }
            a = (a % n * a % n) % n;
            b >>= 1;
        }
        return res;
    }
}
