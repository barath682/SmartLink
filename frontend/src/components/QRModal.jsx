function QRModal({ qrCode, onClose }) {
  if (!qrCode) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 z-50">
      <div className="bg-slate-800 p-6 rounded-2xl w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">
          QR Code
        </h2>

        <img
          src={qrCode}
          alt="QR Code"
          className="mx-auto bg-white p-3 rounded-xl mb-5"
        />

        <button
          onClick={onClose}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default QRModal;