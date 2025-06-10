import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const quoteFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().default("PA"),
  zipCode: z.string().min(5, "Valid ZIP code is required"),
  primaryService: z.string().min(1, "Please select a service"),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  description: z.string().min(10, "Please provide a detailed description"),
  contactMethod: z.enum(["phone", "email", "either"]).default("either"),
  consent: z.boolean().refine(val => val === true, "Consent is required"),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      state: "PA",
      contactMethod: "either",
      consent: false,
    },
  });

  const submitQuoteMutation = useMutation({
    mutationFn: async (data: QuoteFormData) => {
      return await apiRequest("POST", "/api/quote-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted",
        description: "Thank you for your quote request! We'll contact you within 24 hours to schedule a consultation.",
      });
      form.reset();
      onClose();
      queryClient.invalidateQueries({ queryKey: ["/api/quote-requests"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
      console.error("Quote submission error:", error);
    },
  });

  const onSubmit = (data: QuoteFormData) => {
    submitQuoteMutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-steelers-black">
            Request a Free Quote
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                {...form.register("firstName")}
                className="form-input"
              />
              {form.formState.errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                {...form.register("lastName")}
                className="form-input"
              />
              {form.formState.errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                className="form-input"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                {...form.register("phone")}
                className="form-input"
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              {...form.register("address")}
              placeholder="Street Address"
              className="form-input"
            />
            {form.formState.errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.address.message}
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                {...form.register("city")}
                className="form-input"
              />
              {form.formState.errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.city.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                {...form.register("state")}
                className="form-input"
              />
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP Code *</Label>
              <Input
                id="zipCode"
                {...form.register("zipCode")}
                className="form-input"
              />
              {form.formState.errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.zipCode.message}
                </p>
              )}
            </div>
          </div>
          
          <div>
            <Label>Primary Service Needed *</Label>
            <Select onValueChange={(value) => form.setValue("primaryService", value)}>
              <SelectTrigger className="form-input">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                <SelectItem value="handyman">General Handyman Services</SelectItem>
                <SelectItem value="painting">Interior/Exterior Painting</SelectItem>
                <SelectItem value="flooring">Flooring Installation</SelectItem>
                <SelectItem value="electrical">Electrical Services</SelectItem>
                <SelectItem value="plumbing">Plumbing Services</SelectItem>
                <SelectItem value="multiple">Multiple Services</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.primaryService && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.primaryService.message}
              </p>
            )}
          </div>
          
          <div>
            <Label>Project Timeline</Label>
            <Select onValueChange={(value) => form.setValue("timeline", value)}>
              <SelectTrigger className="form-input">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">As soon as possible</SelectItem>
                <SelectItem value="1month">Within 1 month</SelectItem>
                <SelectItem value="3months">Within 3 months</SelectItem>
                <SelectItem value="6months">Within 6 months</SelectItem>
                <SelectItem value="planning">Just planning/researching</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label>Budget Range</Label>
            <Select onValueChange={(value) => form.setValue("budget", value)}>
              <SelectTrigger className="form-input">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-1k">Under $1,000</SelectItem>
                <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                <SelectItem value="30k-plus">$30,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="description">Project Description *</Label>
            <Textarea
              id="description"
              {...form.register("description")}
              rows={4}
              placeholder="Please describe your project in detail..."
              className="form-input"
            />
            {form.formState.errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.description.message}
              </p>
            )}
          </div>
          
          <div>
            <Label>Preferred Contact Method</Label>
            <RadioGroup
              value={form.watch("contactMethod")}
              onValueChange={(value) => form.setValue("contactMethod", value as "phone" | "email" | "either")}
              className="flex space-x-6 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="phone" id="phone-method" />
                <Label htmlFor="phone-method">Phone</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email-method" />
                <Label htmlFor="email-method">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="either" id="either-method" />
                <Label htmlFor="either-method">Either</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="consent"
              checked={form.watch("consent")}
              onCheckedChange={(checked) => form.setValue("consent", !!checked)}
            />
            <Label htmlFor="consent" className="text-sm text-gray-600">
              I consent to be contacted by Pittsburgh Handyman Pros regarding my project inquiry. *
            </Label>
          </div>
          {form.formState.errors.consent && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.consent.message}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              type="submit"
              disabled={submitQuoteMutation.isPending}
              className="flex-1 bg-steelers-gold text-steelers-black hover:bg-dark-gold"
            >
              {submitQuoteMutation.isPending ? "Submitting..." : "Submit Quote Request"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
