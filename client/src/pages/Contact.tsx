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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/data/services";
import { serviceAreas, alsoServingAreas } from "@/data/serviceAreas";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  zipCode: z.string().min(5, "ZIP code is required").max(10),
  service: z.string().optional(),
  projectType: z.enum(["single", "multiple", "ongoing"]).optional(),
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
      zipCode: "",
      service: "",
      projectType: undefined,
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
      <SEO 
        title="Contact Us | Pittsburgh Handyman Pros"
        description="Contact Pittsburgh Handyman Pros for a free quote. Serving Upper St. Clair, Fox Chapel, Sewickley, Ross Township, Aspinwall, and surrounding areas."
        keywords="contact handyman Pittsburgh, free quote, handyman services"
      />
      <SchemaMarkup type="local-business" />

      {/* Header Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your <span className="text-steelers-gold">Free Quote</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to check off your home repair to-do list? Contact us today for a free, no-obligation quote.
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
                    <a href="tel:[PHONE_NUMBER_PLACEHOLDER]" className="text-steelers-gold hover:text-dark-gold transition-colors duration-300">
                      [PHONE_NUMBER_PLACEHOLDER]
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
                      Sun: Closed
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4 text-steelers-gold">Why Choose Us?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check text-steelers-gold mt-1 mr-3"></i>
                    <span className="text-gray-700">We show up when we say we will</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-steelers-gold mt-1 mr-3"></i>
                    <span className="text-gray-700">Transparent pricing, no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-steelers-gold mt-1 mr-3"></i>
                    <span className="text-gray-700">Licensed, insured, background-checked</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-steelers-gold mt-1 mr-3"></i>
                    <span className="text-gray-700">One call handles it all</span>
                  </li>
                </ul>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...form.register("phone")}
                      className="form-input"
                      placeholder="(412) 555-1234"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      {...form.register("zipCode")}
                      className="form-input"
                      placeholder="15241"
                      maxLength={10}
                    />
                    {form.formState.errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.zipCode.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label>Service Needed</Label>
                  <Select onValueChange={(value) => form.setValue("service", value)}>
                    <SelectTrigger className="form-input">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.slug} value={service.slug}>
                          {service.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Project Type</Label>
                  <RadioGroup 
                    onValueChange={(value) => form.setValue("projectType", value as "single" | "multiple" | "ongoing")}
                    className="flex flex-col space-y-2 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="single" id="single" />
                      <Label htmlFor="single" className="font-normal cursor-pointer">Single repair</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="multiple" id="multiple" />
                      <Label htmlFor="multiple" className="font-normal cursor-pointer">Multiple repairs</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ongoing" id="ongoing" />
                      <Label htmlFor="ongoing" className="font-normal cursor-pointer">Ongoing maintenance needs</Label>
                    </div>
                  </RadioGroup>
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

      {/* Service Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-steelers-black mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve homeowners throughout Pittsburgh and surrounding communities.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-steelers-black text-center mb-8">Priority Service Areas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area) => (
                <div 
                  key={area.slug}
                  className="bg-white p-6 rounded-lg text-center shadow"
                >
                  <i className="fas fa-map-marker-alt text-steelers-gold text-2xl mb-2"></i>
                  <div className="font-semibold text-steelers-black">{area.name}</div>
                  <div className="text-sm text-gray-500">{area.zipCode}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-steelers-black text-center mb-8">Also Serving</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {alsoServingAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-white px-6 py-3 rounded-lg shadow text-steelers-black font-semibold"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your area listed? Contact us to check if we serve your location.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
