export interface MetricCardProps {
  value: string;
  label: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialProps {
  name: string;
  rating: number;
  comment: string;
  role: string;
}

export interface StepCardProps {
  title: string;
  description: string;
  estimatedTime: string;
  stepNumber: number;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface AuthFormData {
  email: string;
  password: string;
}

export interface SignUpFormData extends AuthFormData {
  name: string;
  confirmPassword: string;
}

export interface AuthError {
  field: string;
  message: string;
} 