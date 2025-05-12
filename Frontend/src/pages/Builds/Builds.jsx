import { buildsPageStyles } from "./Builds.styles";
import { useState, useEffect } from "react";
import BuildsFirstSection from "../../components/ui/BuildsElements/BuildsFirstSection/FirstSection";
import BuildsSecondSection from "../../components/ui/BuildsElements/BuildsSecondSection/SecondSection";
import BuildsThirdSection from "../../components/ui/BuildsElements/BuildsThirdSection/ThirdSection";
import computerService from "@services/computerService";

const Builds = () => {
  const [selectedBuild, setSelectedBuild] = useState("Official");
  const [fetchedBuilds, setFetchedbuilds] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [search, setSearch] = useState("");

  const [totalPages, setTotalPages] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setPage(1);
    setSearch("");
    fetchBuilds(selectedBuild);
  }, [selectedBuild]);

  useEffect(() => {
    fetchBuilds(selectedBuild);
  }, [page]);

  useEffect(() => {
    let timeout;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      setPage(1);
      fetchBuilds(selectedBuild);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [search]);

  const fetchBuilds = async function (build) {
    setIsLoading(true);

    try {
      let res;
      switch (build) {
        case "Official":
          res = await computerService.getAdminPublicComputersList(
            page,
            limit,
            search
          );
          break;

        case "user":
          res = await computerService.getUserPublicComputersList(
            page,
            limit,
            search
          );
          break;
      }

      if (res.status === 200) {
        console.log(res.data.meta);
        setFetchedbuilds(res.data.data);

        setTotalPages(res.data.meta.totalPages);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={buildsPageStyles.buildsPage}>
      <BuildsFirstSection />
      <div className="flex mr-20 ml-20">
        <BuildsSecondSection />
        <BuildsThirdSection
          builds={fetchedBuilds}
          type={selectedBuild}
          setType={setSelectedBuild}
        />
      </div>
    </div>
  );
};

export default Builds;
