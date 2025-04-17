import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText } from "@mui/material";

export default function PrivacyAndPolicy() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Privacy Policy
      </Typography>
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Data Collection and Usage
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Image Data"
              secondary="By using our services, you grant TechMe permission to use uploaded images for model training and improvement purposes. All images are processed securely and anonymized when used for training."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Audio Recordings"
              secondary="We may collect and process audio recordings for service improvement and model training. These recordings are stored securely and used only for authorized purposes."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Personal Information"
              secondary="We collect basic personal information for account management and service delivery. This information is protected under strict security measures."
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          User Rights and Control
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Data Access"
              secondary="Users can request access to their stored data and request deletion of their information at any time."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Opt-out Options"
              secondary="Users can opt-out of data collection for model training while still using core service features."
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Security Measures
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Data Protection"
              secondary="We implement industry-standard security measures to protect user data from unauthorized access."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Data Retention"
              secondary="User data is retained only for as long as necessary to provide our services and comply with legal obligations."
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          AI Model Training and Development
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Model Training Data"
              secondary="Your interactions with our AI services help improve our models. We may use anonymized data to train and enhance our AI systems while maintaining strict privacy standards."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Feedback and Improvement"
              secondary="User feedback and interaction patterns are analyzed to improve service quality and user experience. This data is processed anonymously and aggregated."
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Third-Party Services
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Service Providers"
              secondary="We work with trusted third-party providers for hosting, analytics, and support services. These partners are bound by strict confidentiality agreements."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Data Sharing"
              secondary="We do not sell your personal data. Data sharing with third parties occurs only when necessary for service provision or when required by law."
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Cookies and Tracking
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Usage Analytics"
              secondary="We use cookies and similar technologies to analyze service usage patterns and improve our platform. You can control cookie preferences through your browser settings."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Performance Monitoring"
              secondary="We collect performance metrics to ensure optimal service delivery and identify areas for improvement."
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Compliance and Updates
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Legal Compliance"
              secondary="We comply with international data protection regulations including GDPR and CCPA. Our practices are regularly reviewed to ensure compliance."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Policy Updates"
              secondary="We may update this policy periodically. Users will be notified of significant changes through email or platform notifications."
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}
