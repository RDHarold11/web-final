import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import trailerService from "./trailerService";

const initialState = {
  trailers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createTrailer = createAsyncThunk(
  "trailer/create",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await trailerService.createTrailer(data, token);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTrailers = createAsyncThunk(
  "trailer/getTrailes",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await trailerService.getTrailerAdmin(token);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteTrailer = createAsyncThunk(
  "trailer/deleteTrailer",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await trailerService.deleteTrailer(id, token);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTrailer = createAsyncThunk(
  "trailer/updateTrailer",
  async ({ id, newTrailer }, thunkAPI) => {
    try {
      const {
        Titulo,
        año,
        Director,
        Actores,
        Genero,
        Reseña,
        ImagenDePortada,
        linkDelTrailer,
      } = newTrailer;
      const token = thunkAPI.getState().auth.user.token;
      return await trailerService.updateTrailer(
        id,
        {
          Titulo,
          año,
          Director,
          Actores,
          Genero,
          Reseña,
          ImagenDePortada,
          linkDelTrailer,
        },
        token
      );
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const trailerSlice = createSlice({
  name: "trailers",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTrailer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTrailer.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.trailers.push(action.payload);
      })
      .addCase(createTrailer.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getTrailers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrailers.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.trailers = action.payload;
      })
      .addCase(getTrailers.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteTrailer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTrailer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trailers = state.trailers.filter(
          (trailer) => trailer._id !== action.payload.id
        );
      })
      .addCase(deleteTrailer.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      })
      .addCase(updateTrailer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTrailer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const trailer = state.trailers.findIndex(
          (t) => t._id == action.payload.id
        );
        if (trailer !== -1) {
          state.trailers[trailer] = action.payload;
        }
      })
      .addCase(updateTrailer.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = trailerSlice.actions;
export default trailerSlice.reducer;
