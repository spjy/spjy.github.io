(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{492:function(e,n,t){"use strict";t.r(n),n.default='---\nheader: CMake\ndescription: Making C building great again.\n---\n\n# CMake\n\nCMake is a build system to compile C/C++ scripts. You should have an understanding of Makefiles before using CMake; see the [Makefiles]() section.\n\n## Core CMake Syntax\n\n#### Version Number\n\nAt the top, you should include the minimum CMake version.\n\n```\ncmake_minimum_required (VERSION x.x.x)\n```\n\n#### Project Name\n\n```\nproject(projectName)\n```\n\n#### Setting variables\n\n```\nset(VARIABLE_NAME "variable")\n```\n\n#### Using user-defined variables\n\n```\nset(VARIABLE_TWO "${VARIABLE_NAME}")\n```\n\n#### Using CMake defined variables\n\nReference [CMake variables](https://cmake.org/cmake/help/latest/manual/cmake-variables.7.html).\n\n#### Printing to console\n\n```\nmessage("Hello world!")\n```\n\n#### Include Directories\n\nInclude directories specifies the paths to look for header files. For instance, if I was in the source directory and the include folder is in a subdirectory to it:\n\n```\ninclude_directories(${CMAKE_SOURCE_DIR}/include)\n```\n\n#### Setting C++ standards\n\n```\nset(CMAKE_CXX_STANDARD 11) # Enables C++11 standard\nset(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++1y -Wall") # Sets flags when compiling scripts\n```\n\n#### Include Libraries\n\nIf you want to import a library, you can specify the name of it using `find_package`.\n\n```\nfind_package(library_name)\n```\n\n#### Link Directories\n\nFirst you must specify where the header files are located using include directories:\n\n```\ninclude_directories("path/to/directories")\n```\n\nThen, you must specify the path to where the `.so` files are of the library you want to import\n\n```\nlink_directories("path/to/so/files")\n```\n\n#### Adding executable\n\nThese are the cpp files that you want to build.\n\n```\nadd_executable(executable_name executable_file.cpp)\n```\n\n#### Target Link Libraries\n\nFinally, you must specify the name of the library excluding the preceding `lib` and superceding `.so`. For instance, if I had `libname.so`, I would specify it as `name` only.\n\n\n\n# Makefiles\n\nMakefile is a configuration file to tell the C/C++ compiler how to combine everything together.\n\nLet\'s say we have three files:\n\n* main.c\n* external.c\n* external.h\n\nwhere `main.c` is the program that you want to import an external library from. We can use the command:\n\n```\ng++ -o main main.c external.c -I.\n```\n\n1. It will create a `main.o` file, specified by the `-o` flag.\n2. It will look in the current directory for the header file, `external.h`.\n3. It will compile the two C files, `main.c` and `external.c`.\n\n## Core Syntax\n\n```\nvariable = value\n\ntarget: prerequisites\n    recipe\n```\n\n#### Target\n\nA target is the name of rule that you want to run. It is callable in the `make` command line argument.\n\n#### Prerequisite\n\nA prerequisite is where you specify the dependencies that the target requires.\n\n#### Recipe\n\nA recipe is the command that is run for the specific target.\n\n#### Variables\n\nA variable is a reusable value.\n\n#### Example\n\n```\nTARGETS = main\n\nall: $(TARGETS)\n\nmain: main.c external.h\n    gcc -c main.c external.c -I. -o main.o\n\nclean:\n    rm *.o\n```\n'}}]);