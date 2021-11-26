---
header: LEGv8 
description: Not as complicated as your ARM.
---

# Hardware Terminology

### Doubleword

Groups of 64 bits.

### Word

Groups of 32 bits.

### Registers

Registers are used for frequently accessed data.

In LEGv8, there are **32 registers** that are 64 bits wide. They are referred to by their number ranging from `X0-X30`. The final register is `XZR` which is the 'zero register' that always contains 0.

Registers|Purpose|Notes
:-----:|:-----:|:-----:
`X0`|Return value|The return value of a function is stored here.
`X1-X7`|Passed parameters|Function argument variable storage.
`X8`|Indirect result location register| 
`X9-X15`|Temporary variables| 
`X16-X17`|Scratch/temporary register|
`X18`|Platform/temporary register| 
`X19-X27`|Saved| 
`X28`|Stack Pointer (SP)|Points to the memory address of the top of the stack.
`X29`|Frame Pointer (FP)|Points to the memory address at the bottom of the stack.
`X30`|Link Register (LR)|Points to the return address after branching.
`XZR`|Zero Register (XZR)|Contains a constant value of 0.

### Memory

There are $2^{62}$ memory words. Memory is set up like a single dimensional array.

LEGv8 uses **byte addressing**, so each memory address index (with length of one byte) can be accessed. Therefore, since LEGv8 is a 64 bit architecture, memory addresses are split up into groups of 8 bytes or 64 bits (a [doubleword](#doubleword)).

```
Memory[0]
Memory[8]
Memory[16]
...
```

### Stack

A stack is a portion of memory allocated towards a program.

# Computer Instruction Representation

### Instruction

A series of 32 binary bits that represent an instruction.

## Fields

A segment of an instruction. Essentially, the instruction is broken up into a certain number of bits to represent a meaningful operand.

### opcode

An opcode is the type of operation that is being executed. For example `ADD`, `ADDI` or `LDUR`.

### Rm

Rm is the second register source operand

### shamt

shamt is the shift amount.

### Rn

Rn is the first register source operand.

### Rd

Rd is the destination register operand. It receives the result of the operation.

### address

Memory address offset

### op2

Opcode option.

### Rn

Rn is the CPU register.

### Rt

Rt is the memory address.

### immediate

Immediate is the constant.

### pc_offset

PC_Offset is the the program counter offset. This specifies how many bytes in the instruction memory to move from the current address the program counter is pointing to.

### R-Type Instruction (Register)

R-Type instructions manipulate registers.

**opcode**|**Rm**|**shamt**|**Rn**|**Rd**
:-----:|:-----:|:-----:|:-----:|:-----:
11 bits|5 bits|6 bits|5 bits|5 bits

In a normal machine instruction, this would look like: `opcode Rd, shamt, Rn, Rm`.

#### R-Type Instruction Example

A conversion from an instruction to a decimal representation of the instruction:

`ADD X1, X2, X3` $\implies$ `1112 3 0 2 1`

### D-Type Instruction (Data Transfer)

R-Type instructions manipulates data between the registers and memory.

**opcode**|**address**|**op2**|**Rn**|**Rt**
:-----:|:-----:|:-----:|:-----:|:-----:
11 bits|9 bits|2 bits|5 bits|5 bits

In a normal machine instruction, this would look like: `opcode Rt, [Rn, #address]`.

#### D-Type Instruction Example

A conversion from an instruction to a decimal representation of the instruction:

`LDUR X1, [X2, #3]` $\implies$ `1986 3 0 2 1`

### I-Type Instruction (Immediate)

R-Type instructions manipulate constants.

**opcode**|**immediate**|**Rn**|**Rd**
:-----:|:-----:|:-----:|:-----:|:-----:
10 bits|12 bits|5 bits|5 bits

In a normal machine instruction, this would look like: `opcode Rd, Rn, #immediate`.

#### I-Type Instruction Example

A conversion from an instruction to a decimal representation of the instruction:

`ADDI X1, X2, #3` $\implies$ `836 3 2 1`

### B-Type Instruction (Branch)

B-Type instructions handle branching (jumping).

**opcode**|**pc_offset**
:-----:|:-----:
6 bits|26 bits|

In a normal machine instruction, this would look like: `opcode pc_offset`.

#### B-Type Instruction Example

A conversion from an instruction to a decimal representation of the instruction:

`B Skip` $\implies$ `5 25`

where `Skip` is the number of bytes to skip. In this case, it will skip $25$ bytes $\cdot \text{ } 4 = 100$ bits.

#### B-Type Instructions

B-Type Instruction|Meaning|Note
:-----:|:-----:|:-----:
`B Label`|Branch|Jumps to `Label`.
`BR LR`|Branch to register|Jumps to register `LR`'s address
`BL Label`|Branch with link|Jumps to `Label` and stores the address of the next instruction.
`B.cond Label`|Branch conditionally|Jump to label based on condition code values

### CB-Type Instruction (Condiitonal Branch)

CB-Type instructions handle conditional branching.

**opcode**|**pc_offset**|**Rt**
:-----:|:-----:|:-----:
8 bits|19 bits|5 bits

In a normal machine instruction, this would look like: `opcode Rt, pc_offset`.

#### CB-Type Instruction Example

A conversion from an instruction to a decimal representation of the instruction:

`CBZ X1, Skip` $\implies$ `181 25 1`

where `Skip` is the number of bytes to skip. In this case, it will skip $25 bytes \cdot 4 = 100 bits$.

### IW-Type Instruction (Immediate Wide)

IW-Type instructions handle large constants.

**opcode**|**block_number**|**constant**|**Rd**
:-----:|:-----:|:-----:|:-----:
9 bits|2 bits|16 bits|5 bits

In a normal machine instruction, this would look like: `opcode Rd, constant, LSL block_number`. 

`block_number` is limited to 0, 16, 32, 48.

#### IW-Type Instruction Example

A conversion from an instruction to a decimal representation of the instruction:

`MOVZ X1, 256, LSL 0` $\implies$ `421 1 256, 0`

**B-Type Instruction**|**Meaning**|**Note**
:-----:|:-----:|:-----:
`MOVZ register, constant, LSL shift_amount`|Move wide with zeroes|Set the specified quadrant of the register to the constant specified and set the other quadrants to zero.
`MOVK register, constant, LSL shift_amount`|Move wide with keep|Set the specified quadrant of the register to the constant specified and keep the other quadrants the same.

## Supporting Computer Hardware Procedures

### Program Counter

The program counter holds the address of the current instruction being executed. 

### Stack

A LIFO queue. A stack is a memory block allocated to a program.

### Stack Pointer (SP)

The stack pointer points to the top of the stack (where the current operation is being done).

## Translating and Starting a Program

Pipeline of a program:

$\fbox{\text{Program}} \rightarrow \text{Compiler} \rightarrow \fbox{\text{Assembly language program}} \rightarrow \text{Assembler} \rightarrow \fbox{Object File} \rightarrow \text{Linker} \rightarrow \fbox{Executable} \rightarrow \text{Loader} \rightarrow \fbox{\text{Memory}}$

### Compiler

A **compiler** converts a textual representation of code (through keywords and symbols) into assembly language.

It uses pre-defined templates. 

### Assember

An **assembler** converts assembly language code into an object file (binary) or a machine program.

It allocates space in memory for the instructions and data.

Also, it builds a symbol table - that is, a table containing pairs of symbols its corresponding address.

#### Object File

An **object file** contains the machine language instructions, data and info needed to place instructions into memory.

**Object File Part**|**Description**
:-----:|:-----:
Object File Header|The size and position of the parts of the object file.
Text Segment|The machine language code.
Static Data Segment|The data allocated for the life of the program
Relocation Information|Instructions and data word addresses in memory
Symbol Table|Remaining labels not defined like external references.

### Linker

Turns assembled [object files](#object-file) into an [executable](#executable). It also allows for re-linking through a link editor. To reduce the number of re-linking steps, the link editor looks for diffs in addresses and replaces them accordingly.

1. Place code and data modules symbolically in memory.
2. Determine addresses of data and instruction labels.
3. Patch internal and external references

#### Executable

An **executable** is a simply an object file that contains no unresolved references.

### Loader

A loader takes the [executable](#executable) and reads it into memory.

#### Statically Linked Libraries

A library that is linked to a program during link time.

#### Dynamically Linked Libraries

A library routine that is linked to a program during execution time.

# Building a Simple LEGv8 Computer

## Arithmetic Logic Unit (ALU)

The arithmetic logic unit handles various computational operations such as ANDing, ORing, adding, subtracting, NORing and passing inputs.

| ALU Control Lines | Function |
| -----------------   |
| 0000 | AND          |
| 0001 | OR           |
| 0010 | add          |
| 0110 | subtract     |
| 0111 | pass input b |
| 1100 | NOR          |

# Pipelining

Pipelining is a technique where multiple instructions are overlapped in execution. It is useful for shaving down time for a large amount of instructions since it increases instruction throughput (not decreasing execution time).

## Datapath for LEGv8

Instructions can be split up into five different stages in order to implement the pipeline. Since there are five stages, five instructions can be run each clock cycle.

### Instruction Fetch

Get the instruction from the program counter.

### Instruction Decode / Register File Read

Retrieve segments of instruction to see what the instruction type it is. Also read register values from the register file if needed.

### Execution / Address Calculation

Run any calculations.

### Data Memory Access

Access memory or write to memory.

### Write Back

Write data back into register file.

## Data Hazards

When an instruction is dependent on an earlier instruction still being processed in the pipeline. 

### Forwarding

A solution to data hazards is to add hardware to retrieve the missing item early from internal resources.

### Stalling

Another solution to solving the data hazard issue is to stall the pipeline, bubble or insert a `NOP` (no operation) instruction.

### Predicting

It can also try predicting
