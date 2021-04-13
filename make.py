from pathlib import Path

from paradicms_etl._pipeline import _Pipeline
from paradicms_etl.extractors.markdown_directory_extractor import (
    MarkdownDirectoryExtractor,
)
from paradicms_etl.loaders.nop_loader import NopLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.transformers.markdown_directory_transformer import (
    MarkdownDirectoryTransformer,
)


class Pipeline(_Pipeline):
    ID = "Bildungsroman"

    def __init__(self, **kwds):
        root_dir_path = Path(__file__).parent.absolute()

        _Pipeline.__init__(
            self,
            extractor=MarkdownDirectoryExtractor(
                extracted_data_dir_path=root_dir_path / "Passion",
                pipeline_id=self.ID,
            ),
            id=self.ID,
            loader=RdfFileLoader(
                loaded_data_dir_path=root_dir_path / ".paradicms" / "data" / "loaded",
                pipeline_id=self.ID,
            ),
            transformer=MarkdownDirectoryTransformer(
                collection_title="Bildungsroman",
                collection_uri="http://bildungsroman.minorgordon.net/collection",
                institution_name="Bildungsroman",
                institution_uri="http://bildungsroman.minorgordon.net/institution",
                pipeline_id=self.ID,
            ),
            **kwds
        )


assert __name__ == "__main__"
Pipeline.main()
