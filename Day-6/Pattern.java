class Pattern{
    public static void main(String[] args){
        // oneTo5(5);
        // OneTo1(5);
        // OneTo9(5);
        // zeroOne(5);
        // Fifty50(5);
        // OneTon(5);
        EmptyDimond(5);
    }

    static void EmptyDimond(int n){
        for(int i=1;i<=n;i++){
            for(int j=n;j>=i;j--){
                System.out.print("*");
            }
            for(int s=1;s<=2*(i-1);s++){
                System.out.print(" ");
            }
            for(int j=n;j>=i;j--){
                System.out.print("*");
            }
            System.out.println();
        }

        for(int i=1;i<=n;i++){
            for(int r=1;r<=i;r++){
                System.out.print("*");
            }
            for(int s=1;s<=2*(n-i);s++){
                System.out.print(" ");
            }
            for(int r=1;r<=i;r++){
                System.out.print("*");
            }
            System.out.println();
        }
    }

    static void OneTon(int n){
        int num=1;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                System.out.print(num+" ");
                num++;
            }
            System.out.println();
        }
    }

    static void Fifty50(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                System.out.print(j);
            }
            for(int s=1;s<=2*(n-i);s++){
                System.out.print(" ");
            }
            for(int l=(n+i)-n;l>=1;l--){
                System.out.print(l);
            }
            System.out.println();
        }
    }

    static void zeroOne(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                if(((i+j) & 1) != 0)
                    System.out.print("0");
                else
                    System.out.print("1");
            }
            System.out.println();
        }
    }

    static void oneTo5(int n){
        for(int i=1;i<=n-1;i++){
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=n;i>=1;i--){
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
    
    static void OneTo1(int n){
        for(int i=0;i<=n;i++){
            for(int j=1;j<=n-i;j++){
                System.out.print(j);
            }
            System.out.println();
        }
    }

    static void OneTo9(int n){
        for(int i=1;i<=n;i++){
            for(int j=n;j>=i;j--){
                System.out.print(" ");
            }
            for(int k=1;k<=i;k++){
                System.out.print("*");
            }
            for(int k=1;k<=i-1;k++){
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=n;i>=1;i--){
            for(int j=n;j>=i;j--){
                System.out.print(" ");
            }
            for(int k=1;k<=i;k++){
                System.out.print("*");
            }
            for(int k=1;k<=i-1;k++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}