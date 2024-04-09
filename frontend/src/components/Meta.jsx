import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To ShopSphere',
  description: 'Your new favorite online shopping platform',
  keywords: 'products, buy cheap products, worldwide',
};

export default Meta;
