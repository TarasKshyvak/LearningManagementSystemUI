import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import SubjectsService from "../services/SubjectsService";

const SubjectIdPage = () => {
  const params = useParams();
  const [subject, setSubject] = useState({});
  const [topics, setTopics] = useState([]);

  const [fetchSubjectById, isLoading, error] = useFetching(async (id) => {
    const response = await SubjectsService.getById(id);
    setSubject(response.data);
  });

  const [fetchTopicsBySubjectId, isTopLoading, topError] = useFetching(
    async (id) => {
      const response = await SubjectsService.getTopicsBySubjectId(id);
      setTopics(response.data);
    }
  );

  useEffect(() => {
    fetchSubjectById(params.id);
    fetchTopicsBySubjectId(params.id);
  }, []);

  return (
    <div>
      <h3>{subject.name}</h3>
      {!topics.length && <div>No topics added to this subject yet</div>}
      {topics.map((topic) => (
        <div
          key={topic.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>{topic.name}</div>
          <div>
            {topic.dateOfCreation
              .slice(0, topic.dateOfCreation.indexOf("T"))
              .replace(/-/g, "/")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectIdPage;
