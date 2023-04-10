/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Metadata {
  /**
   * Name of the tileset.
   */
  name: string;
  /**
   * Description of the tileset.
   */
  description?: string;
  /**
   * Text attribution to be displayed on the map.
   */
  attribution?: string;
  /**
   * Number of bytes used to encode the offset to a map tile in an index record. Defaults to 5 bytes.
   */
  tileOffsetBytes?: number;
  /**
   * Based on the MBTiles spec. File format of the tile data. *.pbf as a format refers to gzip-compressed vector tile data in Mapbox Vector Tile format.
   */
  tileFormat: "pbf" | "jpg" | "png" | "webp";
  /**
   * Collection of tile matrices defined at different scales with a common coordinate reference system.
   */
  tileMatrixSet: {
    /**
     * Name of the Common TileMatrixSet definition (https://docs.opengeospatial.org/is/17-083r2/17-083r2.html#61) as defined in the 'OGC Two Dimensional Tile Matrix Set' OGC draft. Defaults to WebMercatorQuad.
     */
    tileMatrixCRS?: string;
    /**
     * Specifies how the index fragments and data fragments are ordered. Defaults to row-major order
     */
    fragmentOrdering?: "RowMajor" | "ZOrder" | "Hilbert";
    /**
     * Specifies how the index entries within an index fragment and the tiles within an tile fragment are ordered. Defaults to row-major order
     */
    tileOrdering?: "RowMajor" | "ZOrder" | "Hilbert";
    /**
     * Collection of tile matrices defined at different scales.
     */
    tileMatrix?: {
      /**
       * Zoom level of the TileMatrix.
       */
      zoom: number;
      /**
       * Describes how many index records are aggregated to a fragment. The total number of index records per fragment is calculated by 4^aggregationCoefficient.A value of -1 specifies that no index fragmentation is used.
       */
      aggregationCoefficient: number;
      /**
       * Declaration of a limited coverage of a tile matrix.
       */
      tileMatrixLimits: {
        /**
         * Minimum tile row index.
         */
        minTileRow: number;
        /**
         * Maximum tile row index.
         */
        maxTileRow: number;
        /**
         * Minimum tile column index.
         */
        minTileCol?: number;
        /**
         * Maximum tile column index.
         */
        maxTileCol?: number;
      };
    }[];
  };
  [k: string]: unknown;
}
