package app.com.thetechnocafe.digitalbilling.Models;

/**
 * Created by therealshabi on 15/03/17.
 */

public class CategoryModel {
    String category;
    int mImage;

    public CategoryModel(String category, int mImage) {
        this.category = category;
        this.mImage = mImage;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getmImage() {
        return mImage;
    }

    public void setmImage(int mImage) {
        this.mImage = mImage;
    }
}
