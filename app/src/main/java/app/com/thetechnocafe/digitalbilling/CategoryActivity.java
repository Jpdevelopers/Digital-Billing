package app.com.thetechnocafe.digitalbilling;

import android.content.Context;
import android.graphics.Color;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.CardView;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;

import app.com.thetechnocafe.digitalbilling.Models.CategoryModel;

public class CategoryActivity extends AppCompatActivity {

    RecyclerView mCategoryRecyclerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_category);

        mCategoryRecyclerView = (RecyclerView) findViewById(R.id.activity_category_recycler_view);
        mCategoryRecyclerView.setLayoutManager(new LinearLayoutManager(getBaseContext()));

        ArrayList<CategoryModel> categories = new ArrayList<>();
        categories.add(new CategoryModel("Groceries", R.drawable.grocery, Color.parseColor("#66BB6A")));
        categories.add(new CategoryModel("Restaurant", R.drawable.fries, Color.parseColor("#F44336")));
        categories.add(new CategoryModel("Electric Appliances", R.drawable.television, Color.parseColor("#616161")));
        categories.add(new CategoryModel("Books and Stationaries", R.drawable.books, Color.parseColor("#03A9F4")));
        categories.add(new CategoryModel("Fashion & Lifestyle", R.drawable.dress, Color.parseColor("#F50057")));
        categories.add(new CategoryModel("Vehicle", R.drawable.racing, Color.parseColor("#FF8F00")));

        RecyclerAdapter adapter = new RecyclerAdapter(categories, getBaseContext());
        mCategoryRecyclerView.setAdapter(adapter);

    }

    public class RecyclerAdapter extends RecyclerView.Adapter<RecyclerViewHolder> {

        ArrayList<CategoryModel> categories = new ArrayList<>();
        Context mContext;

        public RecyclerAdapter(ArrayList<CategoryModel> categories, Context context) {
            this.categories = categories;
            this.mContext = context;
        }

        @Override
        public RecyclerViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
            View view = LayoutInflater.from(mContext).inflate(R.layout.category_recycler_view_item, parent, false);
            return new RecyclerViewHolder(view);
        }

        @Override
        public void onBindViewHolder(RecyclerViewHolder holder, int position) {
            holder.mCategoryTextView.setText(categories.get(position).getCategory());
            holder.mImageView.setImageDrawable(getResources().getDrawable(categories.get(position).getmImage()));
            holder.mCardView.setCardBackgroundColor(categories.get(position).getBackgroundColor());
        }

        @Override
        public int getItemCount() {
            return categories.size();
        }
    }

    public class RecyclerViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {
        TextView mCategoryTextView;
        ImageView mImageView;
        CardView mCardView;

        public RecyclerViewHolder(View itemView) {
            super(itemView);
            itemView.setOnClickListener(this);
            mImageView = (ImageView) itemView.findViewById(R.id.category_recycler_view_item_image_view);
            mCategoryTextView = (TextView) itemView.findViewById(R.id.category_recycler_view_item_text_view);
            mCardView = (CardView) itemView.findViewById(R.id.category_recycler_view_item_card_view);
        }

        @Override
        public void onClick(View v) {

        }
    }
}
