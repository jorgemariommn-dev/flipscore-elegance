import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

// Replace with your Formspree form ID after signing up at formspree.io
const FORMSPREE_ID = "YOUR_FORM_ID";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  clubName: z.string().trim().min(1, "Club name is required").max(100),
  location: z.string().trim().min(1, "Location is required").max(100),
});

type FormValues = z.infer<typeof schema>;

interface PreOrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PreOrderModal = ({ open, onOpenChange }: PreOrderModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", clubName: "", location: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          "club-name": values.clubName,
          location: values.location,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenChange = (val: boolean) => {
    if (!val) {
      // small delay so success screen is visible before reset
      setTimeout(() => setSubmitted(false), 300);
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md rounded-none border-border bg-background p-8">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <CheckCircle2 className="h-12 w-12 text-accent" />
            <h2 className="font-serif-display text-2xl font-medium">Thank you!</h2>
            <p className="text-sm text-muted-foreground">
              We've received your pre-order request and will be in touch soon.
            </p>
            <Button
              className="mt-4 rounded-none px-8"
              onClick={() => handleOpenChange(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="mb-2">
              <DialogTitle className="font-serif-display text-2xl font-medium">
                Pre-Order FlipScore
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Fill in your details and we'll reach out to you directly.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Smith" className="rounded-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="jane@example.com"
                          className="rounded-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="clubName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Club Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Padel Club Madrid" className="rounded-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="City, Country" className="rounded-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {error && (
                  <p className="text-sm font-medium text-destructive">{error}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="mt-2 w-full rounded-none tracking-wide"
                >
                  {submitting ? "Sending…" : "Send Pre-Order Request"}
                </Button>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PreOrderModal;
