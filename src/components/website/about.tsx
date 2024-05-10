import { BookOpen, ChevronRightIcon, School, ThumbsUp } from "lucide-react";

export default function About() {
  return (
    <div className="container py-12 lg:py-16 px-3">
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            A Collaborative Learning Management System
          </h2>
          <p className="mt-3 text-muted-foreground">
            Studium is a modern learning management system designed to
            facilitate seamless collaboration and enhance the learning
            experience for students and educators.
          </p>
          <p className="mt-5">
            <a
              className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4"
              href="#"
            >
              Learn more about Studium
              <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
            </a>
          </p>
        </div>
        {/* End Col */}
        <div className="space-y-6 lg:space-y-10">
          {/* Icon Block */}
          <div className="flex">
            {/* Icon */}
            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
              <BookOpen className="flex-shrink-0 w-5 h-5" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Course Management
              </h3>
              <p className="mt-1 text-muted-foreground">
                Studium allows educators to create and manage courses, upload
                materials, assign tasks, and track student progress seamlessly.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex">
            {/* Icon */}
            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
              <School className="flex-shrink-0 w-5 h-5" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Collaborative Learning
              </h3>
              <p className="mt-1 text-muted-foreground">
                Studium facilitates real-time collaboration, enabling students
                and educators to work together, share ideas, and provide
                feedback seamlessly.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex">
            {/* Icon */}
            <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
              <ThumbsUp className="flex-shrink-0 w-5 h-5" />
            </span>
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                User-Friendly Interface
              </h3>
              <p className="mt-1 text-muted-foreground">
                Studium boasts a sleek and intuitive interface, making it easy
                for users to navigate and access the tools they need for an
                optimal learning experience.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
}
