/**
 * Custom Footer component that replicates the app's gradient footer
 */
import React from 'react';
import Footer from '@theme-original/Footer';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

function CustomFooter(props) {
  const {footer} = useThemeConfig();
  
  // If no footer, return null
  if (!footer) {
    return null;
  }
  
  // Add custom styling to match app
  const customStyles = {
    footer: {
      background: 'linear-gradient(135deg, #240046 0%, #5A189A 100%)',
      position: 'relative',
    },
    gradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '4px',
      background: 'linear-gradient(90deg, #FF6D00, #FF7900, #FF8500, #FF9100, #FF9E00)',
    },
    logo: {
      maxWidth: '180px',
      marginBottom: '1rem',
    }
  };

  return (
    <div style={customStyles.footer} className="footer">
      <div style={customStyles.gradient}></div>
      {/* Logo in footer */}
      {footer.logo && (
        <div className="text--center margin-bottom--md">
          <img 
            src={useBaseUrl(footer.logo.src)} 
            alt={footer.logo.alt || 'LightningHire Logo'} 
            style={customStyles.logo}
          />
        </div>
      )}
      <Footer {...props} />
    </div>
  );
}

export default CustomFooter;