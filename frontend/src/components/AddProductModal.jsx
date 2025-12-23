import {
  DollarSignIcon,
  ImageIcon,
  Package2Icon,
  PlusCircleIcon,
} from "lucide-react";
import { useProductStore } from "../store/useProductStore";

function AddProductModal() {
  const { addProduct, formData, setFormData, loading } = useProductStore();

  return (
    <dialog id="add_product_modal" className="modal">
      <div className="modal-box relative">

        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() =>
            document.getElementById("add_product_modal").close()
          }
        >
          ✕
        </button>

        {/* MODAL HEADER */}
        <h3 className="font-bold text-xl mb-8">Add New Product</h3>

        {/* ✅ SINGLE FORM ONLY */}
        <form onSubmit={addProduct} className="space-y-6">

          {/* PRODUCT NAME */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Product Name</span>
            </label>
            <div className="relative">
              <Package2Icon className="absolute left-3 top-3 size-5 text-base-content/50" />
              <input
                type="text"
                placeholder="Enter product name"
                className="input input-bordered w-full pl-10"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          </div>

          {/* PRICE */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Price</span>
            </label>
            <div className="relative">
              <DollarSignIcon className="absolute left-3 top-3 size-5 text-base-content/50" />
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                className="input input-bordered w-full pl-10"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>
          </div>

          {/* IMAGE URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Image URL</span>
            </label>
            <div className="relative">
              <ImageIcon className="absolute left-3 top-3 size-5 text-base-content/50" />
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full pl-10"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="modal-action">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() =>
                document.getElementById("add_product_modal").close()
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary min-w-[120px]"
              disabled={
                !formData.name ||
                !formData.price ||
                !formData.image ||
                loading
              }
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="size-5 mr-2" />
                  Add Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* BACKDROP */}
      <div
        className="modal-backdrop"
        onClick={() =>
          document.getElementById("add_product_modal").close()
        }
      />
    </dialog>
  );
}

export default AddProductModal;
