import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"

type CardProps = React.ComponentProps<typeof Card>

export default function Home({ className, ...props }: CardProps) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className={cn("w-[600px]", 'className')} {...props}>
        <CardHeader>
          <CardTitle>Powered By Shad cn</CardTitle>
          <CardDescription>Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
               Auth 0 enabled
              </p>
              <p className="text-sm text-muted-foreground">
                Apply necessary changes in env file and update the auth 0 setting correctly with callback URL and Auth API.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
           Follow README for further
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
