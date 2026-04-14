export const skillCategories = [
  {
    key: 'security',
    skills: ['Burp Suite', 'Metasploit', 'Nessus', 'Nmap', 'Frida', 'MobSF', 'Recon & Fuzzing', 'SAST/DAST'],
  },
  {
    key: 'appsec',
    skills: ['OWASP Top 10', 'CWE', 'Code Review', 'Threat Modeling', 'Secure Architecture', 'SAML', 'LDAP', 'PKI'],
  },
  {
    key: 'cloud',
    skills: ['AWS', 'GCP', 'Terraform', 'Ansible', 'Docker', 'Kubernetes', 'CI/CD Security'],
  },
  {
    key: 'languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'PHP', 'Bash', 'C++', 'React', 'Next.js', 'FastAPI'],
  },
  {
    key: 'platforms',
    skills: ['Linux', 'Windows', 'Active Directory', 'Android', 'iOS', 'Git/GitHub'],
  },
  {
    key: 'ai',
    skills: ['Claude Code', 'AI Agents', 'Workflow Automation', 'AI/ML Pentesting', 'LLM Security', 'AI-Assisted Pentesting'],
  },
] as const;
