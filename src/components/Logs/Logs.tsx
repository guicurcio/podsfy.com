import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "components/new-york/ui/dialog";
import Button from "ui/components/Button";
import mergeClasses from "utils/mergeClasses";

/**
 * Props for the Logs component.
 */
export interface LogsProps {
  /**
   * Custom class names passed to the root element.
   */
  className?: string;
}

/**
 * Logs Component
 */
export default function Logs({ className, ...props }: LogsProps): JSX.Element {
  return (
    <div className={mergeClasses("", className)} {...props}>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Sign Up with Email</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>View code</DialogTitle>
            <DialogDescription>
              You can use the following code to start integrating your current
              prompt and settings into your application.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="rounded-md bg-black p-6">
              <pre>
                <code className="text-muted-foreground grid gap-1 text-sm [&_span]:h-4">
                  <span>
                    <span className="text-sky-300">import</span> os
                  </span>
                  <span>
                    <span className="text-sky-300">import</span> openai
                  </span>
                  <span />
                  <span>
                    openai.api_key = os.getenv(
                    <span className="text-green-300">
                      &quot;OPENAI_API_KEY&quot;
                    </span>
                    )
                  </span>
                  <span />
                  <span>response = openai.Completion.create(</span>
                  <span>
                    {" "}
                    model=
                    <span className="text-green-300">&quot;davinci&quot;</span>,
                  </span>
                  <span>
                    {" "}
                    prompt=<span className="text-amber-300">&quot;&quot;</span>,
                  </span>
                  <span>
                    {" "}
                    temperature=<span className="text-amber-300">0.9</span>,
                  </span>
                  <span>
                    {" "}
                    max_tokens=<span className="text-amber-300">5</span>,
                  </span>
                  <span>
                    {" "}
                    top_p=<span className="text-amber-300">1</span>,
                  </span>
                  <span>
                    {" "}
                    frequency_penalty=<span className="text-amber-300">0</span>,
                  </span>
                  <span>
                    {" "}
                    presence_penalty=<span className="text-green-300">0</span>,
                  </span>
                  <span>)</span>
                </code>
              </pre>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">
                Your API Key can be found here. You should use environment
                variables or a secret management tool to expose your key to your
                applications.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

Logs.displayName = "Logs";
