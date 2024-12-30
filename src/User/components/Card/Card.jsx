export default function Card({ image, title, prix }) {
  return (
    <div className="col-lg-3 max-w-80 col-md-4 col-sm-5 my-2 p-0 br-5 rounded-md bg-slate-500 ">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${image})`,
          height: '150px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width:'100%'
        }}
      >
        {/* Fallback content or remove if unnecessary */}
      </div>
      <div className="d-flex justify-between align-items-center p-2">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-price">{prix} MAD</h2>
      </div>
    </div>
  );
}
