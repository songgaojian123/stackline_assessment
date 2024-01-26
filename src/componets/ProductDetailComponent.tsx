

interface ProductDetailProps {
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
}

const ProductDetailComponent: React.FC<ProductDetailProps> = ({
  image,
  title,
  subtitle,
  tags,
}) => (
  <aside>
    <img src={image} alt={title} />
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <div>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  </aside>
);

export default ProductDetailComponent;
