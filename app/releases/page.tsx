import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Releases",
};

export default function Page() {
  return (
    <section className="pt-[4rem] pb-[2.5rem]">
      <div className="px-6 mx-auto md:max-w-3xl lg:max-w-5xl">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="font-bold text-xl md:text-2xl">
              Shadcn UI Multi Form – February 2025
            </CardTitle>
            <CardDescription>Release Date: 2025-02-01</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The first version of <strong>Shadcn UI Multi Form</strong> is
              here! Now you can effortlessly build multi-step forms with{" "}
              <strong>Shadcn UI</strong> and <strong>React Hook Form</strong>,
              preview your form in real time, and generate reusable React
              component code.
            </p>
            <div>
              <h3 className="text-lg font-semibold">Features</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Supports Shadcn UI components (Simple Input only)</li>
                <li>Built with React Hook Form for easy form handling</li>
                <li>Live Form Preview to see changes instantly</li>
                <li>Copy Generated Code and use it in your React projects</li>
                <li>Fully Responsive Design for seamless use on all devices</li>
                <li>Editable Label Names for better customization</li>
                <li>
                  Supports Three Input Types: <code>text</code>,{" "}
                  <code>email</code>, and <code>password</code>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Known Issues & Limitations
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>No Zod Validation Support (Coming Soon!)</li>
                <li>Only Simple Input Component is Available</li>
                <li>
                  Dark Mode Not Available Yet (UI is currently only optimized
                  for light mode)
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-muted-foreground text-sm">
              Stay tuned for future updates with more input types, validations,
              and advanced features!
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
