(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{508:function(n,r,e){"use strict";e.r(r),r.default="---\r\nheader: LEGv8 \r\ndescription: Not as complicated as your ARM.\r\n---\r\n\r\n# Hardware Terminology\r\n\r\n### Doubleword\r\n\r\nGroups of 64 bits.\r\n\r\n### Word\r\n\r\nGroups of 32 bits.\r\n\r\n### Registers\r\n\r\nRegisters are used for frequently accessed data.\r\n\r\nIn LEGv8, there are **32 registers** that are 64 bits wide. They are referred to by their number ranging from `X0-X30`. The final register is `XZR` which is the 'zero register' that always contains 0.\r\n\r\nRegisters|Purpose|Notes\r\n:-----:|:-----:|:-----:\r\n`X0`|Return value|The return value of a function is stored here.\r\n`X1-X7`|Passed parameters|Function argument variable storage.\r\n`X8`|Indirect result location register| \r\n`X9-X15`|Temporary variables| \r\n`X16-X17`|Scratch/temporary register|\r\n`X18`|Platform/temporary register| \r\n`X19-X27`|Saved| \r\n`X28`|Stack Pointer (SP)|Points to the memory address of the top of the stack.\r\n`X29`|Frame Pointer (FP)|Points to the memory address at the bottom of the stack.\r\n`X30`|Link Register (LR)|Points to the return address after branching.\r\n`XZR`|Zero Register (XZR)|Contains a constant value of 0.\r\n\r\n### Memory\r\n\r\nThere are $2^{62}$ memory words. Memory is set up like a single dimensional array.\r\n\r\nLEGv8 uses **byte addressing**, so each memory address index (with length of one byte) can be accessed. Therefore, since LEGv8 is a 64 bit architecture, memory addresses are split up into groups of 8 bytes or 64 bits (a [doubleword](#doubleword)).\r\n\r\n```\r\nMemory[0]\r\nMemory[8]\r\nMemory[16]\r\n...\r\n```\r\n\r\n### Stack\r\n\r\nA stack is a portion of memory allocated towards a program.\r\n\r\n# Computer Instruction Representation\r\n\r\n### Instruction\r\n\r\nA series of 32 binary bits that represent an instruction.\r\n\r\n## Fields\r\n\r\nA segment of an instruction. Essentially, the instruction is broken up into a certain number of bits to represent a meaningful operand.\r\n\r\n### opcode\r\n\r\nAn opcode is the type of operation that is being executed. For example `ADD`, `ADDI` or `LDUR`.\r\n\r\n### Rm\r\n\r\nRm is the second register source operand\r\n\r\n### shamt\r\n\r\nshamt is the shift amount.\r\n\r\n### Rn\r\n\r\nRn is the first register source operand.\r\n\r\n### Rd\r\n\r\nRd is the destination register operand. It receives the result of the operation.\r\n\r\n### address\r\n\r\nMemory address offset\r\n\r\n### op2\r\n\r\nOpcode option.\r\n\r\n### Rn\r\n\r\nRn is the CPU register.\r\n\r\n### Rt\r\n\r\nRt is the memory address.\r\n\r\n### immediate\r\n\r\nImmediate is the constant.\r\n\r\n### pc_offset\r\n\r\nPC_Offset is the the program counter offset. This specifies how many bytes in the instruction memory to move from the current address the program counter is pointing to.\r\n\r\n### R-Type Instruction (Register)\r\n\r\nR-Type instructions manipulate registers.\r\n\r\n**opcode**|**Rm**|**shamt**|**Rn**|**Rd**\r\n:-----:|:-----:|:-----:|:-----:|:-----:\r\n11 bits|5 bits|6 bits|5 bits|5 bits\r\n\r\nIn a normal machine instruction, this would look like: `opcode Rd, shamt, Rn, Rm`.\r\n\r\n#### R-Type Instruction Example\r\n\r\nA conversion from an instruction to a decimal representation of the instruction:\r\n\r\n`ADD X1, X2, X3` $\\implies$ `1112 3 0 2 1`\r\n\r\n### D-Type Instruction (Data Transfer)\r\n\r\nR-Type instructions manipulates data between the registers and memory.\r\n\r\n**opcode**|**address**|**op2**|**Rn**|**Rt**\r\n:-----:|:-----:|:-----:|:-----:|:-----:\r\n11 bits|9 bits|2 bits|5 bits|5 bits\r\n\r\nIn a normal machine instruction, this would look like: `opcode Rt, [Rn, #address]`.\r\n\r\n#### D-Type Instruction Example\r\n\r\nA conversion from an instruction to a decimal representation of the instruction:\r\n\r\n`LDUR X1, [X2, #3]` $\\implies$ `1986 3 0 2 1`\r\n\r\n### I-Type Instruction (Immediate)\r\n\r\nR-Type instructions manipulate constants.\r\n\r\n**opcode**|**immediate**|**Rn**|**Rd**\r\n:-----:|:-----:|:-----:|:-----:|:-----:\r\n10 bits|12 bits|5 bits|5 bits\r\n\r\nIn a normal machine instruction, this would look like: `opcode Rd, Rn, #immediate`.\r\n\r\n#### I-Type Instruction Example\r\n\r\nA conversion from an instruction to a decimal representation of the instruction:\r\n\r\n`ADDI X1, X2, #3` $\\implies$ `836 3 2 1`\r\n\r\n### B-Type Instruction (Branch)\r\n\r\nB-Type instructions handle branching (jumping).\r\n\r\n**opcode**|**pc_offset**\r\n:-----:|:-----:\r\n6 bits|26 bits|\r\n\r\nIn a normal machine instruction, this would look like: `opcode pc_offset`.\r\n\r\n#### B-Type Instruction Example\r\n\r\nA conversion from an instruction to a decimal representation of the instruction:\r\n\r\n`B Skip` $\\implies$ `5 25`\r\n\r\nwhere `Skip` is the number of bytes to skip. In this case, it will skip $25$ bytes $\\cdot \\text{ } 4 = 100$ bits.\r\n\r\n#### B-Type Instructions\r\n\r\nB-Type Instruction|Meaning|Note\r\n:-----:|:-----:|:-----:\r\n`B Label`|Branch|Jumps to `Label`.\r\n`BR LR`|Branch to register|Jumps to register `LR`'s address\r\n`BL Label`|Branch with link|Jumps to `Label` and stores the address of the next instruction.\r\n`B.cond Label`|Branch conditionally|Jump to label based on condition code values\r\n\r\n### CB-Type Instruction (Condiitonal Branch)\r\n\r\nCB-Type instructions handle conditional branching.\r\n\r\n**opcode**|**pc_offset**|**Rt**\r\n:-----:|:-----:|:-----:\r\n8 bits|19 bits|5 bits\r\n\r\nIn a normal machine instruction, this would look like: `opcode Rt, pc_offset`.\r\n\r\n#### CB-Type Instruction Example\r\n\r\nA conversion from an instruction to a decimal representation of the instruction:\r\n\r\n`CBZ X1, Skip` $\\implies$ `181 25 1`\r\n\r\nwhere `Skip` is the number of bytes to skip. In this case, it will skip $25 bytes \\cdot 4 = 100 bits$.\r\n\r\n### IW-Type Instruction (Immediate Wide)\r\n\r\nIW-Type instructions handle large constants.\r\n\r\n**opcode**|**block_number**|**constant**|**Rd**\r\n:-----:|:-----:|:-----:|:-----:\r\n9 bits|2 bits|16 bits|5 bits\r\n\r\nIn a normal machine instruction, this would look like: `opcode Rd, constant, LSL block_number`. \r\n\r\n`block_number` is limited to 0, 16, 32, 48.\r\n\r\n#### IW-Type Instruction Example\r\n\r\nA conversion from an instruction to a decimal representation of the instruction:\r\n\r\n`MOVZ X1, 256, LSL 0` $\\implies$ `421 1 256, 0`\r\n\r\n**B-Type Instruction**|**Meaning**|**Note**\r\n:-----:|:-----:|:-----:\r\n`MOVZ register, constant, LSL shift_amount`|Move wide with zeroes|Set the specified quadrant of the register to the constant specified and set the other quadrants to zero.\r\n`MOVK register, constant, LSL shift_amount`|Move wide with keep|Set the specified quadrant of the register to the constant specified and keep the other quadrants the same.\r\n\r\n## Supporting Computer Hardware Procedures\r\n\r\n### Program Counter\r\n\r\nThe program counter holds the address of the current instruction being executed. \r\n\r\n### Stack\r\n\r\nA LIFO queue. A stack is a memory block allocated to a program.\r\n\r\n### Stack Pointer (SP)\r\n\r\nThe stack pointer points to the top of the stack (where the current operation is being done).\r\n\r\n## Translating and Starting a Program\r\n\r\nPipeline of a program:\r\n\r\n$\\fbox{\\text{Program}} \\rightarrow \\text{Compiler} \\rightarrow \\fbox{\\text{Assembly language program}} \\rightarrow \\text{Assembler} \\rightarrow \\fbox{Object File} \\rightarrow \\text{Linker} \\rightarrow \\fbox{Executable} \\rightarrow \\text{Loader} \\rightarrow \\fbox{\\text{Memory}}$\r\n\r\n### Compiler\r\n\r\nA **compiler** converts a textual representation of code (through keywords and symbols) into assembly language.\r\n\r\nIt uses pre-defined templates. \r\n\r\n### Assember\r\n\r\nAn **assembler** converts assembly language code into an object file (binary) or a machine program.\r\n\r\nIt allocates space in memory for the instructions and data.\r\n\r\nAlso, it builds a symbol table - that is, a table containing pairs of symbols its corresponding address.\r\n\r\n#### Object File\r\n\r\nAn **object file** contains the machine language instructions, data and info needed to place instructions into memory.\r\n\r\n**Object File Part**|**Description**\r\n:-----:|:-----:\r\nObject File Header|The size and position of the parts of the object file.\r\nText Segment|The machine language code.\r\nStatic Data Segment|The data allocated for the life of the program\r\nRelocation Information|Instructions and data word addresses in memory\r\nSymbol Table|Remaining labels not defined like external references.\r\n\r\n### Linker\r\n\r\nTurns assembled [object files](#object-file) into an [executable](#executable). It also allows for re-linking through a link editor. To reduce the number of re-linking steps, the link editor looks for diffs in addresses and replaces them accordingly.\r\n\r\n1. Place code and data modules symbolically in memory.\r\n2. Determine addresses of data and instruction labels.\r\n3. Patch internal and external references\r\n\r\n#### Executable\r\n\r\nAn **executable** is a simply an object file that contains no unresolved references.\r\n\r\n### Loader\r\n\r\nA loader takes the [executable](#executable) and reads it into memory.\r\n\r\n#### Statically Linked Libraries\r\n\r\nA library that is linked to a program during link time.\r\n\r\n#### Dynamically Linked Libraries\r\n\r\nA library routine that is linked to a program during execution time.\r\n\r\n# Building a Simple LEGv8 Computer\r\n\r\n## Arithmetic Logic Unit (ALU)\r\n\r\nThe arithmetic logic unit handles various computational operations such as ANDing, ORing, adding, subtracting, NORing and passing inputs.\r\n\r\n| ALU Control Lines | Function |\r\n| -----------------   |\r\n| 0000 | AND          |\r\n| 0001 | OR           |\r\n| 0010 | add          |\r\n| 0110 | subtract     |\r\n| 0111 | pass input b |\r\n| 1100 | NOR          |\r\n\r\n# Pipelining\r\n\r\nPipelining is a technique where multiple instructions are overlapped in execution. It is useful for shaving down time for a large amount of instructions since it increases instruction throughput (not decreasing execution time).\r\n\r\n## Datapath for LEGv8\r\n\r\nInstructions can be split up into five different stages in order to implement the pipeline. Since there are five stages, five instructions can be run each clock cycle.\r\n\r\n### Instruction Fetch\r\n\r\nGet the instruction from the program counter.\r\n\r\n### Instruction Decode / Register File Read\r\n\r\nRetrieve segments of instruction to see what the instruction type it is. Also read register values from the register file if needed.\r\n\r\n### Execution / Address Calculation\r\n\r\nRun any calculations.\r\n\r\n### Data Memory Access\r\n\r\nAccess memory or write to memory.\r\n\r\n### Write Back\r\n\r\nWrite data back into register file.\r\n\r\n## Data Hazards\r\n\r\nWhen an instruction is dependent on an earlier instruction still being processed in the pipeline. \r\n\r\n### Forwarding\r\n\r\nA solution to data hazards is to add hardware to retrieve the missing item early from internal resources.\r\n\r\n### Stalling\r\n\r\nAnother solution to solving the data hazard issue is to stall the pipeline, bubble or insert a `NOP` (no operation) instruction.\r\n\r\n### Predicting\r\n\r\nIt can also try predicting\r\n"}}]);