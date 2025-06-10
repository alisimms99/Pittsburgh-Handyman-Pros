import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
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

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message! We'll get back to you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("Contact submission error:", error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactMutation.mutate(data);
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="bg-steelers-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-steelers-gold">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your home improvement project? Contact us today for a free consultation and estimate.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-steelers-gold">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black mr-4">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-steelers-black">Phone</div>
                    <a href="tel:412-555-0123" className="text-steelers-gold hover:text-dark-gold transition-colors duration-300">
                      (412) 555-0123
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-steelers-black">Email</div>
                    <a href="mailto:info@pittsburghhandymanpros.com" className="text-steelers-gold hover:text-dark-gold transition-colors duration-300">
                      info@pittsburghhandymanpros.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-steelers-black">Service Area</div>
                    <div className="text-gray-600">Greater Pittsburgh Area</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-steelers-gold rounded-full flex items-center justify-center text-steelers-black mr-4">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-steelers-black">Business Hours</div>
                    <div className="text-gray-600">
                      Mon-Fri: 7:00 AM - 6:00 PM<br/>
                      Sat: 8:00 AM - 4:00 PM<br/>
                      Sun: Emergency Only
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4 text-steelers-gold">Emergency Services</h4>
                <p className="text-gray-600 mb-4">
                  We provide emergency repair services for urgent issues like plumbing leaks, electrical problems, and security concerns.
                </p>
                <a href="tel:412-555-0123" className="text-steelers-gold font-semibold hover:text-dark-gold transition-colors duration-300">
                  Call (412) 555-0123 for Emergencies
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-steelers-gold">Send Us a Message</h3>
              
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
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...form.register("phone")}
                    className="form-input"
                  />
                </div>
                
                <div>
                  <Label>Service Needed</Label>
                  <Select onValueChange={(value) => form.setValue("service", value)}>
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                      <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                      <SelectItem value="handyman">General Handyman</SelectItem>
                      <SelectItem value="painting">Painting</SelectItem>
                      <SelectItem value="flooring">Flooring</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Project Description *</Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    rows={4}
                    className="form-input"
                    placeholder="Tell us about your project..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  disabled={submitContactMutation.isPending}
                  className="w-full bg-steelers-gold text-steelers-black hover:bg-dark-gold py-4 text-lg font-semibold"
                >
                  {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-steelers-black mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve homeowners throughout the Greater Pittsburgh Area and surrounding communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-steelers-black mb-2">City Neighborhoods</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Shadyside</li>
                <li>Squirrel Hill</li>
                <li>Mt. Washington</li>
                <li>Oakland</li>
                <li>Lawrenceville</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-steelers-black mb-2">North Hills</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Cranberry</li>
                <li>Wexford</li>
                <li>Mars</li>
                <li>Gibsonia</li>
                <li>Allison Park</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-steelers-black mb-2">South Hills</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Upper St. Clair</li>
                <li>Peters Township</li>
                <li>Mt. Lebanon</li>
                <li>Bethel Park</li>
                <li>McMurray</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-steelers-black mb-2">East Suburbs</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Monroeville</li>
                <li>Murrysville</li>
                <li>Penn Hills</li>
                <li>Plum</li>
                <li>Export</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
