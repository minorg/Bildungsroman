from pathlib import Path

from rdflib import URIRef

from paradicms_etl._pipeline import _Pipeline
from paradicms_etl.extractors.markdown_directory_extractor import (
    MarkdownDirectoryExtractor,
)
from paradicms_etl.loaders.nop_loader import NopLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.rights import Rights
from paradicms_etl.transformers.markdown_directory_transformer import (
    MarkdownDirectoryTransformer,
)


class Pipeline(_Pipeline):
    ID = "Bildungsroman"

    def __init__(self, **kwds):
        root_dir_path = Path(__file__).parent.absolute()

        default_institution = Institution(
            name="Bildungsroman",
            rights=Rights(
                holder="Original text Copyright Minor Gordon. Other text and images copyright their respective holders.",
                license=URIRef("https://creativecommons.org/licenses/by-nc-sa/3.0/"),
                statement=URIRef("http://rightsstatements.org/vocab/InC/1.0/"),
            ),
            uri=MarkdownDirectoryTransformer.model_uri(
                pipeline_id=self.ID, model_type="institution", model_id="default"
            ),
        )

        default_collection = Collection(
            institution_uri=default_institution.uri,
            title="Bildungsroman",
            uri=MarkdownDirectoryTransformer.model_uri(
                pipeline_id=self.ID, model_type="collection", model_id="default"
            ),
        )

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
                default_collection=default_collection,
                default_institution=default_institution,
                pipeline_id=self.ID,
            ),
            **kwds
        )


assert __name__ == "__main__"
Pipeline.main()
