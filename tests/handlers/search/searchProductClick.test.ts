import { searchProductClickHandler } from "../../../src/handlers";
import schemas from "../../../src/schemas";
import {
    mockSearchInputCtx,
    mockSearchResultProductCtx,
    mockSearchResultsCtx,
} from "../../utils/mocks";

test("sends snowplow event", () => {
    searchProductClickHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "search",
        "product-click",
        "abc123",
        "<pageType>",
        undefined,
        [
            {
                data: mockSearchInputCtx,
                schema: schemas.SEARCH_INPUT_SCHEMA_URL,
            },
            {
                data: mockSearchResultsCtx,
                schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
            },
            {
                data: mockSearchResultProductCtx,
                schema: schemas.SEARCH_RESULT_PRODUCT_SCHEMA_URL,
            },
        ],
    );
});