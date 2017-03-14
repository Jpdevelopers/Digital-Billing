package app.com.thetechnocafe.digitalbilling.Models;

/**
 * Created by therealshabi on 15/03/17.
 */

public class CategoryModel {
    String category;
    int mImage;
    int backgroundColor;

    public CategoryModel(String category, int mImage, int backgroundColor) {
        this.category = category;
        this.mImage = mImage;
        this.backgroundColor = backgroundColor;
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

    public int getBackgroundColor() {
        return backgroundColor;
    }

    public void setBackgroundColor(int backgroundColor) {
        this.backgroundColor = backgroundColor;
    }
}
