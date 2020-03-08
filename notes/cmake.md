---
header: CMake
description: Making C building great again.
---

# CMake

CMake is a build system to compile C/C++ scripts. You should have an understanding of Makefiles before using CMake; see the [Makefiles]() section.

## Core CMake Syntax

#### Version Number

At the top, you should include the minimum CMake version.

```
cmake_minimum_required (VERSION x.x.x)
```

#### Project Name

```
project(projectName)
```

#### Setting variables

```
set(VARIABLE_NAME "variable")
```

#### Using user-defined variables

```
set(VARIABLE_TWO "${VARIABLE_NAME}")
```

#### Using CMake defined variables

Reference [CMake variables](https://cmake.org/cmake/help/latest/manual/cmake-variables.7.html).

#### Printing to console

```
message("Hello world!")
```

#### Include Directories

Include directories specifies the paths to look for header files. For instance, if I was in the source directory and the include folder is in a subdirectory to it:

```
include_directories(${CMAKE_SOURCE_DIR}/include)
```

#### Setting C++ standards

```
set(CMAKE_CXX_STANDARD 11) # Enables C++11 standard
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++1y -Wall") # Sets flags when compiling scripts
```

#### Include Libraries

If you want to import a library, you can specify the name of it using `find_package`.

```
find_package(library_name)
```

#### Link Directories

First you must specify where the header files are located using include directories:

```
include_directories("path/to/directories")
```

Then, you must specify the path to where the `.so` files are of the library you want to import

```
link_directories("path/to/so/files")
```

#### Adding executable

These are the cpp files that you want to build.

```
add_executable(executable_name executable_file.cpp)
```

#### Target Link Libraries

Finally, you must specify the name of the library excluding the preceding `lib` and superceding `.so`. For instance, if I had `libname.so`, I would specify it as `name` only.



# Makefiles

Makefile is a configuration file to tell the C/C++ compiler how to combine everything together.

Let's say we have three files:

* main.c
* external.c
* external.h

where `main.c` is the program that you want to import an external library from. We can use the command:

```
g++ -o main main.c external.c -I.
```

1. It will create a `main.o` file, specified by the `-o` flag.
2. It will look in the current directory for the header file, `external.h`.
3. It will compile the two C files, `main.c` and `external.c`.

## Core Syntax

```
variable = value

target: prerequisites
    recipe
```

#### Target

A target is the name of rule that you want to run. It is callable in the `make` command line argument.

#### Prerequisite

A prerequisite is where you specify the dependencies that the target requires.

#### Recipe

A recipe is the command that is run for the specific target.

#### Variables

A variable is a reusable value.

#### Example

```
TARGETS = main

all: $(TARGETS)

main: main.c external.h
    gcc -c main.c external.c -I. -o main.o

clean:
    rm *.o
```
