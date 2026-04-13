export const skillCategories = [
  {
    key: 'security',
    skills: ['Burp Suite', 'Frida', 'MobSF', 'Metasploit', 'Nessus', 'Fortify', 'WebInspect', 'SAST/DAST'],
  },
  {
    key: 'appsec',
    skills: ['OWASP Top 10', 'CWE', 'Code Review', 'Threat Modeling', 'Secure Architecture', 'SAML', 'LDAP', 'PKI'],
  },
  {
    key: 'cloud',
    skills: ['AWS', 'GCP', 'Terraform', 'Ansible', 'Docker', 'CI/CD Security', 'Packer'],
  },
  {
    key: 'languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'Flask', 'Java', 'PHP', 'Bash', 'C++'],
  },
  {
    key: 'platforms',
    skills: ['Linux (Kali)', 'Windows', 'Active Directory', 'Android', 'iOS', 'Git/GitHub'],
  },
  {
    key: 'ai',
    skills: ['Claude Code', 'AI Agents', 'Workflow Automation', 'AI/ML Pentesting', 'LLM Security', 'Prompt Engineering'],
  },
] as const;
