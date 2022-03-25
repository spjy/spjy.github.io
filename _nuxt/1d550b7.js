(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{496:function(r,e,n){"use strict";n.r(e),e.default='---\r\nheader: CMake\r\ndescription: Making C building great again.\r\n---\r\n\r\n# CMake\r\n\r\nCMake is a build system to compile C/C++ scripts. You should have an understanding of Makefiles before using CMake; see the [Makefiles]() section.\r\n\r\n## Core CMake Syntax\r\n\r\n#### Version Number\r\n\r\nAt the top, you should include the minimum CMake version.\r\n\r\n```\r\ncmake_minimum_required (VERSION x.x.x)\r\n```\r\n\r\n#### Project Name\r\n\r\n```\r\nproject(projectName)\r\n```\r\n\r\n#### Setting variables\r\n\r\n```\r\nset(VARIABLE_NAME "variable")\r\n```\r\n\r\n#### Using user-defined variables\r\n\r\n```\r\nset(VARIABLE_TWO "${VARIABLE_NAME}")\r\n```\r\n\r\n#### Using CMake defined variables\r\n\r\nReference [CMake variables](https://cmake.org/cmake/help/latest/manual/cmake-variables.7.html).\r\n\r\n#### Printing to console\r\n\r\n```\r\nmessage("Hello world!")\r\n```\r\n\r\n#### Include Directories\r\n\r\nInclude directories specifies the paths to look for header files. For instance, if I was in the source directory and the include folder is in a subdirectory to it:\r\n\r\n```\r\ninclude_directories(${CMAKE_SOURCE_DIR}/include)\r\n```\r\n\r\n#### Setting C++ standards\r\n\r\n```\r\nset(CMAKE_CXX_STANDARD 11) # Enables C++11 standard\r\nset(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++1y -Wall") # Sets flags when compiling scripts\r\n```\r\n\r\n#### Include Libraries\r\n\r\nIf you want to import a library, you can specify the name of it using `find_package`.\r\n\r\n```\r\nfind_package(library_name)\r\n```\r\n\r\n#### Link Directories\r\n\r\nFirst you must specify where the header files are located using include directories:\r\n\r\n```\r\ninclude_directories("path/to/directories")\r\n```\r\n\r\nThen, you must specify the path to where the `.so` files are of the library you want to import\r\n\r\n```\r\nlink_directories("path/to/so/files")\r\n```\r\n\r\n#### Adding executable\r\n\r\nThese are the cpp files that you want to build.\r\n\r\n```\r\nadd_executable(executable_name executable_file.cpp)\r\n```\r\n\r\n#### Target Link Libraries\r\n\r\nFinally, you must specify the name of the library excluding the preceding `lib` and superceding `.so`. For instance, if I had `libname.so`, I would specify it as `name` only.\r\n\r\n\r\n\r\n# Makefiles\r\n\r\nMakefile is a configuration file to tell the C/C++ compiler how to combine everything together.\r\n\r\nLet\'s say we have three files:\r\n\r\n* main.c\r\n* external.c\r\n* external.h\r\n\r\nwhere `main.c` is the program that you want to import an external library from. We can use the command:\r\n\r\n```\r\ng++ -o main main.c external.c -I.\r\n```\r\n\r\n1. It will create a `main.o` file, specified by the `-o` flag.\r\n2. It will look in the current directory for the header file, `external.h`.\r\n3. It will compile the two C files, `main.c` and `external.c`.\r\n\r\n## Core Syntax\r\n\r\n```\r\nvariable = value\r\n\r\ntarget: prerequisites\r\n    recipe\r\n```\r\n\r\n#### Target\r\n\r\nA target is the name of rule that you want to run. It is callable in the `make` command line argument.\r\n\r\n#### Prerequisite\r\n\r\nA prerequisite is where you specify the dependencies that the target requires.\r\n\r\n#### Recipe\r\n\r\nA recipe is the command that is run for the specific target.\r\n\r\n#### Variables\r\n\r\nA variable is a reusable value.\r\n\r\n#### Example\r\n\r\n```\r\nTARGETS = main\r\n\r\nall: $(TARGETS)\r\n\r\nmain: main.c external.h\r\n    gcc -c main.c external.c -I. -o main.o\r\n\r\nclean:\r\n    rm *.o\r\n```\r\n'}}]);